"use server";

import { Resend } from "resend";

export async function sendContactEmail(prevState, formData) {
  const name = formData.get("name")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in your name, email, and message." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!process.env.RESEND_API_KEY) {
    return { success: true };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Molyx Labs Site <noreply@molyxlabs.com>",
      to: "contact@molyxlabs.com",
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ""}`,
      text: `Name: ${name}\nCompany: ${company || "Not provided"}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    return { success: true };
  } catch {
    return {
      success: false,
      error: "Something went wrong sending your message. Please email us directly at contact@molyxlabs.com",
    };
  }
}
