import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Create a transporter using the SMTP configuration
    // Based on the details found in your smtp_config.php
    const transporter = nodemailer.createTransport({
      host: 'mail.itsectechnology.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'info@itsectechnology.com',
        pass: 'NASA@itsec2123',
      },
    });

    // Format the email content
    let emailHtml = `
      <h2>New Contact Request: ${data.department || data.tab || 'General'}</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
      <p><strong>Urgency:</strong> ${data.urgency}</p>
    `;

    // Add dynamic fields based on what was submitted
    if (data.company) emailHtml += `<p><strong>Company:</strong> ${data.company}</p>`;
    if (data.service) emailHtml += `<p><strong>Service:</strong> ${data.service}</p>`;
    if (data.product) emailHtml += `<p><strong>Product:</strong> ${data.product}</p>`;
    if (data.issueDescription) emailHtml += `<p><strong>Issue:</strong> ${data.issueDescription}</p>`;
    if (data.projectType) emailHtml += `<p><strong>Project Type:</strong> ${data.projectType}</p>`;
    if (data.projectDescription) emailHtml += `<p><strong>Project Description:</strong> ${data.projectDescription}</p>`;
    if (data.interestedServices) emailHtml += `<p><strong>Interested In:</strong> ${data.interestedServices}</p>`;
    if (data.quoteDetails) emailHtml += `<p><strong>Quote Details:</strong> ${data.quoteDetails}</p>`;
    if (data.setup) emailHtml += `<p><strong>Current Setup:</strong> ${data.setup}</p>`;
    if (data.challenges) emailHtml += `<p><strong>Challenges:</strong> ${data.challenges}</p>`;

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"ITSEC Website Portal" <info@itsectechnology.com>', // sender address
      to: 'info@itsectechnology.com', // list of receivers
      subject: `New ITSEC Portal Submission from ${data.name}`, // Subject line
      html: emailHtml, // html body
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
