import React, { useState } from "react";
import { Send, AlertCircle } from "lucide-react";
import { theme } from "../theme";

const MessageBoard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in all fields");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="message-board"
      className={`py-20 bg-gradient-to-r from-blue-50 to-cyan-50`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold ${theme.text.primary} mb-4`}
            >
              Get in Touch
            </h2>
            <p className={theme.text.secondary}>
              Have questions or need more information? Leave your contact
              details below and we'll get back to you promptly.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mb-4">
                  <svg
                    className="mx-auto h-16 w-16 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold ${theme.text.primary} mb-2`}>
                  Thank You!
                </h3>
                <p className={`${theme.text.secondary} mb-4`}>
                  We've received your message and will contact you soon.
                </p>
                <p className="text-sm text-slate-500">
                  Or call us directly at{" "}
                  <a
                    href="tel:+19549950455"
                    className="font-semibold text-cyan-600 hover:text-cyan-700"
                  >
                    (954) 995-0455
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    <AlertCircle className="h-5 w-5 mr-3" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${theme.text.primary} mb-2`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${theme.border.light} rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition`}
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${theme.text.primary} mb-2`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${theme.border.light} rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className={`block text-sm font-medium ${theme.text.primary} mb-2`}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${theme.border.light} rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition`}
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${theme.text.primary} mb-2`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border ${theme.border.light} rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition resize-none`}
                    placeholder="Tell us about your cleaning needs..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full ${theme.button.primary} font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center`}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>

                <p className={`text-center text-sm ${theme.text.muted}`}>
                  Or call us directly:{" "}
                  <a
                    href="tel:+19549950455"
                    className="font-semibold text-cyan-600 hover:text-cyan-700"
                  >
                    (954) 995-0455
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageBoard;
