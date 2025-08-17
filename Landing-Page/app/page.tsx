import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Star,
  Users,
  Compass,
  Gift,
  Target,
  Crown,
  Play,
  Smartphone,
  Map,
  Zap,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Download,
  Apple,
} from "lucide-react"
import { AuthModal } from "@/components/auth/auth-modal"
import { MobileNav } from "@/components/mobile-nav"


export default function CampusGameLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Compass className="w-5 h-5 text-primary-foreground transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold text-foreground">NAVIGO</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Features
            </a>
            <a
              href="#game-preview"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Game Preview
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              How It Works
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <AuthModal defaultMode="login">
              <Button variant="ghost" className="hidden sm:inline-flex hover:scale-105 transition-all duration-300">
                Sign In
              </Button>
            </AuthModal>
            <AuthModal defaultMode="signup">
              <Button className="bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md">
                Get Started
              </Button>
            </AuthModal>
          </div>
          <MobileNav />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 text-center bg-gradient-to-br from-background via-muted/30 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/10 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <Badge className="mb-4 sm:mb-6 bg-secondary/10 text-secondary border-secondary/20 text-sm animate-fade-in hover:scale-105 transition-all duration-300 shadow-sm">
            🎮 New Adventure Awaits
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2 animate-fade-in-up">
            Explore. Hunt.{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
              Collect.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 animate-fade-in-up delay-200">
            Turn your campus into an epic adventure playground. Complete quests, find hidden treasures, and compete with
            classmates in the ultimate location-based game.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in-up delay-300">
            <AuthModal defaultMode="signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg group"
              >
                <MapPin className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Start Your Adventure
              </Button>
            </AuthModal>

          </div>
        </div>
      </section>

      {/* Game Preview Section */}
      <section id="game-preview" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Experience the Adventure
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2 animate-fade-in-up delay-100">
              See NAVIGO in action with our interactive game preview
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Game Screenshots */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="relative group">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-4 sm:p-6 lg:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl group-hover:scale-[1.02]">
                  <img
                    src="/campus-game-map.png"
                    alt="NAVIGO mobile interface showing interactive campus map"
                    className="w-full max-w-xs sm:max-w-sm mx-auto rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-2xl"
                  />
                </div>
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-secondary text-secondary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold animate-pulse shadow-lg">
                  Live Map
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-card border border-border/50 rounded-xl p-3 sm:p-4 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <img
                    src="/placeholder-l7sv8.png"
                    alt="Quest completion screen"
                    className="w-full rounded-lg mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-semibold text-xs sm:text-sm">Quest Rewards</h4>
                </div>
                <div className="bg-card border border-border/50 rounded-xl p-3 sm:p-4 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <img
                    src="/placeholder-prh52.png"
                    alt="Leaderboard rankings"
                    className="w-full rounded-lg mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="font-semibold text-xs sm:text-sm">Leaderboard</h4>
                </div>
              </div>
            </div>

            {/* Game Features */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Interactive Campus Map</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4 group hover:scale-105 transition-all duration-300 p-2 rounded-lg hover:bg-muted/20">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Map className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                        Real-Time Navigation
                      </h4>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Navigate your campus with GPS-powered precision. Quest markers update in real-time as you
                        explore.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 group hover:scale-105 transition-all duration-300 p-2 rounded-lg hover:bg-muted/20">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-secondary group-hover:animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                        Instant Notifications
                      </h4>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Get notified when you're near hidden treasures or when new quests become available in your area.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 group hover:scale-105 transition-all duration-300 p-2 rounded-lg hover:bg-muted/20">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Offline Mode</h4>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Continue your adventure even without internet. Sync your progress when you're back online.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 sm:p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <h4 className="font-bold text-foreground mb-3 text-sm sm:text-base">Live Game Stats</h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center group">
                    <div className="text-xl sm:text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                      2,847
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Active Players</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-xl sm:text-2xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">
                      156
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Campus Locations</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-xl sm:text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                      89
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Active Quests</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-xl sm:text-2xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">
                      1,203
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Treasures Found</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Game Features</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Discover what makes NAVIGO the most engaging way to explore your university
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:scale-105 group bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Location Quests</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-sm sm:text-base">
                  Complete exciting challenges by visiting specific campus buildings and landmarks. Each location
                  unlocks new adventures.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-secondary/50 transition-all duration-500 hover:shadow-xl hover:scale-105 group bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-secondary/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-secondary group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Treasure Hunts</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-sm sm:text-base">
                  Follow cryptic clues to discover hidden markers placed around campus. Solve puzzles and uncover secret
                  locations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:scale-105 group bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Collectibles</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-sm sm:text-base">
                  Earn digital badges, rare items, and exclusive collectibles for your achievements. Build your unique
                  collection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-secondary/50 transition-all duration-500 hover:shadow-xl hover:scale-105 group bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-secondary/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-secondary group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Leaderboard</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-sm sm:text-base">
                  Compete with classmates for top scores each week. Climb the rankings and become the ultimate campus
                  explorer.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-2">Get started in three simple steps</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/90 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <span className="text-lg sm:text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Download & Sign Up</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Create your account and customize your explorer profile to get started on your campus adventure.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-secondary/90 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <span className="text-lg sm:text-2xl font-bold text-secondary-foreground">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Explore Campus</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Use the interactive campus map to find quests, hunt for treasures, and discover hidden locations.
              </p>
            </div>

            <div className="text-center sm:col-span-2 md:col-span-1 group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/90 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <span className="text-lg sm:text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Earn Rewards</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Complete challenges, collect badges, and climb the leaderboard to become the top campus explorer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">What Students Say</h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-2">
              Join thousands of students already exploring their campus
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="border-border/50 lg:col-span-1 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  "NAVIGO made me discover parts of campus I never knew existed! The treasure hunts are addictive."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Sarah M.</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Junior, Computer Science</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 lg:col-span-1 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  "The competitive aspect keeps me motivated. I'm currently #3 on the leaderboard and climbing!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Mike R.</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Sophomore, Business</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 sm:col-span-2 lg:col-span-1 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  "Perfect way to meet new people and stay active. The quests are challenging but so much fun!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Emma L.</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Senior, Psychology</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6 px-2">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Join thousands of students already exploring their campus. Download NAVIGO today and turn your
            university into an epic adventure playground.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <AuthModal defaultMode="signup">
              <Button
                size="lg"
                variant="secondary"
                className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg group"
              >
                <MapPin className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Now
              </Button>
            </AuthModal>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent w-full sm:w-auto hover:scale-105 hover:shadow-lg transition-all duration-300 border-2 hover:border-white/50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4 sm:mb-6 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-foreground">NAVIGO</span>
              </div>
              <p className="text-muted-foreground mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
                The ultimate location-based campus exploration game for university students. Turn your campus into an
                epic adventure playground.
              </p>

              {/* Newsletter Signup */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-semibold text-foreground text-sm sm:text-base">Stay Updated</h4>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="flex-1 text-sm focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    type="email"
                  />
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 px-3 hover:scale-105 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Get notified about new features and campus events</p>
              </div>
            </div>

            {/* Game Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Game</h4>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li>
                  <a
                    href="#game-preview"
                    className="hover:text-foreground transition-all duration-300 flex items-center gap-2 text-sm sm:text-base hover:translate-x-1"
                  >
                    <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                    How to Play
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 flex items-center gap-2 text-sm sm:text-base hover:translate-x-1"
                  >
                    <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                    Leaderboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 flex items-center gap-2 text-sm sm:text-base hover:translate-x-1"
                  >
                    <Gift className="w-3 h-3 sm:w-4 sm:h-4" />
                    Achievements
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 flex items-center gap-2 text-sm sm:text-base hover:translate-x-1"
                  >
                    <Map className="w-3 h-3 sm:w-4 sm:h-4" />
                    Campus Maps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 flex items-center gap-2 text-sm sm:text-base hover:translate-x-1"
                  >
                    <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                    Quest Guide
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 text-sm sm:text-base hover:translate-x-1"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 text-sm sm:text-base hover:translate-x-1"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 text-sm sm:text-base hover:translate-x-1"
                  >
                    Bug Reports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 text-sm sm:text-base hover:translate-x-1"
                  >
                    Feature Requests
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 text-sm sm:text-base hover:translate-x-1"
                  >
                    Community Forum
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 text-sm sm:text-base hover:translate-x-1"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 text-sm sm:text-base hover:translate-x-1"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 text-sm sm:text-base hover:translate-x-1"
                  >
                    Press Kit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 text-sm sm:text-base hover:translate-x-1"
                  >
                    Partner Program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 text-sm sm:text-base hover:translate-x-1"
                  >
                    University Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* App Download Section */}
          <div className="border-t border-border pt-6 sm:pt-8 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                  Download NAVIGO
                </h4>
                <p className="text-muted-foreground text-sm">Available on iOS and Android</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent text-sm hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <Apple className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Download on the</div>
                    <div className="font-semibold text-xs sm:text-sm">App Store</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent text-sm hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Get it on</div>
                    <div className="font-semibold text-xs sm:text-sm">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Social Media & Legal */}
          <div className="border-t border-border pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* Social Media */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <span className="text-xs sm:text-sm text-muted-foreground">Follow us:</span>
                <div className="flex gap-2 sm:gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 sm:w-10 sm:h-10 p-0 hover:scale-110 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 sm:w-10 sm:h-10 p-0 hover:scale-110 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 sm:w-10 sm:h-10 p-0 hover:scale-110 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 sm:w-10 sm:h-10 p-0 hover:scale-110 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-all duration-300 hover:scale-105">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground transition-all duration-300 hover:scale-105">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-foreground transition-all duration-300 hover:scale-105">
                  Cookie Policy
                </a>
                <a href="#" className="hover:text-foreground transition-all duration-300 hover:scale-105">
                  GDPR Compliance
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-border mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
              <p className="text-muted-foreground text-xs sm:text-sm">
                &copy; 2025 NAVIGO. All rights reserved. Made with ❤️ for students everywhere.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
