import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/model/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { fullname, email, phone, company, service, message } = await req.json();

  try {
    // 1. Connect to MongoDB and save the contact message
    await connectDB();
    await Contact.create({ fullname, email, phone, company, service, message });

    // 2. Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // 3. Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // Receiving address (can be different from sender)
      subject: `New message from ${fullname} - Service: ${service}`,
      text: `
        Name: ${fullname}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        Service Needed: ${service}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #7f5af0;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${fullname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Needed:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
        </div>
      `
    };

    // 4. Send the email
    await transporter.sendMail(mailOptions);

    // 5. Return success response
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });

  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = Object.values(error.errors).map(err => err.message);
      return NextResponse.json({ msg: errorList, success: false });
    }

    console.error("Unexpected error:", error);
    return NextResponse.json({
      msg: ["Unable to send message."],
      success: false,
    }, { status: 500 });
  }
}