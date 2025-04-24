"use client";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Socials from "@/components/Socials";

export default function Contact() {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      toast.error("Email service is not configured properly.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm("service_kblxhxl", "template_sdud3ek", form.current!, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        toast.success("Message Sent!");
        console.log("Message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong. Try again later.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
        Get In <span className="gradient-text">Touch</span>
      </h1>
      <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
        Feel free to reach out for collaborations or just a friendly hello
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {/* Contact Information */}
        <div className="card-bg rounded-xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
            Contact Information
          </h2>
          <Socials />
        </div>

        {/* Contact Form */}
        <div className="card-bg rounded-xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
            Send Me a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg text-white bg-gradient-to-r from-[#ca49b4] to-[#5662ea] text-lg sm:text-xl hover:opacity-80 transition-opacity"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
