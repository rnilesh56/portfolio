"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMEssage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  const message = FormData.get("message");
  const senderEmail = FormData.get("senderEmail");

  if (!validateString(senderEmail, 50)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio | Contact Form <onboarding@resend.dev>",
      to: "rnilesh56@gmail.com",
      subject: "Message from Portfolio contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMEssage(error),
    };
  }
  return {
    data,
  };
};
