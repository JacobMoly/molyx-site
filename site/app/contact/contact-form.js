"use client";

import { useActionState } from "react";
import { sendContactEmail } from "../actions/contact";

const initialState = { success: false, error: null };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  if (state.success) {
    return <div className="form-success"><span>✓</span><h2>Message received.</h2><p>Thanks for getting in touch. We&apos;ll reply within one business day.</p></div>;
  }

  return (
    <form action={formAction} className="contact-form">
      <div className="form-row">
        <label>Name <span>*</span><input name="name" type="text" required autoComplete="name" placeholder="Your name" /></label>
        <label>Company<input name="company" type="text" autoComplete="organization" placeholder="Optional" /></label>
      </div>
      <label>Email <span>*</span><input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
      <label>What is taking the most time? <span>*</span><textarea name="message" required rows={6} placeholder="Describe the workflow, handoff, or recurring task..." /></label>
      {state.error && <p className="form-error">{state.error}</p>}
      <button className="button button-primary" type="submit" disabled={isPending}>{isPending ? "Sending…" : "Send enquiry"}<span>↗</span></button>
    </form>
  );
}
