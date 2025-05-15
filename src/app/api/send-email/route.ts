import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Get request body
    const body = await request.json();
    const { name, email, phone, message, to, subject } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a SMTP transporter for Gmail
    // Important: For Gmail, you need to use an App Password
    // 1. Go to your Google Account > Security
    // 2. Enable 2-Step Verification if not already enabled
    // 3. Under "App passwords", generate a new app password for "Mail"
    // 4. Use that password below
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // Try to use environment variable first, fall back to hardcoded value
        user: process.env.EMAIL_USER || 'mayur@aneeverse.com',
        // ⚠️ IMPORTANT: Replace 'YOUR_APP_PASSWORD_HERE' with the 16-character app password from Google
        // For security reasons, consider using environment variables (process.env.EMAIL_PASS)
        pass: process.env.EMAIL_PASS || 'lifd ysro evjq hglp'
      }
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`, // sender name and address
      to: to, // recipient email address
      subject: subject || 'New Contact Form Submission - SV Marines',
      replyTo: email, // allows replying directly to the sender
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    };

    console.log('Attempting to send email...');
    
    try {
      // Send the actual email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: %s', info.messageId);
      
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Failed to send with Gmail, error:', emailError);
      
      // Fallback to Ethereal for testing if Gmail fails
      console.log('Falling back to test email service...');
      const testAccount = await nodemailer.createTestAccount();
      const testTransporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
      
      const testInfo = await testTransporter.sendMail(mailOptions);
      console.log('Test email sent: %s', testInfo.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(testInfo));
      
      return NextResponse.json(
        { 
          message: 'Email delivery to Gmail failed, but you can view a test preview',
          previewUrl: nodemailer.getTestMessageUrl(testInfo),
          error: 'Gmail configuration issue - please check the console logs'
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error in email API route:', error);
    return NextResponse.json(
      { message: 'Failed to process email request' },
      { status: 500 }
    );
  }
} 