import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",

      port: 2525,

      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const url = `${process.env.DOMAIN}${
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
      Click the link below:
      </p>

      <p>
      ${url}
      </p>

      `,
    };

    const mailresponse = await transport.sendMail(mailOptions);

    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
