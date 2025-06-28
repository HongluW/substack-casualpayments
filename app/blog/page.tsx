"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MessageCircle, Bell, Heart, MessageSquare, Repeat2, MoreHorizontal, ChevronLeft, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

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
                The Generalist
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
            No Rivals: The Founders Fund Story (Part I)
          </h1>
          <h2 className="text-xl text-gray-600 mb-6 leading-relaxed">
            Founders Fund, led by Peter Thiel, has ascended to the pinnacle of Silicon Valley. Its fundamental genius is wanting differently.
          </h2>
          
          {/* Author Info */}
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder-user.jpg" alt="Mario Gabriele" />
              <AvatarFallback>MG</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium text-gray-900">Mario Gabriele</div>
              <div className="text-sm text-gray-500">Jun 12, 2025 • Paid</div>
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

        {/* Subscribe Widget */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-4">
            <em>"The Generalist offers the most in-depth, well-researched, and thought-provoking insights." — Alya, a paying member</em>
          </p>
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Upgrade to paid
          </Button>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          <img 
            src="/placeholder.jpg" 
            alt="Founders Fund Story" 
            className="w-full h-96 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Illustration by Edmon de Haro, photograph by Gage Skidmore
          </p>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none" style={{ fontFamily: "Georgia, serif" }}>
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            Friends,
          </p>
          
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            In January of 2024, we asked you, our readers, which startup or venture fund you most wanted us to cover in a deep dive. The answer was unequivocal: Founders Fund.
          </p>
          
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            Over the past 18 months, we've been working on that story. Today, at long last, we're sharing the fruits of those efforts.
          </p>
          
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            "No Rivals" is a four-part series spanning more than 35,000 words. It will run over the next four weeks. It's the most comprehensive examination of Silicon Valley's most controversial venture firm, its extraordinary performance, and its remarkable cultural influence. The series is the product of extensive research, interviews with more than a dozen key figures, and a detailed analysis of Founders Fund's previously undisclosed returns.
          </p>
          
          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            It's a story featuring globally visible characters—Thiel, Musk, Altman, Zuckerberg, Trump—and secretive power brokers who shun the spotlight. It's a story of philosophy and technology, spite and vision, political maneuvering and spectacular windfalls.
          </p>

          {/* Subscribe Widget in Content */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Upgrade to paid
            </Button>
          </div>

          <hr className="my-8 border-gray-200" />

          <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Part I: The Prophet
          </h1>

          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            Peter Thiel was nowhere to be seen.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            On January 20, escaping a bitter winter storm, America's most powerful gathered beneath the Capitol dome to celebrate Donald J. Trump's inauguration as the 47th president.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            The usual suspects were in attendance, mingling with a new guard: UFC impresario Dana White lurking a few feet behind Barack Obama, George W. Bush a simple football toss away from Joe Rogan, OpenAI's Sam Altman conversing excitedly with influencer Logan Paul. Welcome to the New America; you don't need a podcast to work here, but it helps.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            If you have even a passing interest in technology and venture capital, it is difficult to review photos from the event and not think of Thiel. He does not appear once, and yet he is everywhere.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8" style={{ fontFamily: "Georgia, serif" }}>
            Pals
          </h2>

          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            If you do not want to work for Peter Thiel, you must avoid meeting him.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            The French diplomat Charles-Maurice de Talleyrand-Périgord, Napoleon's foreign minister, was said to be so interesting, so charming, that it was almost dangerous to spend too much time in his company. Contemporaries described his smile as "paralyzing," while the salonist Madame de Staël, no stranger to grandiloquence, gushed of Talleyrand, "If his conversation was for sale, I should ruin myself."
          </p>

          <p className="text-gray-800 leading-relaxed mb-6 text-lg">
            Peter Thiel seems to have a similarly transfixing effect. In studying Founders Fund's origins, evidence of this referent power appeared repeatedly: a chance encounter with Thiel bewitching the listener to move cities, forgo prestige, and alter career plans, to spend a little more time in the strange moonlight of his mind.
          </p>

          {/* Paywall */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center my-8">
            <p className="text-gray-600 mb-2">Hi <strong>reader@example.com</strong></p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">This post is for paid subscribers</h3>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white mb-4">
              Upgrade to paid
            </Button>
            <p className="text-sm text-gray-600">
              Already a paid subscriber? <a href="#" className="font-semibold text-gray-900 underline">Switch accounts</a>
            </p>
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
    </div>
  );
} 