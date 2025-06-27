"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";

const currencies = [
  "USD", "EUR", "GBP", "CAD", "AUD", "NZD", "BRL", "MXN", "INR", "PLN"
];

export default function Settings() {
  const [monthly, setMonthly] = useState("5.00");
  const [annual, setAnnual] = useState("50.00");
  const [founding, setFounding] = useState("150.00");
  const [currency, setCurrency] = useState("USD");
  const [foundingName, setFoundingName] = useState("Founding Member");
  const [flexible, setFlexible] = useState(true);
  const [freeBenefits, setFreeBenefits] = useState(["Occasional public posts"]);
  const [paidBenefits, setPaidBenefits] = useState([
    "Subscriber-only posts and full archive",
    "Post comments and join the community",
    ""
  ]);
  const [foundingBenefits, setFoundingBenefits] = useState([""]);
  const [minGroupSize, setMinGroupSize] = useState("2");
  const [groupDiscount, setGroupDiscount] = useState("");
  const [inAppPayments, setInAppPayments] = useState(true);
  const [directDebit, setDirectDebit] = useState(true);
  const [localizePrices, setLocalizePrices] = useState(true);

  // Helper for editable benefit lists
  const handleBenefitChange = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    idx: number,
    value: string
  ) => {
    const updated = [...list];
    updated[idx] = value;
    // Add new empty input if editing the last one
    if (idx === list.length - 1 && value) updated.push("");
    // Remove empty extras
    setList(updated.filter((b, i) => b || i === updated.length - 1));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-col items-center w-full min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-2xl px-4 pt-32 pb-40">
          {/* Title */}
          <h1 className="pt-5 pb-2 text-2xl font-bold">Set up paid subscriptions</h1>
          <div className="-mx-5"><hr className="border-gray-200" /></div>

          {/* Plans Section */}
          <div className="pt-8 pb-4">
            <div className="text-lg font-bold pb-4">Plans</div>
            {/* Monthly */}
            <div className="flex flex-row gap-5 min-h-12 items-center mb-4">
              <div className="flex flex-col flex-grow gap-0.5">
                <div className="font-normal text-sm">Monthly plan price</div>
                <div className="text-xs text-gray-500">The amount monthly paid subscribers pay per month.</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="text" value={monthly} onChange={e => setMonthly(e.target.value)} className="w-20 border border-gray-300 rounded-l-md rounded-r-none px-2 py-1 text-base text-right focus:border-orange-500 focus:ring-0 outline-none transition shadow-sm" />
                <select value={currency} onChange={e => setCurrency(e.target.value)} className="border border-gray-300 border-l-0 rounded-r-md rounded-l-none -ml-px px-2 py-1 text-base focus:border-orange-500 focus:ring-0 outline-none transition shadow-sm">
                  {currencies.map(cur => <option key={cur} value={cur.toUpperCase()}>{cur.toUpperCase()}</option>)}
                </select>
              </div>
            </div>
            {/* Annual */}
            <div className="flex flex-row gap-5 min-h-12 items-center mb-4">
              <div className="flex flex-col flex-grow gap-0.5">
                <div className="font-normal text-sm">Annual plan price</div>
                <div className="text-xs text-gray-500">The amount annual paid subscribers pay per year.</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="text" value={annual} onChange={e => setAnnual(e.target.value)} className="w-20 border border-gray-300 rounded-l-md rounded-r-none px-2 py-1 text-base text-right focus:border-orange-500 focus:ring-0 outline-none transition shadow-sm" />
                <select value={currency} onChange={e => setCurrency(e.target.value)} className="border border-gray-300 border-l-0 rounded-r-md rounded-l-none -ml-px px-2 py-1 text-base focus:border-orange-500 focus:ring-0 outline-none transition shadow-sm">
                  {currencies.map(cur => <option key={cur} value={cur.toUpperCase()}>{cur.toUpperCase()}</option>)}
                </select>
              </div>
            </div>
            {/* Founding */}
            <div className="flex flex-row gap-5 min-h-12 items-center mb-4">
              <div className="flex flex-col flex-grow gap-0.5">
                <div className="font-normal text-sm">Founding plan price</div>
                <div className="text-xs text-gray-500">The amount founding members pay per year. <a href="#" className="underline text-xs">Remove plan</a></div>
              </div>
              <div className="flex items-center gap-2">
                <input type="text" value={founding} onChange={e => setFounding(e.target.value)} className="w-20 border border-gray-300 rounded-l-md rounded-r-none px-2 py-1 text-base text-right focus:border-orange-500 focus:ring-0 outline-none transition shadow-sm" />
                <select value={currency} disabled className="border border-gray-300 border-l-0 rounded-r-md rounded-l-none -ml-px px-2 py-1 text-base bg-gray-100 focus:border-orange-500 focus:ring-0 outline-none transition shadow-sm">
                  {currencies.map(cur => <option key={cur} value={cur.toUpperCase()}>{cur.toUpperCase()}</option>)}
                </select>
              </div>
            </div>
            {/* Founding plan name */}
            <div className="flex flex-row gap-5 min-h-12 items-center mb-4">
              <div className="flex flex-col flex-grow gap-0.5">
                <div className="font-normal text-sm">Founding plan name</div>
                <div className="text-xs text-gray-500">Give your founding plan a custom name.</div>
              </div>
              <input type="text" value={foundingName} onChange={e => setFoundingName(e.target.value)} className="border rounded px-2 py-1 w-40 text-right text-sm" />
            </div>
            {/* Flexible founding plan pricing */}
            <div className="flex flex-row gap-5 min-h-12 items-center mb-4 justify-between">
              <div className="flex flex-col flex-grow gap-0.5">
                <div className="font-normal text-sm">Flexible founding plan pricing</div>
                <div className="text-xs text-gray-500 max-w-xs">Allow founding members to select an amount less than suggested, but more than your annual plan.</div>
              </div>
              <button type="button" aria-pressed={flexible} onClick={() => setFlexible(f => !f)} className={`ml-4 w-10 h-6 flex items-center rounded-full transition-colors duration-200 ${flexible ? 'bg-orange-500' : 'bg-gray-300'}`}> <span className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${flexible ? 'translate-x-4' : ''}`}></span></button>
            </div>
          </div>
          <div className="-mx-5"><hr className="border-gray-200" /></div>

          {/* Benefits Section */}
          <div className="pt-8 pb-4">
            <div className="text-lg font-bold pb-4">Benefits</div>
            {/* Free subscriber benefits */}
            <div className="mb-4">
              <div className="font-normal text-sm">Free subscriber benefits</div>
              <div className="text-xs text-gray-500 mb-2">Let free subscribers know what they'll get out of their subscription</div>
              {freeBenefits.map((b, i) => (
                <input key={i} value={b} placeholder="Add a free benefit..." maxLength={170} onChange={e => handleBenefitChange(freeBenefits, setFreeBenefits, i, e.target.value)} className="mb-2 w-full border rounded px-2 py-1 text-sm" />
              ))}
            </div>
            {/* Paid subscriber benefits */}
            <div className="mb-4">
              <div className="font-normal text-sm">Paid subscriber benefits</div>
              <div className="text-xs text-gray-500 mb-2">Let paid subscribers know what they'll get out of their subscription</div>
              {paidBenefits.map((b, i) => (
                <input key={i} value={b} placeholder={i === 0 ? "Add a paid benefit..." : i === 1 ? "Add a second paid benefit..." : "Add a third paid benefit..."} maxLength={170} onChange={e => handleBenefitChange(paidBenefits, setPaidBenefits, i, e.target.value)} className="mb-2 w-full border rounded px-2 py-1 text-sm" />
              ))}
            </div>
            {/* Founding member benefits */}
            <div className="mb-4">
              <div className="font-normal text-sm">Founding member benefits</div>
              <div className="text-xs text-gray-500 mb-2">Let founding members know what they'll get out of their subscription</div>
              {foundingBenefits.map((b, i) => (
                <input key={i} value={b} placeholder="Add a founding benefit..." maxLength={170} onChange={e => handleBenefitChange(foundingBenefits, setFoundingBenefits, i, e.target.value)} className="mb-2 w-full border rounded px-2 py-1 text-sm" />
              ))}
            </div>
          </div>
          <div className="-mx-5"><hr className="border-gray-200" /></div>

          {/* Group subscriptions Section */}
          <div className="pt-8 pb-4">
            <div className="text-lg font-bold pb-4">Group subscriptions</div>
            <div className="flex flex-row gap-5 min-h-12 items-center mb-4">
              <div className="flex flex-col flex-grow gap-0.5">
                <div className="font-normal text-sm">Minimum group size</div>
              </div>
              <input type="text" value={minGroupSize} onChange={e => setMinGroupSize(e.target.value)} className="w-20 px-2 py-1 border rounded text-right text-sm" />
            </div>
            <div className="flex flex-row gap-5 min-h-12 items-center mb-4">
              <div className="flex flex-col flex-grow gap-0.5">
                <div className="font-normal text-sm">Group subscription discount</div>
                <div className="text-xs text-gray-500">Offer a discount on subscriptions purchased in groups of 2 or more. </div>
              </div>
              <button type="button" className="px-4 py-2 rounded bg-gray-100 text-gray-700 font-semibold text-sm border">Add group discount</button>
            </div>
          </div>
          <div className="-mx-5"><hr className="border-gray-200" /></div>

          {/* Billing Section */}
          <div className="pt-8 pb-4">
            <div className="text-lg font-bold pb-4">Billing</div>
            <div className="flex flex-row gap-5 min-h-12 items-center mb-4">
              <div className="flex flex-col flex-grow gap-0.5">
                <div className="font-normal text-sm">Enable in-app payments</div>
                <div className="text-xs text-gray-500">Let people pay for subscriptions in the Substack app. <a className="underline" href="https://support.substack.com/hc/en-us/articles/19718129670420-Can-my-subscribers-pay-on-the-Substack-iOS-app" target="_blank">Learn more</a></div>
              </div>
              <input type="checkbox" checked={inAppPayments} onChange={e => setInAppPayments(e.target.checked)} className="w-5 h-5" />
            </div>
            <div className="flex flex-row gap-5 min-h-12 items-center mb-4">
              <div className="flex flex-col flex-grow gap-0.5">
                <div className="font-normal text-sm">Accept direct debit payments</div>
                <div className="text-xs text-gray-500">Direct debit payments can take 5-14 business days to clear, and readers can access paid content during this period. You can disable direct debit payments if the content behind your paywall is especially sensitive.</div>
              </div>
              <input type="checkbox" checked={directDebit} onChange={e => setDirectDebit(e.target.checked)} className="w-5 h-5" />
            </div>
            <div className="flex flex-row gap-5 min-h-12 items-center mb-4">
              <div className="flex flex-col flex-grow gap-0.5">
                <div className="font-normal text-sm">Automatically localize prices</div>
                <div className="text-xs text-gray-500">Displays all prices in the subscribers' local currency. <a className="underline" href="https://support.substack.com/hc/en-us/articles/16523703337108" target="_blank">Learn more</a></div>
              </div>
              <input type="checkbox" checked={localizePrices} onChange={e => setLocalizePrices(e.target.checked)} className="w-5 h-5" />
            </div>
            <div className="flex flex-row gap-5 min-h-12 items-center mb-4">
              <div className="flex flex-col flex-grow gap-0.5">
                <div className="font-normal text-sm">Supported currencies</div>
                <div className="text-xs text-gray-500">Substack will convert prices to these currencies using the latest exchange rates. <a className="underline" href="https://support.substack.com/hc/en-us/articles/16523703337108" target="_blank">Learn more</a></div>
              </div>
              <button type="button" className="px-2 py-1 rounded bg-gray-100 text-gray-700 font-semibold text-xs border">Show currencies</button>
            </div>
          </div>
        </div>
      </div>
      {/* Fixed footer button group at the bottom of the viewport */}
      <div className="fixed bottom-0 left-0 w-full bg-white z-50">
        <div className="w-full max-w-2xl mx-auto px-4">
          <hr className="border-gray-200 mb-0" />
          <div className="flex flex-col gap-3 py-4 w-full">
            <button className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-sm bg-orange-500 text-orange-50 font-medium text-sm shadow hover:bg-orange-600 transition">Enable payments</button>
            <button className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-sm bg-gray-200 text-black font-medium text-sm">Enable payments later</button>
          </div>
        </div>
      </div>
    </div>
  );
} 