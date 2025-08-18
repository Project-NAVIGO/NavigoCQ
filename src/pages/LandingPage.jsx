import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
          NAVIGO 🚀
        </h1>
        <p className="text-lg max-w-xl mb-8">
          Explore your campus, unlock quests, find hidden markers, and climb the
          leaderboard while earning collectibles!
        </p>
        <div>
        <Link
            to="/SignUp"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
            Start Quest
            </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon="🎯"
            title="Location Quests"
            description="Complete quests by visiting specific campus buildings."
          />
          <FeatureCard
            icon="🗺️"
            title="Treasure Hunts"
            description="Follow clues to discover hidden markers around campus."
          />
          <FeatureCard
            icon="🏅"
            title="Collectibles"
            description="Earn digital badges, items, and rewards for achievements."
          />
          <FeatureCard
            icon="📊"
            title="Leaderboard"
            description="Compete with classmates for the top score each week."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-indigo-600 text-white text-center">
        <p>© 2025 NAVIGO. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default LandingPage;
