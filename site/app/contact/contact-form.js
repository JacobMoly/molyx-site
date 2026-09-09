"use client";

import Link from "next/link";
import { useActionState } from "react";
import { sendContactEmail } from "../actions/contact";

const initialState = { success: false, error: null };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  if (state.success) {
    return (
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-10 text-center">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Message sent</h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
          Thanks for getting in touch. We will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-6">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name <span className="text-indigo-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="company" className="text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company (optional)"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email <span className="text-indigo-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          What is taking the most time in your business? <span className="text-indigo-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe the workflow or process that is slowing you down..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none"
        />
      </div>

      {state.error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full md:w-auto md:self-start bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>
      <p className="text-xs text-gray-500 leading-relaxed">
        We use your details only to respond to your enquiry. See our{" "}
        <Link href="/privacy" className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2">
          privacy notice
        </Link>.
      </p>
    </form>
  );
}
