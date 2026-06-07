import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Sanitize text to prevent XSS in HTML emails
function sanitize(str: string | undefined): string {
  if (!str) return 'N/A';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation
    if (!data.name || !data.email) {
      return NextResponse.json({ status: 'error', message: 'Name and email are required.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ status: 'error', message: 'Invalid email address.' }, { status: 400 });
    }

    // Use env vars for SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.itsectechnology.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'info@itsectechnology.com',
        pass: process.env.SMTP_PASS,
      },
    });

    const dept = sanitize(data.department || data.tab || 'General');
    const name = sanitize(data.name);
    const email = sanitize(data.email);
    const phone = sanitize(data.phone);
    const urgency = sanitize(data.urgency);

    let emailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0f1e;color:#e2e8f0;padding:24px;border-radius:12px;border:1px solid #1e3a5f;">
        <div style="background:linear-gradient(135deg,#1b75d6,#14aeb4);padding:20px;border-radius:8px;margin-bottom:24px;text-align:center;">
          <h1 style="color:white;margin:0;font-size:22px;">ITSEC Technology</h1>
          <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:13px;">New Portal Submission — ${dept} Department</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:10px;border-bottom:1px solid #1e3a5f;color:#94a3b8;width:160px;font-size:13px;">Full Name</td><td style="padding:10px;border-bottom:1px solid #1e3a5f;font-weight:bold;">${name}</td></tr>
          <tr><td style="padding:10px;border-bottom:1px solid #1e3a5f;color:#94a3b8;font-size:13px;">Email</td><td style="padding:10px;border-bottom:1px solid #1e3a5f;">${email}</td></tr>
          <tr><td style="padding:10px;border-bottom:1px solid #1e3a5f;color:#94a3b8;font-size:13px;">Phone</td><td style="padding:10px;border-bottom:1px solid #1e3a5f;">${phone}</td></tr>
          <tr><td style="padding:10px;border-bottom:1px solid #1e3a5f;color:#94a3b8;font-size:13px;">Urgency</td><td style="padding:10px;border-bottom:1px solid #1e3a5f;"><span style="background:#1b75d6;color:white;padding:2px 10px;border-radius:20px;font-size:12px;">${urgency}</span></td></tr>
          ${data.company ? `<tr><td style="padding:10px;border-bottom:1px solid #1e3a5f;color:#94a3b8;font-size:13px;">Company</td><td style="padding:10px;border-bottom:1px solid #1e3a5f;">${sanitize(data.company)}</td></tr>` : ''}
          ${data.service ? `<tr><td style="padding:10px;border-bottom:1px solid #1e3a5f;color:#94a3b8;font-size:13px;">Service</td><td style="padding:10px;border-bottom:1px solid #1e3a5f;">${sanitize(data.service)}</td></tr>` : ''}
          ${data.product ? `<tr><td style="padding:10px;border-bottom:1px solid #1e3a5f;color:#94a3b8;font-size:13px;">Product</td><td style="padding:10px;border-bottom:1px solid #1e3a5f;">${sanitize(data.product)}</td></tr>` : ''}
          ${data.projectType ? `<tr><td style="padding:10px;border-bottom:1px solid #1e3a5f;color:#94a3b8;font-size:13px;">Project Type</td><td style="padding:10px;border-bottom:1px solid #1e3a5f;">${sanitize(data.projectType)}</td></tr>` : ''}
          ${data.interestedServices ? `<tr><td style="padding:10px;border-bottom:1px solid #1e3a5f;color:#94a3b8;font-size:13px;">Interested In</td><td style="padding:10px;border-bottom:1px solid #1e3a5f;">${sanitize(data.interestedServices)}</td></tr>` : ''}
        </table>
        ${data.issueDescription ? `<div style="margin-top:16px;padding:16px;background:#0f1e3a;border-radius:8px;border-left:3px solid #ef4444;"><p style="color:#94a3b8;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Issue Description</p><p style="margin:0;">${sanitize(data.issueDescription)}</p></div>` : ''}
        ${data.projectDescription ? `<div style="margin-top:16px;padding:16px;background:#0f1e3a;border-radius:8px;border-left:3px solid #10b981;"><p style="color:#94a3b8;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Project Description</p><p style="margin:0;">${sanitize(data.projectDescription)}</p></div>` : ''}
        ${data.quoteDetails ? `<div style="margin-top:16px;padding:16px;background:#0f1e3a;border-radius:8px;border-left:3px solid #f59e0b;"><p style="color:#94a3b8;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Quote Details</p><p style="margin:0;">${sanitize(data.quoteDetails)}</p></div>` : ''}
        ${data.setup ? `<div style="margin-top:16px;padding:16px;background:#0f1e3a;border-radius:8px;border-left:3px solid #1b75d6;"><p style="color:#94a3b8;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Current IT Setup</p><p style="margin:0;">${sanitize(data.setup)}</p></div>` : ''}
        ${data.challenges ? `<div style="margin-top:16px;padding:16px;background:#0f1e3a;border-radius:8px;border-left:3px solid #8b5cf6;"><p style="color:#94a3b8;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Challenges</p><p style="margin:0;">${sanitize(data.challenges)}</p></div>` : ''}
        <div style="margin-top:24px;text-align:center;color:#475569;font-size:11px;">
          <p>Sent via ITSEC Technology Portal — ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Addis_Ababa' })} EAT</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: '"ITSEC Website Portal" <info@itsectechnology.com>',
      to: process.env.SMTP_TO || 'info@itsectechnology.com',
      subject: `[${dept.toUpperCase()}] New Portal Submission from ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ status: 'success', message: 'Email sent successfully' }, { status: 200 });

  } catch (error: any) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
