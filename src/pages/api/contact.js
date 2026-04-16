import nodemailer from "nodemailer";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { name, email, message } = req.body || {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid sender email." });
  }

  const smtpUser =
    process.env.SMTP_USER || process.env.NEXT_PUBLIC_SMAILER_EMAIL;
  const smtpPass =
    process.env.SMTP_PASS || process.env.NEXT_PUBLIC_SMAILER_PASSWORD;
  const recipientEmail = process.env.CONTACT_TO || smtpUser;

  if (!smtpUser || !smtpPass || !recipientEmail) {
    return res.status(500).json({
      message:
        "Email server is not configured. Add SMTP_USER, SMTP_PASS, and CONTACT_TO in env.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${smtpUser}>`,
      replyTo: email,
      to: recipientEmail,
      subject: "Someone reached me through my portfolio- Reply Soon",
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({ message: "Failed to send email." });
  }
}
