import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        {
          status: 400,
        },
      );
    }

    if (!user.isVerified) {
      return NextResponse.json(
        {
          error: "Please verify your email first",
        },
        {
          status: 400,
        },
      );
    }

    const resetToken = await bcrypt.hash(user._id.toString(), 10);

    user.forgotPasswordToken = resetToken;

    user.forgotPasswordTokenExpiry = Date.now() + 3600000;

    await user.save();

    // send email here

    return NextResponse.json({
      message: "Reset email sent",
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
