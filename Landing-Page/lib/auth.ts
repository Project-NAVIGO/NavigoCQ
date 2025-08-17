export interface User {
  id: string
  email: string
  name: string
  picture?: string
}

export class AuthService {
  private static instance: AuthService
  private user: User | null = null

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  async signInWithGoogle(): Promise<User> {
    // Simulate Google OAuth flow
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: "google_" + Math.random().toString(36).substr(2, 9),
          email: "student@university.edu",
          name: "Campus Explorer",
          picture: "/student-avatar.png",
        }
        this.user = mockUser
        console.log("[v0] Google sign-in successful:", mockUser)
        resolve(mockUser)
      }, 1500)
    })
  }

  async signInWithEmail(email: string, password: string): Promise<User> {
    // Simulate email/password authentication
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const mockUser: User = {
            id: "email_" + Math.random().toString(36).substr(2, 9),
            email,
            name: email.split("@")[0],
          }
          this.user = mockUser
          console.log("[v0] Email sign-in successful:", mockUser)
          resolve(mockUser)
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  }

  async signUp(userData: { email: string; password: string; firstName: string; lastName: string }): Promise<User> {
    // Simulate user registration
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: "new_" + Math.random().toString(36).substr(2, 9),
          email: userData.email,
          name: `${userData.firstName} ${userData.lastName}`,
        }
        this.user = mockUser
        console.log("[v0] Sign-up successful:", mockUser)
        resolve(mockUser)
      }, 1200)
    })
  }

  signOut(): void {
    this.user = null
    console.log("[v0] User signed out")
  }

  getCurrentUser(): User | null {
    return this.user
  }

  isAuthenticated(): boolean {
    return this.user !== null
  }
}
