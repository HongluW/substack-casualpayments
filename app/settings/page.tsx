"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";

const currencies = ["USD", "EUR", "GBP", "JPY", "CNY"];

export default function Settings() {
  const [monthly, setMonthly] = useState("5.00");
  const [annual, setAnnual] = useState("50.00");
  const [founding, setFounding] = useState("150.00");
  const [currency, setCurrency] = useState("USD");
  const [foundingName, setFoundingName] = useState("Founding Member");
  const [flexible, setFlexible] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex items-center justify-center w-full min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-xl mx-auto px-4 py-12 pt-32 overflow-y-auto" style={{ boxSizing: 'border-box' }}>
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-left">Set up forms of payment</h1>
          <div className="border-b mb-6" />
          <form className="space-y-8">
            <section>
              <h2 className="text-lg font-semibold mb-4">Plans</h2>
              <div className="space-y-6">
                {/* Monthly plan */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-medium">Monthly plan price</label>
                    <div className="flex items-center gap-2">
                      <input type="number" min="0" step="0.01" value={monthly} onChange={e => setMonthly(e.target.value)} className="w-24 px-2 py-1 border rounded text-right" />
                      <select value={currency} onChange={e => setCurrency(e.target.value)} className="border rounded px-2 py-1">
                        {currencies.map(cur => <option key={cur} value={cur}>{cur}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">The amount monthly paid subscribers pay per month.</div>
                </div>
                {/* Annual plan */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-medium">Annual plan price</label>
                    <div className="flex items-center gap-2">
                      <input type="number" min="0" step="0.01" value={annual} onChange={e => setAnnual(e.target.value)} className="w-24 px-2 py-1 border rounded text-right" />
                      <select value={currency} onChange={e => setCurrency(e.target.value)} className="border rounded px-2 py-1">
                        {currencies.map(cur => <option key={cur} value={cur}>{cur}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">The amount annual paid subscribers pay per year.</div>
                </div>
                {/* Founding plan */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-medium">Founding plan price</label>
                    <div className="flex items-center gap-2">
                      <input type="number" min="0" step="0.01" value={founding} onChange={e => setFounding(e.target.value)} className="w-24 px-2 py-1 border rounded text-right" />
                      <select value={currency} onChange={e => setCurrency(e.target.value)} className="border rounded px-2 py-1">
                        {currencies.map(cur => <option key={cur} value={cur}>{cur}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm flex items-center gap-2">The amount founding members pay per year. <a href="#" className="underline text-gray-500 text-xs">Remove plan</a></div>
                </div>
                {/* Founding plan name */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-medium">Founding plan name</label>
                    <input type="text" value={foundingName} onChange={e => setFoundingName(e.target.value)} className="border rounded px-2 py-1 w-56 text-right" />
                  </div>
                  <div className="text-gray-500 text-sm">Give your founding plan a custom name.</div>
                </div>
                {/* Flexible founding plan pricing */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Flexible founding plan pricing</div>
                    <div className="text-gray-500 text-sm max-w-xs">Allow founding members to select an amount less than suggested, but more than your annual plan.</div>
                  </div>
                  <button type="button" aria-pressed={flexible} onClick={() => setFlexible(f => !f)} className={`ml-4 w-10 h-6 flex items-center rounded-full transition-colors duration-200 ${flexible ? 'bg-orange-500' : 'bg-gray-300'}`}> <span className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${flexible ? 'translate-x-4' : ''}`}></span></button>
                </div>
              </div>
            </section>
          </form>
          <div className="border-b my-8" />
          <div className="flex flex-col gap-4 mt-8">
            <button className="w-full py-3 rounded bg-orange-500 text-white font-semibold text-lg shadow hover:bg-orange-600 transition">Enable payments</button>
            <button className="w-full py-3 rounded bg-gray-200 text-gray-700 font-semibold text-lg">Enable payments later</button>
          </div>
        </div>
      </div>
    </div>
  );
} 