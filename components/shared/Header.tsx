"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <Link className="flex items-center justify-center" href="#">
          <span className="text-lg font-bold">BHARATCHITRA</span>
        </Link>
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex gap-6">
            <Link
              className="font-medium text-sm hover:text-primary transition-colors"
              href="#"
            >
              Home
            </Link>
            <Link
              className="font-medium text-sm hover:text-primary transition-colors"
              href="#"
            >
              Videos
            </Link>
            <Link
              className="font-medium text-sm hover:text-primary transition-colors"
              href="#"
            >
              Leaderboard
            </Link>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <SignedIn>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Open cart</span>
            </Button>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                  userButtonPopoverCard: "geist-sans",
                  userButtonPopoverActions: "geist-sans",
                  userButtonPopoverActionButton:
                    "geist-sans hover:bg-gray-100 transition-colors",
                  userButtonPopoverActionButtonText: "geist-sans",
                  userButtonPopoverFooter: "geist-sans",
                },
              }}
            />
          </SignedIn>
          <SignedOut>
            <Button asChild variant="outline" size="sm" className="geist-sans">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </SignedOut>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only geist-sans">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] geist-sans"
            >
              <div className="flex flex-col h-full geist-sans">
                <nav className="flex flex-col gap-4 mt-8 geist-sans">
                  <Link
                    className="font-medium text-lg"
                    href="#"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    className="font-medium text-lg"
                    href="#"
                    onClick={() => setIsOpen(false)}
                  >
                    Videos
                  </Link>
                  <Link
                    className="font-medium text-lg"
                    href="#"
                    onClick={() => setIsOpen(false)}
                  >
                    Leaderboard
                  </Link>
                </nav>
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Cart
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
