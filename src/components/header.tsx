"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
// import { ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "IOT", href: "/iot" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-white font-bold text-xl tracking-wider">
              BRENTWOOD
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] via-[#00bfff] to-[#007bff] font-bold text-2xl lg:text-3xl tracking-tight">
                ∞
              </span>
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-widest">
              GLOBAL
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-orange-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}

              {/* Language Selector */}
              {/* <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors">
                  <span className="text-lg">🇺🇸</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black border-gray-700">
                  <DropdownMenuItem className="text-white hover:bg-gray-800">
                    <span className="mr-2">🇺🇸</span> English
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-gray-800">
                    <span className="mr-2">🇪🇸</span> Spanish
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
            </div>
          </nav>

          {/* Contact Button */}
          <Button className="hidden lg:block relative text-white px-6 py-2 rounded-full bg-gradient-to-br from-[#00f6ff] via-[#00c2ff] to-[#009ecc] hover:from-[#00e0ff] hover:via-[#00baff] hover:to-[#0084a3] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-[0_8px_24px_rgba(0,246,255,0.4)] backdrop-blur-md">
            <Link href="/contact-us">Contact Us</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black border-gray-800 w-80"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-orange-400 transition-colors text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="w-full sm:w-auto bg-gradient-to-r from-[#00f6ff] to-[#007bff] hover:from-[#00e0ff] hover:to-[#005ce6] text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-blue-400/40">
                  <Link href={"/contact-us"}>Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
