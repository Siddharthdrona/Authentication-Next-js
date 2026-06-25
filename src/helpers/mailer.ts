import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hashed Token
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    // Verifying Email
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    }
    // Resetting Password
    else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "44a0c6e814ed8c",
        pass: "dc0405aa82fd9d",
      },
    });

    const resetUrl = `${process.env.DOMAIN}${
      emailType === "VERIFY"
        ? `/verifyemail?token=${hashedToken}`
        : `/resetpassword?token=${hashedToken}`
    }`;

    const mailOptions = {
      from: "siddudrona@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `
    <p>
      ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"}
    </p>
    <p>
      Copy and paste this link in your browser:
    </p>
    <p>
      ${resetUrl}
    </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);

    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
