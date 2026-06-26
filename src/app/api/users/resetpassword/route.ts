import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json();

    if (!token) {
      return NextResponse.json(
        {
          error: "Invalid token",
        },
        {
          status: 400,
        },
      );
    }

    const user = await User.findOne({
      forgotPasswordToken: token,

      forgotPasswordTokenExpiry: {
        $gt: Date.now(),
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "Token expired or invalid",
        },
        {
          status: 400,
        },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    user.forgotPasswordToken = undefined;

    user.forgotPasswordTokenExpiry = undefined;

    await user.save();

    return NextResponse.json({
      message: "Password changed successfully",

      success: true,
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
