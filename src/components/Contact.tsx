import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { theme } from "../theme";

const Contact = () => {
  return (
    <section id="contact" className={`py-20 ${theme.background.light}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold ${theme.text.primary} mb-4`}
          >
            Contact Us
          </h2>
          <p className={`${theme.text.secondary} max-w-3xl mx-auto`}>
            Ready for a free quote? Reach out to us by phone or email, and we'll
            provide a same-day estimate for your cleaning needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div
                  className={`${theme.accent.lighter} p-3 rounded-full ${theme.icon.primary} mr-4`}
                >
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className={`font-semibold ${theme.text.primary} mb-1`}>
                    Phone
                  </h4>
                  <p className={theme.text.secondary}>
                    <a
                      href="tel:+19549950455"
                      className="hover:text-cyan-600 transition-colors font-semibold text-lg"
                    >
                      (954) 995-0455
                    </a>
                  </p>
                  <p className="text-slate-500 text-sm">
                    Call for free quotes & estimates
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`${theme.accent.lighter} p-3 rounded-full ${theme.icon.primary} mr-4`}
                >
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className={`font-semibold ${theme.text.primary} mb-1`}>
                    Email
                  </h4>
                  <p className={theme.text.secondary}>
                    <a
                      href="mailto:southerncleaningsolutions.fl@gmail.com"
                      className="hover:text-cyan-600 transition-colors"
                    >
                      southerncleaningsolutions.fl@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div
                  className={`${theme.accent.lighter} p-3 rounded-full ${theme.icon.primary} mr-4`}
                >
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className={`font-semibold ${theme.text.primary} mb-1`}>
                    Service Areas
                  </h4>
                  <p className={`${theme.text.secondary} font-medium`}>
                    Palm Beach County
                  </p>
                  <p className={`${theme.text.secondary} font-medium`}>
                    Broward County
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`${theme.accent.lighter} p-3 rounded-full ${theme.icon.primary} mr-4`}
                >
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className={`font-semibold ${theme.text.primary} mb-1`}>
                    Free Estimates
                  </h4>
                  <p className={theme.text.secondary}>
                    Same-day estimates available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="text-center mb-6">
              <p className={`${theme.text.secondary} mb-4`}>
                Own a business or storefront? Get a free quote today!
              </p>
              <a
                href="https://www.google.com/search?sca_esv=7670df6d756a93b6&hl=en-US&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwnS34YhwNaT5tXmjkj0X3oU4Lo_uSo5Jmz1lYjS9IRlkvRnbnzMiFqXwRKxomYQ3UFdxfhHavp9TYzoW4jCZYwuVxW64awaSGX6HRK--jWAy5MPNg%3D%3D&q=Southern+Cleaning+Solutions+Reviews&sa=X&ved=2ahUKEwjlgb2trPWRAxVWMlkFHY2iGxIQ0bkNegQIIRAD&biw=1536&bih=760&dpr=1.25#"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block ${theme.button.primary} font-semibold py-2 px-6 rounded-md transition-colors`}
              >
                Leave a Google Review
              </a>
            </div>

            {/* Social Media Links */}
            <div className="text-center pt-6 border-t border-slate-200">
              <h4 className={`font-semibold ${theme.text.primary} mb-4`}>
                Follow Us
              </h4>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.facebook.com/"
                  className={`${theme.text.secondary} hover:text-cyan-600 transition-colors`}
                  title="Facebook [southerncleaningsolutions.fl]"
                >
                  <span className="text-sm">Facebook</span>
                </a>
                <span className="text-slate-400">•</span>
                <a
                  href="https://www.instagram.com/southerncleaningsolutions.fl"
                  className={`${theme.text.secondary} hover:text-cyan-600 transition-colors`}
                  title="Instagram [southerncleaningsolutions.fl]"
                >
                  <span className="text-sm">Instagram</span>
                </a>
                <span className="text-slate-400">•</span>
                <a
                  href="https://www.tiktok.com/@scs.fl"
                  className={`${theme.text.secondary} hover:text-cyan-600 transition-colors`}
                  title="TikTok [scs.fl]"
                >
                  <span className="text-sm">TikTok</span>
                </a>
              </div>
              {/*}
              <p className={`${theme.text.muted} text-xs mt-2`}>
                (Links coming soon)
              </p>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
