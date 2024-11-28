import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t px-10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-primary">MagZeen</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Berita Terkini dan Terpercaya
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors text-lg"
            >
              Beranda
            </Link>
            <Link
              href="/berita-terkini"
              className="text-muted-foreground hover:text-primary transition-colors text-lg"
            >
              Berita Terkini
            </Link>
            <Link
              href="/tentang-kami"
              className="text-muted-foreground hover:text-primary transition-colors text-lg"
            >
              Tentang Kami
            </Link>
            <Link
              href="/kontak"
              className="text-muted-foreground hover:text-primary transition-colors text-lg"
            >
              Kontak
            </Link>
          </nav>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Hubungi Kami
            </h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p className="flex items-center justify-center md:justify-end mb-1">
                <MapPin size={16} className="mr-2" />
                Jl. Berita Utama No. 123, Jakarta
              </p>
              <p className="flex items-center justify-center md:justify-end">
                <Phone size={16} className="mr-2" />
                (021) 1234-5678
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube size={20} />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MagZeen. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
