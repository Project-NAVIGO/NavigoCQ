"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { LoginForm } from "./login-form"
import { SignupForm } from "./signup-form"

interface AuthModalProps {
  children: React.ReactNode
  defaultMode?: "login" | "signup"
}

export function AuthModal({ children, defaultMode = "login" }: AuthModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<"login" | "signup">(defaultMode)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSuccess = () => {
    console.log("[v0] Authentication successful, redirecting to dashboard...")
    // In a real app, this would redirect to the main game interface
    setIsOpen(false)
  }

  const switchToLogin = () => {
    setMode("login")
  }

  const switchToSignup = () => {
    setMode("signup")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 border-0 bg-transparent shadow-none">
        {mode === "login" ? (
          <LoginForm onSwitchToSignup={switchToSignup} onClose={handleClose} onSuccess={handleSuccess} />
        ) : (
          <SignupForm onSwitchToLogin={switchToLogin} onClose={handleClose} onSuccess={handleSuccess} />
        )}
      </DialogContent>
    </Dialog>
  )
}
