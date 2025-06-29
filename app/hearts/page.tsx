"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MessageCircle, Bell, Heart, MessageSquare, Repeat2, MoreHorizontal, ChevronLeft, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HeartsPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const [showCoffeeModal, setShowCoffeeModal] = useState(false);
  const [coffeeQty, setCoffeeQty] = useState(1);
  const [message, setMessage] = useState("");
  const coffeePrice = 1;

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
                Hearts
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
            The Last Letter
          </h1>
          <h2 className="text-sm text-gray-500 mb-6 leading-snug">
            A short fiction about love, memory, and the courage to say goodbye.
          </h2>
          {/* Author Info */}
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder-user.jpg" alt="Avery Lane" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium text-gray-900">Avery Lane</div>
              <div className="text-sm text-gray-500">Feb 14, 2027 • Fiction</div>
            </div>
          </div>
          {/* Engagement Bar */}
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-3">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 hover:border-gray-400 px-3 py-1.5 rounded-full">
                <Heart className="w-4 h-4" />
                <span className="text-sm">1,024</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 hover:border-gray-400 px-3 py-1.5 rounded-full">
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm">87</span>
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
            The letter sat on the windowsill, trembling in the morning breeze. It was the last thing she wrote before the world changed, before the city's lights flickered out and the trains stopped running. The envelope was pale pink, the color of cherry blossoms, and her name was written in a hand he'd memorized long ago.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            He read it every morning, just as the sun crested the rooftops. "If you find this, I hope you remember the way we laughed in the rain, the way you always made the coffee too strong, the way you said goodbye like it was a promise."
          </p>
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            The city was quieter now. He walked the empty streets, the letter folded in his pocket, and watched the world move on. Sometimes he thought he saw her in the crowd—a flash of red hair, a laugh that echoed—but it was always just memory, playing tricks.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            On the last day of winter, he left a reply on the windowsill. "I remember. I always will."
          </p>
          <hr className="my-8 border-gray-200" />
          <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Epilogue
          </h1>
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            Spring arrived quietly, with petals drifting through the open window. He found himself smiling at strangers, letting the city's new rhythm carry him forward. The letter remained, but it was no longer a weight—just a memory, folded and cherished, as he stepped into the gentle light of tomorrow.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            Sometimes, love is not about holding on, but about letting go and believing in the beauty of what comes next.
          </p>
          {/* Give Some Love Block (Paywall Replacement) - At the very end */}
          <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm p-4 my-8">
            <span className="text-5xl mx-4 mb-4 block" role="img" aria-label="love">❤️</span>
            <div className="flex-1">
              <div className="font-semibold text-lg text-gray-900 mb-1">Support your favorite writer by giving them some love!</div>
              <div className="text-gray-500 text-sm mb-2">Every bit of love helps keep the stories flowing.</div>
            </div>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg text-base transition"
              onClick={() => setShowCoffeeModal(true)}
            >
              Give some love
            </button>
          </div>
          {/* Buy a Coffee Modal - Orange Theme, Interactive */}
          {showCoffeeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center relative flex flex-col items-center">
                <div className="w-full flex flex-col items-center">
                  <span className="text-5xl mb-2 block" role="img" aria-label="love">❤️</span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Give <span className="text-orange-500">Your Writer</span> some love</h2>
                </div>
                <div className="w-full flex justify-center mb-4">
                  <div className="flex flex-wrap items-center bg-orange-50 rounded-lg px-4 py-3 gap-x-2 gap-y-2 w-full justify-center">
                    <span className="text-3xl mr-3" role="img" aria-label="love">❤️</span>
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
                  Send Love  ${Math.ceil(coffeeQty * coffeePrice)}
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