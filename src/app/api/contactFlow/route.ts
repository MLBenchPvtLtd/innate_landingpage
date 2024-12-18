// src/app/api/contactFlow/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const data = await req.json();

    // Configure the email transport using SMTP (for example, using Gmail)
    const transporter = nodemailer.createTransport({
        service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, 
      auth: {
        user: "salmanamjad902@gmail.com",
        pass: "bpfw lpov nuis adbm",
      },
    });

        // Create a dynamic HTML email template
        const emailTemplate = `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; }
              h2 { color: #2c3e50; }
              .section { margin: 20px 0; }
              .section label { font-weight: bold; }
              .section p { margin-left: 10px; }
            </style>
          </head>
          <body>
            <h2>New Form Submission</h2>
            <div class="section">
              <label>Step 1 - Selected Options:</label>
              <p>${data.step1.selectedOptions.join(', ')}</p>
              <label>Comment:</label>
              <p>${data.step1.comment}</p>
            </div>
            <div class="section">
              <label>Step 2 - Selected Options:</label>
              <p>${data.step2.selectedOptions.join(', ')}</p>
            </div>
            <div class="section">
              <label>Step 4 - Selected Range:</label>
              <p>${data.step4.selectedOptions.join(', ')}</p>
            </div>
            <div class="section">
              <label>Step 5 - Selected Style:</label>
              <p>Title: ${data.step5.selectedStyle.title}</p>
              <p>Description: ${data.step5.selectedStyle.description}</p>
              <img src="${data.step5.selectedStyle.imageSrc.src}" alt="${data.step5.selectedStyle.title}" width="200" />
            </div>
            <div class="section">
              <label>Step 6 - Address:</label>
              <p>${data.step6.address}</p>
            </div>
            <div class="section">
              <label>Step 8 - Name:</label>
              <p>${data.step8.name}</p>
              <label>Phone:</label>
              <p>${data.step8.phone}</p>
            </div>
          </body>
        </html>
      `;
  
     
    // Set up email options
    const mailOptions = {
      from: "salmanamjad902@gmail.com", // sender address
      to: 'salmanamjad902@gmail.com',  // recipient address
      subject: 'New Form Submission',
      html: emailTemplate,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ message: 'Data received and email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error processing request', error: error.message }, { status: 400 });
  }
}
