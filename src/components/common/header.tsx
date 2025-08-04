"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "IOT", href: "/iot" },
  ];

  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll and horizontal swipe when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Prevent horizontal scrolling on body when menu might be triggered */}
      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        /* Prevent horizontal swipe gestures */
        body {
          overscroll-behavior-x: none;
          touch-action: pan-y;
        }

        /* Additional mobile fixes */
        @media (max-width: 1024px) {
          html {
            overflow-x: hidden !important;
          }

          body {
            overflow-x: hidden !important;
            position: relative;
          }
        }
      `}</style>

      <header className="sticky top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="text-white font-bold text-xl tracking-wider group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                BRENTWOOD
                <Image
                  src="/logo.png"
                  alt="Brentwood Global Logo"
                  width={24}
                  height={24}
                  className="lg:w-9 lg:h-9 object-contain"
                />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest group-hover:text-blue-300 transition-colors duration-300">
                GLOBAL
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Contact Button */}
            <Button className="hidden lg:block relative text-white px-6 py-2 rounded-full bg-gradient-to-br from-[#00f6ff] via-[#00c2ff] to-[#009ecc] hover:from-[#00e0ff] hover:via-[#00baff] hover:to-[#0084a3] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-[0_8px_24px_rgba(0,246,255,0.4)] backdrop-blur-md border border-blue-400/20 hover:border-blue-300/40">
              <Link href="/contact-us">Contact Us</Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                >
                  {isOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 backdrop-blur-md border-gray-800 w-80 p-0 max-w-[80vw] overflow-hidden"
                onInteractOutside={closeMenu}
                onEscapeKeyDown={closeMenu}
              >
                {/* Mobile Menu Header */}
                <div className="border-b border-gray-800 p-6">
                  <div className="flex items-center space-x-2">
                    <div className="text-white font-bold text-lg tracking-wider">
                      BRENTWOOD
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] font-bold text-xl tracking-tight">
                        ∞
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">
                      GLOBAL
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex flex-col p-6 space-y-1">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 text-lg font-medium py-4 px-4 rounded-lg border border-transparent hover:border-blue-400/20 group"
                      onClick={closeMenu}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Link>
                  ))}

                  {/* Mobile Contact Button */}
                  <div className="pt-6 mt-6 border-t border-gray-800">
                    <Link href="/contact-us" onClick={closeMenu}>
                      <Button className="w-full bg-gradient-to-r from-[#00f6ff] to-[#007bff] hover:from-[#00e0ff] hover:to-[#005ce6] text-white text-base px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-blue-400/40 border border-blue-400/20 hover:border-blue-300/40 flex items-center justify-center">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
                  <p className="text-gray-500 text-sm text-center">
                    © 2024 Brentwood Global. All rights reserved.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
