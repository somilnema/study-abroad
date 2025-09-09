import nodemailer from 'nodemailer'

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to other services like 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS  // Your app password (not regular password)
  }
})

export interface EmailData {
  name: string
  email: string
  phone: string
  country: string
  target: string
}

export async function sendFormSubmissionEmail(formData: EmailData) {
  try {
    // Email to admin (you)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">New Study Abroad Form Submission</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Student Information:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Country:</strong> ${formData.country}</p>
            <p><strong>Target Degree:</strong> ${formData.target}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            This form was submitted from your study abroad landing page.
          </p>
        </div>
      `
    }

    // Confirmation email to student
    const studentMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Thank you for your interest in Study Abroad!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Thank you, ${formData.name}!</h2>
          
          <p>We've received your study abroad inquiry and our team will get back to you within 24 hours.</p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Details:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Country:</strong> ${formData.country}</p>
            <p><strong>Target Degree:</strong> ${formData.target}</p>
          </div>
          
          <p>In the meantime, feel free to explore our website for more information about our services.</p>
          
          <p style="color: #6b7280; font-size: 14px;">
            Best regards,<br>
            The Study Abroad Team
          </p>
        </div>
      `
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(studentMailOptions)
    ])

    return { success: true, message: 'Emails sent successfully' }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, message: 'Failed to send emails' }
  }
}
