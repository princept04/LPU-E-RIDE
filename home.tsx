import React from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-8">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">UniConnect</h1>
        <nav>
          <Button variant="ghost" className="mx-2">Home</Button>
          <Button variant="ghost" className="mx-2">About</Button>
          <Button variant="ghost" className="mx-2">Courses</Button>
          <Button variant="ghost" className="mx-2">Contact</Button>
          <Button className="bg-white text-blue-600 hover:bg-gray-200">Login</Button>
        </nav>
      </header>

      <section className="text-center mt-20">
        <h2 className="text-5xl font-extrabold mb-4">Unlock Knowledge, Anytime, Anywhere</h2>
        <p className="text-xl mb-6">Subscribe for just ₹400/month and access all your university resources.</p>
        <Button className="bg-yellow-400 text-black text-xl px-8 py-3 rounded-full hover:bg-yellow-300">
          Get Started
        </Button>
      </section>

      <footer className="mt-20 text-center">
        <p>&copy; 2025 UniConnect. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
