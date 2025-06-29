"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MessageCircle, Bell, Heart, MessageSquare, Repeat2, MoreHorizontal, ChevronLeft, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BlogPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const [showCoffeeModal, setShowCoffeeModal] = useState(false);
  const [coffeeQty, setCoffeeQty] = useState(1);
  const [message, setMessage] = useState("");
  const coffeePrice = 4.99;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3 transition-transform duration-200 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="w-full flex items-center">
            {/* Back Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900 mr-2"
              onClick={() => router.push('/')}
              aria-label="Back"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            {/* Left - Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">TG</span>
              </div>
            </div>
            
            {/* Center - Publication Name */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="font-medium text-gray-900 text-xl" style={{ fontFamily: "Georgia, serif" }}>
                Donation
              </h1>
            </div>
            
            {/* Right - Actions */}
            <div className="flex items-center gap-3 ml-auto">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
                <Bell className="w-5 h-5" />
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Subscribe
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12 pt-24">
        {/* Article Header */}
        <div className="mb-8">
          <h1
            className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            No Scandals: The Mayor's Fund Story (Part I)
          </h1>
          <h2 className="text-sm text-gray-500 mb-6 leading-snug">
            Mayor Fuzzy McLobbyist, led by Vice President Sally Filibuster, has ascended to the pinnacle of City Hall. Its fundamental genius is wanting donuts at every meeting.
          </h2>
          
          {/* Author Info */}
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder-user.jpg" alt="Bobby Filibuster" />
              <AvatarFallback>BF</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium text-gray-900">Bobby Filibuster</div>
              <div className="text-sm text-gray-500">Apr 1, 2026 • Paid</div>
            </div>
          </div>
          
          {/* Engagement Bar */}
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-3">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 hover:border-gray-400 px-3 py-1.5 rounded-full">
                <Heart className="w-4 h-4" />
                <span className="text-sm">385</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 hover:border-gray-400 px-3 py-1.5 rounded-full">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">22</span>
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 hover:border-gray-400 p-2 rounded-full">
                <Repeat2 className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 hover:border-gray-400 px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 hover:border-gray-400 p-2 rounded-full">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none" style={{ fontFamily: "Georgia, serif" }}>
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            Friends,
          </p>
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            In the wild and windy city of Blusterburg, Mayor Fuzzy McLobbyist's campaign was unlike any other. Instead of the usual bake sales and rubber chicken dinners, the mayor funded his entire campaign by selling battery-powered fans to penguins at the local zoo. "Penguins love a good breeze," he declared, as he handed out fans with his face on them to every tuxedoed bird in sight.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            But that was only the beginning. When the penguins ran out of pockets to store their fans, the mayor turned to the city's ancient oak trees for advice. Every Tuesday at dawn, he could be found in the park, whispering his campaign slogans to the trees and listening intently for their wooden wisdom. "The secret to a successful campaign," he confided to a particularly knotty elm, "is to always leaf your options open."
          </p>
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            Soon, word spread that the mayor's campaign was powered by both cool breezes and deep-rooted conversations. Voters were charmed, penguins were refreshed, and the trees—well, they stood a little taller, proud to have played a part in the most unusual election Blusterburg had ever seen.
          </p>

          {/* Buy a Coffee Modal - Orange Theme, Interactive */}
          {showCoffeeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center relative flex flex-col items-center">
                <div className="w-full flex flex-col items-center">
                  <span className="text-5xl mb-2 block" role="img" aria-label="coffee">☕️</span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Buy <span className="text-orange-500">Your Writer</span> a coffee</h2>
                </div>
                <div className="w-full flex justify-center mb-4">
                  <div className="flex flex-wrap items-center bg-orange-50 rounded-lg px-4 py-3 gap-x-2 gap-y-2 w-full justify-center">
                    <span className="text-3xl mr-3" role="img" aria-label="coffee">☕️</span>
                    <span className="text-lg font-semibold text-gray-700 mr-2">${coffeePrice}</span>
                    <span className="text-gray-500 mr-2">x</span>
                    <input
                      type="number"
                      min={1}
                      value={coffeeQty}
                      onChange={e => setCoffeeQty(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 min-w-0 text-center border border-gray-300 rounded px-1 py-0.5 mx-2 focus:outline-none focus:ring-2 focus:ring-orange-200 appearance-none hide-number-input-arrows"
                      style={{ MozAppearance: 'textfield' }}
                    />
                    {[1, 3, 5].map(n => (
                      <button
                        key={n}
                        type="button"
                        className={`mx-1 px-3 py-1 rounded-full border transition text-base font-semibold ${coffeeQty === n ? 'bg-orange-500 text-white border-orange-500' : 'bg-orange-50 text-orange-500 border-orange-200 hover:bg-orange-100'}`}
                        onClick={() => setCoffeeQty(n)}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="w-full flex flex-col items-center mb-4">
                  <textarea
                    className="w-full border border-gray-200 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-200 h-20"
                    rows={2}
                    placeholder="Say something nice.. (optional)"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>
                <button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg text-lg transition mb-2"
                  onClick={() => setShowCoffeeModal(false)}
                >
                  Support  ${Math.ceil(coffeeQty * coffeePrice)}
                </button>
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl font-bold px-2"
                  onClick={() => setShowCoffeeModal(false)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
          )}

          <hr className="my-8 border-gray-200" />

          <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Part I: The Penguin Parade
          </h1>

          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            On the first day of campaign season, Mayor Fuzzy McLobbyist donned his finest top hat and marched straight to the zoo, where the annual Penguin Parade was about to begin. The air was electric, the fish were fresh, and the penguins were ready to waddle for democracy.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            As the mayor handed out fans to the penguins, a hush fell over the crowd. Would the penguins accept the fans? Would they endorse the mayor's donut agenda? Suddenly, Paddles the Penguin, known for his impeccable sense of style and his ability to balance a sardine on his beak, stepped forward and gave a resounding squawk of approval.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            The crowd erupted in applause. The trees rustled their leaves in excitement. Even the squirrels paused their acorn business to watch the spectacle. It was clear: the mayor's campaign was off to a flapping good start, and Blusterburg would never be the same.
          </p>

          {/* Buy a Coffee Block (Paywall Replacement) - At the very end */}
          <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm p-4 my-8">
            <img src="/flag-icon.svg" alt="flag" className="w-12 h-12 mx-4 mb-4 block" />
            <div className="flex-1">
              <div className="font-semibold text-lg text-gray-900 mb-1">Support your favorite writer by buying them a coffee!</div>
              <div className="text-gray-500 text-sm mb-2">Every coffee helps keep the stories flowing.</div>
            </div>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg text-base transition"
              onClick={() => setShowCoffeeModal(true)}
            >
              Buy a coffee
            </button>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-200">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              Next
              <ChevronLeft className="w-4 h-4 rotate-180" />
            </Button>
          </div>
        </article>
      </main>

      {/* Hide number input arrows for all browsers */}
      <style jsx global>{`
        /* Chrome, Safari, Edge, Opera */
        input[type=number].hide-number-input-arrows::-webkit-inner-spin-button, 
        input[type=number].hide-number-input-arrows::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        /* Firefox */
        input[type=number].hide-number-input-arrows {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
} 