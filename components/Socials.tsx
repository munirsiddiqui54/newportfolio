import React from "react";
import { Mail, Linkedin, Github, Twitter, Phone } from "lucide-react";
import profileData from "@/lib/data";

const Socials = () => {
  return (
    <div className="space-y-6">
      <ContactLink
        icon={<Phone size={20} />}
        title="Phone"
        href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`} // removes spaces
        subtitle={profileData.contact.phone}
      />

      <ContactLink
        icon={<Mail size={20} />}
        title="Email"
        href={`mailto:${profileData.contact.email}`}
        subtitle={profileData.contact.email}
      />
      <ContactLink
        icon={<Linkedin size={20} />}
        title="LinkedIn"
        href={profileData.contact.linkedin}
        subtitle="Connect with me"
      />
      <ContactLink
        icon={<Github size={20} />}
        title="GitHub"
        href={profileData.contact.github}
        subtitle="Check out my repositories"
      />
    </div>
  );
};

const ContactLink = ({
  icon,
  title,
  href,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
  subtitle: string;
}) => (
  <a
    href={href}
    target={title != "Phone" && title != "Email" ? "_blank" : ""}
    rel="noopener noreferrer"
    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
  >
    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  </a>
);

export default Socials;
