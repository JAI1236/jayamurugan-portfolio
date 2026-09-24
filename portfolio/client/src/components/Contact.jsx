
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:rajajayamurugan@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setStatus("Opening your email app...");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative bg-black px-6 py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-mono mb-3">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something{" "}
            <span className="text-cyan-400">
              Great
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl text-lg leading-relaxed">
            Have an idea, project, internship opportunity,
            or collaboration in mind? Send me a message and
            let's connect.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-10 mt-14">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="p-7 rounded-2xl border border-white/10 bg-white/5">

              <h3 className="text-2xl font-bold text-white">
                Get In Touch
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                I'm always interested in discussing new
                projects, creative ideas and opportunities
                to learn and build.
              </p>

              {/* Email */}
              <a
                href="mailto:rajajayamurugan@gmail.com"
                className="flex items-center gap-4 mt-8 group"
              >
                <div className="p-3 rounded-xl bg-cyan-400/10">
                  <Mail
                    size={22}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    EMAIL
                  </p>

                  <p className="text-gray-300 group-hover:text-cyan-400 transition break-all">
                    rajajayamurugan@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 mt-6">
                <div className="p-3 rounded-xl bg-cyan-400/10">
                  <MapPin
                    size={22}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    LOCATION
                  </p>

                  <p className="text-gray-300">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-8">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition"
                  aria-label="GitHub"
                >
                  <Github size={21} />
                </a>

                <a
                  href="https://www.linkedin.com/in/jayamurugan-raja-13667633a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={21} />
                </a>

              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-7 rounded-2xl border border-white/10 bg-white/5"
            >

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-cyan-400/50 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-cyan-400/50 transition"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="mt-5">
                <label className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-cyan-400/50 transition"
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-cyan-400/50 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
              >
                Send Message
                <Send size={18} />
              </button>

              {/* Status */}
              {status && (
                <p className="mt-4 text-sm text-cyan-400">
                  {status}
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

