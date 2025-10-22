import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaPinterest,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer
      className="w-full bg-neutral-900 shadow-inner"
      style={{ fontFamily: "'Golos Text', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10 md:gap-16 text-gray-200">
        {/* Links */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-2xl text-indigo-700 font-bold mb-2">
            Sangi Group of Industries
          </div>
          <ul className="space-y-1">
            <li>
              <Link
                href="/about"
                className="hover:text-amber-300 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-amber-300 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-amber-300 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-amber-300 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social + CTA */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-3">
          <div className="font-semibold text-gray-300">Follow Us</div>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://facebook.com/sangigroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-indigo-500 hover:text-blue-400 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://youtube.com/sangigroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-indigo-500 hover:text-red-500 transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="https://instagram.com/sangigroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-indigo-500 hover:text-pink-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/sangigroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="text-indigo-500 hover:text-gray-100 transition-colors"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://pinterest.com/sangigroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-indigo-500 hover:text-red-400 transition-colors"
            >
              <FaPinterest />
            </a>
          </div>

          <Button
            variant="secondary"
            size="sm"
            className="bg-amber-400 text-slate-900 hover:bg-amber-500 mt-4"
          >
            Contact Us
          </Button>

          <small className="text-xs text-gray-400 mt-3 text-center md:text-right">
            &copy; {new Date().getFullYear()} Sangi Group of Industries
          </small>
        </div>
      </div>
    </footer>
  );
}