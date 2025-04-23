import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import profileData from "@/lib/data";

export default function Contact() {
  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-4xl font-bold mb-2">
        Get In <span className="gradient-text">Touch</span>
      </h1>
      <p className="text-gray-400 mb-10">
        Feel free to reach out for collaborations or just a friendly hello
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card-bg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          <div className="space-y-6">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-400">
                  {profileData.contact.email}
                </p>
              </div>
            </a>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-gray-400">Connect with me</p>
              </div>
            </a>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Github size={20} />
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm text-gray-400">
                  Check out my repositories
                </p>
              </div>
            </a>

            <a
              href={profileData.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Twitter size={20} />
              </div>
              <div>
                <p className="font-medium">Twitter</p>
                <p className="text-sm text-gray-400">Follow me</p>
              </div>
            </a>
          </div>
        </div>

        <div className="card-bg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
