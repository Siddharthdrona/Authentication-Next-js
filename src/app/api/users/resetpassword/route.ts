import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json();

    if (!token || !password) {
      return NextResponse.json(
        {
          error: "Missing fields",
        },
        {
          status: 400,
        },
      );
    }

    const user = await User.findOne({
      forgotPasswordToken: token,
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "Invalid token",
        },
        {
          status: 400,
        },
      );
    }

    // check expiry

    if (user.forgotPasswordTokenExpiry < Date.now()) {
      return NextResponse.json(
        {
          error: "Token expired",
        },
        {
          status: 400,
        },
      );
    }

    // hash new password

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    // remove token after use

    user.forgotPasswordToken = undefined;

    user.forgotPasswordTokenExpiry = undefined;

    await user.save();

    return NextResponse.json({
      message: "Password reset successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
