"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Compass } from "lucide-react"
import { AuthModal } from "./auth/auth-modal"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const closeNav = () => setIsOpen(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden hover:scale-105 transition-all duration-300">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card/95 backdrop-blur-md border-border/50">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-border/50">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Compass className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">CampusQuest</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeNav}
              className="hover:scale-105 transition-all duration-300"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 py-6 flex-1">
            <a
              href="#features"
              className="text-lg text-muted-foreground hover:text-foreground transition-all duration-300 py-2 hover:translate-x-2 hover:scale-105"
              onClick={closeNav}
            >
              Features
            </a>
            <a
              href="#game-preview"
              className="text-lg text-muted-foreground hover:text-foreground transition-all duration-300 py-2 hover:translate-x-2 hover:scale-105"
              onClick={closeNav}
            >
              Game Preview
            </a>
            <a
              href="#how-it-works"
              className="text-lg text-muted-foreground hover:text-foreground transition-all duration-300 py-2 hover:translate-x-2 hover:scale-105"
              onClick={closeNav}
            >
              How It Works
            </a>
            <div className="border-t border-border/50 pt-4 mt-4">
              <AuthModal defaultMode="login">
                <Button
                  variant="outline"
                  className="w-full mb-3 hover:scale-105 transition-all duration-300 bg-transparent"
                  onClick={closeNav}
                >
                  Sign In
                </Button>
              </AuthModal>
              <AuthModal defaultMode="signup">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md"
                  onClick={closeNav}
                >
                  Get Started
                </Button>
              </AuthModal>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
