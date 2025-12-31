import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, phone, service, message } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Sending to yourself
            replyTo: email,
            subject: `New Contact Form Submission - Synapse Digital`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #E2E8F0; background-color: #0F172A; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; background-color: #1E293B; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
              .header { background-color: #0F172A; padding: 32px 24px; text-align: center; border-bottom: 2px solid #00C2FF; }
              .header h1 { margin: 0; color: #FFFFFF; font-size: 24px; font-weight: 700; }
              .header span { color: #00C2FF; }
              .content { padding: 32px 24px; }
              .field { margin-bottom: 24px; }
              .field-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #94A3B8; font-weight: 600; margin-bottom: 4px; }
              .field-value { font-size: 16px; color: #F8FAFC; font-weight: 500; }
              .message-box { background-color: #0F172A; border-radius: 8px; padding: 20px; border: 1px solid #334155; margin-top: 8px; }
              .footer { background-color: #0F172A; padding: 24px; text-align: center; font-size: 12px; color: #64748B; border-top: 1px solid #334155; }
              .highlight { color: #00C2FF; }
            </style>
          </head>
          <body>
            <div style="padding: 20px;">
              <div class="container">
                <div class="header">
                  <h1>Synapse <span>Digital</span></h1>
                </div>
                
                <div class="content">
                  <div style="margin-bottom: 32px; text-align: center;">
                    <h2 style="margin: 0; color: #F8FAFC; font-size: 20px;">New Inquiry Received</h2>
                    <p style="margin: 8px 0 0; color: #94A3B8;">A new contact form submission has arrived.</p>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                    <div class="field">
                      <div class="field-label">Name</div>
                      <div class="field-value">${name}</div>
                    </div>
                    <div class="field">
                      <div class="field-label">Email</div>
                      <div class="field-value"><a href="mailto:${email}" style="color: #00C2FF; text-decoration: none;">${email}</a></div>
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                    <div class="field">
                      <div class="field-label">Company</div>
                      <div class="field-value">${company || '<span style="color: #64748B;">Not provided</span>'}</div>
                    </div>
                    <div class="field">
                      <div class="field-label">Phone</div>
                      <div class="field-value">${phone || '<span style="color: #64748B;">Not provided</span>'}</div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="field-label">Service Interest</div>
                    <div class="field-value" style="color: #00C2FF;">${service}</div>
                  </div>

                  <div class="field">
                    <div class="field-label">Message</div>
                    <div class="message-box">
                      <div class="field-value" style="white-space: pre-wrap;">${message}</div>
                    </div>
                  </div>
                </div>

                <div class="footer">
                  <p>&copy; ${new Date().getFullYear()} Synapse Digital. All rights reserved.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
