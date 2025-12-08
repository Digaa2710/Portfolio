// components/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Digaa2710", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/divya-gandhi", label: "LinkedIn" },
    { icon: Mail, href: "mailto:gandhidivya2710@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border py-8 xl:py-12">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="flex flex-col items-center gap-6">

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer external" // ✅ Important for Next.js App Router
                  className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 xl:w-6 xl:h-6" />
                </a>
              );
            })}
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-sm xl:text-base text-muted-foreground">
              &copy; {currentYear} Divya Gandhi Personal Portfolio
            </p>
            <p className="text-xs xl:text-sm text-muted-foreground/70 mt-1">
              Built with React, TypeScript, and TailwindCSS
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
