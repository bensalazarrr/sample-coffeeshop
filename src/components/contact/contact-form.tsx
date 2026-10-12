"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cloneElement, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().refine((value) => !value || /^[+\d][\d\s()-]{6,19}$/.test(value), "Enter a valid phone number or leave this blank."),
  subject: z.string().min(1, "Please choose a subject."),
  message: z.string().trim().min(10, "Please write at least 10 characters.").max(1200, "Please keep your message under 1,200 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), defaultValues: { fullName: "", email: "", phone: "", subject: "", message: "" } });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSent(true);
    reset();
  };

  if (sent) return <div className="form success" role="status"><CheckCircle2 size={44} aria-hidden /><h2 style={{ fontSize: "2.6rem" }}>Demo submitted.</h2><p className="muted">Your message passed validation, but nothing was sent or stored. This is a frontend-only portfolio demonstration.</p><button className="btn btn-secondary" onClick={() => setSent(false)}>Send another demo</button></div>;

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 style={{ fontSize: "2.8rem", marginBottom: ".8rem" }}>Send a note</h2>
      <p className="demo-note">Demo only: submitting this form will simulate success locally. No message is delivered and no personal information is stored.</p>
      <div className="field-row">
        <Field label="Full name" error={errors.fullName?.message}><input {...register("fullName")} autoComplete="name" aria-invalid={!!errors.fullName} /></Field>
        <Field label="Email address" error={errors.email?.message}><input {...register("email")} type="email" autoComplete="email" aria-invalid={!!errors.email} /></Field>
      </div>
      <div className="field-row">
        <Field label="Phone number (optional)" error={errors.phone?.message}><input {...register("phone")} type="tel" autoComplete="tel" aria-invalid={!!errors.phone} /></Field>
        <Field label="Subject" error={errors.subject?.message}><select {...register("subject")} aria-invalid={!!errors.subject}><option value="">Choose a subject</option><option>General question</option><option>Menu question</option><option>Private event inquiry</option><option>Feedback</option></select></Field>
      </div>
      <Field label="Message" error={errors.message?.message}><textarea {...register("message")} aria-invalid={!!errors.message} /></Field>
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Simulating…</> : "Submit demo message"}</button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactElement }) {
  const id = `field-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  const errorId = `${id}-error`;
  return <div className="field"><label htmlFor={id}>{label}</label>{cloneElement(children, { id, "aria-describedby": error ? errorId : undefined } as React.HTMLAttributes<HTMLElement>)}{error && <p className="error" id={errorId} role="alert">{error}</p>}</div>;
}
