import { siteConfig } from "@/lib/data";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 transition-colors duration-200 hover:text-blue-400"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-gray-500 transition-colors duration-200 hover:text-blue-400"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
