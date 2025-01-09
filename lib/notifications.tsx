import { Resend } from "resend";
import twilio from "twilio";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Twilio
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

interface NotificationData {
  email: string;
  mobileNumber: string;
  city: string;
  whatsappUpdates: boolean;
}

export async function sendEmailConfirmation(data: NotificationData) {
  try {
    await resend.emails.send({
      from: "CA Consultation <onboarding@resend.dev>",
      to: data.email,
      subject: "Thank you for your interest in CA Consultation",
      html: `
        <h1>Thank you for reaching out!</h1>
        <p>Dear Client,</p>
        <p>We have received your request for CA consultation. Our team will contact you shortly.</p>
        <p>Your details:</p>
        <ul>
          <li>City: ${data.city}</li>
          <li>Mobile: ${data.mobileNumber}</li>
        </ul>
        <p>Best regards,<br>CA Consultation Team</p>
      `,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}

export async function sendWhatsAppMessage(data: NotificationData) {
  if (!data.whatsappUpdates) return;

  try {
    await twilioClient.messages.create({
      body: `Thank you for choosing CA Consultation! We've received your request and will contact you shortly. Your city: ${data.city}`,
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
      to: `whatsapp:+91${data.mobileNumber}`,
    });
  } catch (error) {
    console.error("Failed to send WhatsApp message:", error);
    throw error;
  }
}
