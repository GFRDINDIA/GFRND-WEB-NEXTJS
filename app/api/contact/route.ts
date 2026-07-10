import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const BRAND = {
  name: "Grace &amp; Faith R&amp;D",
  shortName: "GFRND",
  tagline: "Innovation Lab",
  website: "https://www.gfrnd.com",
  email: "contact@gfrnd.com",
  blue: "#2563eb",
  green: "#10b981",
  dark: "#0f172a",
};

function headerBlock(title: string, subtitle: string) {
  return `
    <tr>
      <td align="center" style="padding:0;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:linear-gradient(135deg,${BRAND.blue} 0%,${BRAND.green} 100%);border-radius:16px 16px 0 0;padding:36px 40px 32px;">
              <!-- Logo row -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background:rgba(255,255,255,0.2);border-radius:12px;padding:10px 16px;">
                          <span style="font-family:Arial,sans-serif;font-size:18px;font-weight:900;color:#ffffff;letter-spacing:2px;">${BRAND.shortName}</span>
                        </td>
                        <td style="padding-left:12px;">
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.85);letter-spacing:1px;">${BRAND.tagline}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right">
                    <a href="${BRAND.website}" style="font-family:Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.75);text-decoration:none;">${BRAND.website.replace("https://", "")}</a>
                  </td>
                </tr>
              </table>
              <!-- Title -->
              <p style="margin:28px 0 6px;font-family:Arial,sans-serif;font-size:26px;font-weight:800;color:#ffffff;line-height:1.2;">${title}</p>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:rgba(255,255,255,0.8);">${subtitle}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

function footerBlock() {
  return `
    <tr>
      <td align="center" style="padding:0;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:#0f172a;border-radius:0 0 16px 16px;padding:28px 40px;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#ffffff;">${BRAND.name}</p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#64748b;">${BRAND.tagline} &nbsp;·&nbsp; <a href="${BRAND.website}" style="color:${BRAND.green};text-decoration:none;">${BRAND.website.replace("https://", "")}</a></p>
                  </td>
                  <td align="right">
                    <a href="mailto:${BRAND.email}" style="font-family:Arial,sans-serif;font-size:12px;color:#64748b;text-decoration:none;">${BRAND.email}</a>
                  </td>
                </tr>
              </table>
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:16px;border-top:1px solid #1e293b;padding-top:16px;">
                <tr>
                  <td>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#475569;">
                      &copy; ${new Date().getFullYear()} Grace and Faith Research and Development (OPC) Pvt. Ltd. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

function infoRow(label: string, value: string, isLink = false, href = "") {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;width:110px;">
        <span style="font-family:Arial,sans-serif;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;">${label}</span>
      </td>
      <td style="padding:14px 0 14px 16px;border-bottom:1px solid #f1f5f9;vertical-align:top;">
        ${
          isLink
            ? `<a href="${href}" style="font-family:Arial,sans-serif;font-size:14px;color:${BRAND.blue};text-decoration:none;font-weight:500;">${value}</a>`
            : `<span style="font-family:Arial,sans-serif;font-size:14px;color:#1e293b;font-weight:500;">${value}</span>`
        }
      </td>
    </tr>`;
}

function buildInternalEmail(
  safeName: string,
  safeEmail: string,
  safeCompany: string,
  safeMessage: string,
) {
  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "long",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Enquiry</title></head>
<body style="margin:0;padding:0;background:#f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;padding:32px 16px;">
    ${headerBlock("New Enquiry Received", `Submitted on ${now} IST`)}
    <tr>
      <td align="center" style="padding:0;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:#ffffff;padding:36px 40px 28px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">

              <!-- Sender details card -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px 6px;">
                    <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;color:${BRAND.blue};text-transform:uppercase;letter-spacing:1px;">Sender Details</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 24px 16px;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      ${infoRow("Name", safeName)}
                      ${infoRow("Email", safeEmail, true, `mailto:${safeEmail}`)}
                      ${infoRow("Company", safeCompany || "—")}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message card -->
              <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;color:${BRAND.blue};text-transform:uppercase;letter-spacing:1px;">Message</p>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid ${BRAND.green};border-radius:0 10px 10px 0;padding:20px 24px;">
                <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#334155;line-height:1.8;white-space:pre-wrap;">${safeMessage}</p>
              </div>

              <!-- Reply CTA -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=Re: Your enquiry to Grace %26 Faith R%26D"
                       style="display:inline-block;background:linear-gradient(135deg,${BRAND.blue},${BRAND.green});color:#ffffff;font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:8px;letter-spacing:0.3px;">
                      &#9654;&nbsp; Reply to ${safeName}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      </td>
    </tr>
    ${footerBlock()}
  </table>
</body>
</html>`;
}

function buildConfirmationEmail(safeName: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>We got your message</title></head>
<body style="margin:0;padding:0;background:#f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;padding:32px 16px;">
    ${headerBlock(`Thank you, ${safeName}!`, "We've received your message and will be in touch shortly.")}
    <tr>
      <td align="center" style="padding:0;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:#ffffff;padding:40px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">

              <!-- Checkmark badge -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:28px;">
                <tr>
                  <td align="center">
                    <div style="display:inline-block;background:linear-gradient(135deg,#dcfce7,#d1fae5);border:2px solid #6ee7b7;border-radius:50%;width:64px;height:64px;line-height:64px;text-align:center;font-size:28px;">&#10003;</div>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:16px;color:#1e293b;line-height:1.7;text-align:center;">
                Your enquiry has been <strong>successfully received</strong> by our team.
              </p>
              <p style="margin:0 0 32px;font-family:Arial,sans-serif;font-size:14px;color:#64748b;line-height:1.7;text-align:center;">
                We typically respond within <strong style="color:${BRAND.blue};">24 hours</strong> on business days.
                In the meantime, feel free to explore our work below.
              </p>

              <!-- What happens next -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:32px;">
                <tr>
                  <td style="padding:20px 24px 8px;">
                    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:12px;font-weight:700;color:${BRAND.blue};text-transform:uppercase;letter-spacing:1px;">What happens next</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 24px 20px;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="padding:8px 0;vertical-align:top;width:28px;">
                          <span style="display:inline-block;background:${BRAND.blue};color:#fff;font-family:Arial,sans-serif;font-size:11px;font-weight:700;border-radius:50%;width:20px;height:20px;line-height:20px;text-align:center;">1</span>
                        </td>
                        <td style="padding:8px 0 8px 10px;">
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#334155;">Our team reviews your enquiry and understands your requirements.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;vertical-align:top;">
                          <span style="display:inline-block;background:${BRAND.green};color:#fff;font-family:Arial,sans-serif;font-size:11px;font-weight:700;border-radius:50%;width:20px;height:20px;line-height:20px;text-align:center;">2</span>
                        </td>
                        <td style="padding:8px 0 8px 10px;">
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#334155;">We reach out with tailored solutions or a discovery call invitation.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;vertical-align:top;">
                          <span style="display:inline-block;background:linear-gradient(135deg,${BRAND.blue},${BRAND.green});color:#fff;font-family:Arial,sans-serif;font-size:11px;font-weight:700;border-radius:50%;width:20px;height:20px;line-height:20px;text-align:center;">3</span>
                        </td>
                        <td style="padding:8px 0 8px 10px;">
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#334155;">We collaborate to bring your vision to life with AI &amp; automation.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="${BRAND.website}"
                       style="display:inline-block;background:linear-gradient(135deg,${BRAND.blue},${BRAND.green});color:#ffffff;font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:8px;letter-spacing:0.3px;">
                      Explore Our Work &nbsp;&#8250;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      </td>
    </tr>
    ${footerBlock()}
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(String(name).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safeCompany = escapeHtml(String(company ?? "").trim());
    const safeMessage = escapeHtml(String(message).trim());

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("SMTP credentials not configured.");
      return NextResponse.json(
        {
          error: "Mail service is not configured. Please contact us directly.",
        },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST ?? "smtp.office365.com",
      port: Number(process.env.EMAIL_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Internal notification to the team (Owner inbox — also swept daily by the lead-sweep task)
    await transporter.sendMail({
      from: `"GFRND Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_INBOX ?? "gfrdindia@gmail.com",
      replyTo: safeEmail,
      subject: `New enquiry from ${safeName}`,
      html: buildInternalEmail(safeName, safeEmail, safeCompany, safeMessage),
      text: `New Enquiry\n\nName: ${safeName}\nEmail: ${safeEmail}\nCompany: ${safeCompany || "—"}\n\nMessage:\n${safeMessage}`,
    });

    // Auto-reply confirmation to the sender
    await transporter.sendMail({
      from: `"Grace & Faith R&D" <${process.env.EMAIL_USER}>`,
      to: safeEmail,
      subject: `We received your message — Grace & Faith R&D`,
      html: buildConfirmationEmail(safeName),
      text: `Hi ${safeName},\n\nThank you for reaching out to Grace & Faith R&D. We have received your message and will respond within 24 hours on business days.\n\nBest regards,\nGrace & Faith R&D Team\n${BRAND.website}`,
    });

    return NextResponse.json(
      {
        message:
          "Your message has been sent. We'll be in touch within 24 hours.",
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("Contact form error:", error);

    const err = error as { code?: string; responseCode?: number };

    if (err.code === "EAUTH" || err.responseCode === 535) {
      return NextResponse.json(
        {
          error:
            "Mail authentication failed. Please contact us directly at contact@gfrnd.com.",
        },
        { status: 502 },
      );
    }
    if (err.code === "ECONNECTION" || err.code === "ETIMEDOUT") {
      return NextResponse.json(
        { error: "Could not reach mail server. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again or email us directly at contact@gfrnd.com.",
      },
      { status: 500 },
    );
  }
}
