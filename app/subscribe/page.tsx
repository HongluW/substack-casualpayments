"use client";
import React, { useState } from "react";

const plans = [
  {
    key: "annual",
    name: "Annual",
    price: "$220/year ($18.33/month)",
    benefits: [
      "Full access to all writing",
      "Exclusive interviews with leading CEOs and GPs",
      "Unlock our private database of high-potential startups",
      "17% cheaper than subscribing monthly"
    ],
    selected: true
  },
  {
    key: "monthly",
    name: "Monthly",
    price: "$22/month",
    benefits: [
      "Full access to all writing",
      "Exclusive interviews with leading CEOs and GPs",
      "Unlock our private database of high-potential startups"
    ]
  },
  {
    key: "founding",
    name: "Founding Member",
    price: "$499/year",
    benefits: [
      "Full access to all writing",
      "Exclusive interviews with leading CEOs and GPs",
      "Unlock our private database of high-potential startups",
      "Support our growth, bask in eternal glory"
    ]
  },
  {
    key: "none",
    name: "None",
    price: "Free",
    benefits: [
      "Full access to all writing",
      "Exclusive interviews with leading CEOs and GPs",
      "Unlock our private database of high-potential startups",
      "The occasional free post"
    ],
    isFree: true
  }
];

const planTypeTabs = ["One Time", "Individual", "Group", "Gift"];

export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState("annual");
  const [selectedTab, setSelectedTab] = useState("Individual");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-12">
      <div className="w-full max-w-6xl mx-auto bg-white p-2 sm:p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Choose a subscription plan</h2>
        <div className="flex justify-center gap-3 mb-8">
          {planTypeTabs.map(tab => (
            <button
              key={tab}
              type="button"
              className={`px-6 py-2 rounded-full font-medium text-base transition-colors whitespace-nowrap
                ${selectedTab === tab
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-500"}
              `}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {selectedTab === "One Time" && (
          <div className="mb-8 w-full flex flex-col items-center justify-center min-h-[200px] border border-dashed border-gray-300 rounded-xl bg-gray-50">
            <span className="text-lg text-gray-700 py-12">Make a one-time payment or donation!</span>
          </div>
        )}
        {selectedTab === "Individual" && (
          <div className="mb-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
              {plans.map((plan, idx) => (
                <label
                  key={plan.key}
                  className={`flex flex-col border rounded-xl px-6 py-6 cursor-pointer transition-all bg-white h-full min-h-[340px] justify-between ${selectedPlan === plan.key ? "border-green-600 shadow-md bg-green-50" : "border-gray-200"}`}
                  style={{ minWidth: 0 }}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.key}
                    checked={selectedPlan === plan.key}
                    onChange={() => setSelectedPlan(plan.key)}
                    className="sr-only"
                  />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-semibold text-lg ${selectedPlan === plan.key ? "text-green-700" : "text-gray-900"}`}>{plan.name}</span>
                      {selectedPlan === plan.key && (
                        <span className="ml-2">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" stroke="#16a34a" strokeWidth="2" fill="#fff"/><path d="M7 12.5l3 3 7-7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                        </span>
                      )}
                    </div>
                    <div className="text-gray-500 text-base font-normal mb-4">{plan.price}</div>
                    <ul className="text-sm space-y-2 mb-2">
                      {plan.benefits.map((benefit, i) => (
                        <li key={i} className={`flex items-center gap-2 text-gray-500 ${plan.isFree && i < 3 ? "line-through text-gray-400" : ""}`}>
                          <span>{plan.isFree && i < 3 ? (
                            <svg width="16" height="16" fill="none" stroke="#808080" strokeWidth="1.8" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.5" stroke="#808080" /><line x1="6" y1="6" x2="10" y2="10" stroke="#808080" /><line x1="10" y1="6" x2="6" y2="10" stroke="#808080" /></svg>
                          ) : (
                            <svg width="16" height="16" fill="none" stroke="#419E4E" strokeWidth="1.8" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.5" stroke="#419E4E" /><polyline points="5,9 7,11 11,7" stroke="#419E4E" strokeWidth="1.8" fill="none" /></svg>
                          )}</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}
        {selectedTab === "Group" && (
          <div className="mb-8 w-full flex flex-col items-center justify-center min-h-[200px] border border-dashed border-gray-300 rounded-xl bg-gray-50">
            <span className="text-lg text-gray-700 py-12">Group subscription options coming soon!</span>
          </div>
        )}
        {selectedTab === "Gift" && (
          <div className="mb-8 w-full flex flex-col items-center justify-center min-h-[200px] border border-dashed border-gray-300 rounded-xl bg-gray-50">
            <span className="text-lg text-gray-700 py-12">Gift a subscription to someone special!</span>
          </div>
        )}
        <div className="flex items-center justify-center gap-3 mb-6">
          <svg width="32" height="21" viewBox="0 0 32 21" fill="none" className=""><rect x="0" y="0" width="32" height="21" rx="4" fill="#515e80" opacity="0.2" /><rect x="2" y="5" width="8" height="11" rx="1" fill="#fff" opacity="0.5" /><rect x="12" y="5" width="8" height="11" rx="1" fill="#fff" opacity="0.5" /><rect x="22" y="5" width="8" height="11" rx="1" fill="#fff" opacity="0.5" /></svg>
          <span className="text-lg tracking-widest">**** **** **** 9999</span>
        </div>
        <div className="flex justify-center">
          {selectedTab === "One Time" ? (
            <button className="w-60 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded transition">Purchase</button>
          ) : (
            <button className="w-60 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded transition">Subscribe</button>
          )}
        </div>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-gray-500 underline">Other payment options...</a>
        </div>
        <div className="text-xs text-gray-400 mt-6 text-center">
          By registering you agree to our <a href="https://substack.com/tos?utm_source=subscribe" target="_blank" rel="noopener" className="underline">Terms of Service</a>, <a href="https://substack.com/privacy?utm_source=subscribe" target="_blank" rel="noopener" className="underline">Privacy Policy</a>, and <a href="https://substack.com/ccpa?utm_source=subscribe#personal-data-collected" target="_blank" rel="noopener" className="underline">Information Collection Notice</a>.
        </div>
      </div>
    </div>
  );
} 