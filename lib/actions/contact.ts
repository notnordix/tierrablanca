"use server"

import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Log the email configuration for debugging (remove in production)
    console.log("Email configuration:", {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
      user: process.env.EMAIL_USER,
      // Don't log the password for security reasons
    })

    // Recipient email (where the contact form submissions will be sent)
    const recipientEmail = process.env.RECIPIENT_EMAIL || "noureddineelmhassani@gmail.com"

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || "noureloko995@gmail.com",
      to: recipientEmail,
      replyTo: formData.email,
      subject: `Contact Form: ${formData.subject || "New Message from TierraBlanca Website"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${formData.subject || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || "Not provided"}
        Subject: ${formData.subject || "Not provided"}
        
        Message:
        ${formData.message}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    // Log more detailed error information
    if (error instanceof Error) {
      console.error("Error name:", error.name)
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }
    return { success: false, message: "Failed to send message. Please try again later." }
  }
}
