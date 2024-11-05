import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "kabraliev2005@gmail.com",
            pass: "UZBcoders2005",
        },
    });

    // Send email
    await transporter.sendMail({
        from: email,
        to: "kabraliev2005@gmail.com",
        subject: `New message from ${name}`,
        text: message,
        html: `<p>${message}</p>`,
    });

    return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
    );
}
