// import { createClient } from "@sanity/client";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { client } from '@/lib/sanity'



export async function POST(req) {

    try {
        const body = await req.json();
        const { fullName, email, mobile, message } = body;

        // 1. Basic Validation
        if (!fullName || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 2. Sanity mein data save karna (Aapke schema ke hisaab se fields)
        const sanityResponse = await client.create({
            _type: "contact", // Jo schema name aapne rakha hai
            fullName,
            email,
            mobile: mobile || "Not Provided",
            message,
            submittedAt: new Date().toISOString(),
        });

        // 3. Nodemailer Setup
        if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            // 4. Professional HTML Email Template
            const mailOptions = {
                from: `"Pure Tech Zone Website" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_TO,
                subject: `🚀 New Inquiry from ${fullName}`,
                html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
              <h2 style="color: #333;">New Website Inquiry</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${mobile}</p>
              <hr />
              <p><strong>Message:</strong></p>
              <p style="background: #f9f9f9; padding: 15px;">${message}</p>
              <br />
              <p style="font-size: 0.8em; color: #888;">Lead ID: ${sanityResponse._id}</p>
            </div>
          `,
            };

            await transporter.sendMail(mailOptions);
        } else {
            console.warn("⚠️ SMTP credentials missing in .env. Skipping email notification, but lead is saved to Sanity!");
        }

        return NextResponse.json({ message: "Inquiry received successfully!" }, { status: 200 });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal Server Error: " + error.message }, { status: 500 });
    }
}