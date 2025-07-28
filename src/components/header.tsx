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
    { name: "QUANTUM RND", href: "/quantum" },
    { name: "IOT", href: "/iot" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-white font-bold text-xl tracking-wider">
              BRENTWOOD
              <span className="text-orange-500 ">∞</span>
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
          <Button className="hidden lg:block bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
            <Link href={"/contact-us"}>Contact Us</Link>
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
                <Button className="bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white px-6 py-2 rounded-full mt-4">
                  Contact Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
