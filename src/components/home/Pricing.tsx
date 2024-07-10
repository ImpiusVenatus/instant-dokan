"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { motion } from "framer-motion";
import { CircleChevronRight } from 'lucide-react';

type BillingCycle = "monthly" | "yearly";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const handleToggle = (cycle: BillingCycle) => {
    setBillingCycle(cycle);
  };

  const prices = {
    monthly: {
      starter: 9,
      proChampion: 29,
      kingMaker: 59,
      price: 'mo'
    },
    yearly: {
      starter: 90,
      proChampion: 290,
      kingMaker: 590,
      price: 'year'
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="px-8 py-32 container text-center bg-[#FAFAFA]"
    >
      <h2 className="text-5xl font-semibold text-gray-800">Our Pricing</h2>
      <p className="pb-8 text-gray-500">With so many features at your disposal, you might have some trouble choosing a plan</p>

      <div className="flex justify-center mb-8">
        <div className="relative inline-flex bg-white rounded-md overflow-hidden">
          <button
            className={`px-4 py-2 font-semibold z-10 transition-colors duration-300 ${billingCycle === "monthly" ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={() => handleToggle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 font-semibold z-10 transition-colors duration-300 ${billingCycle === "yearly" ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={() => handleToggle("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <div className="rounded-[22px] text-left flex flex-col max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <h2 className="text-4xl font-bold">Starter</h2>
          <p className="text-md mt-4 mb-2 dark:text-neutral-200 text-gray-500">
            For small teams or office
          </p>
          <div className="py-4">
            <span className="text-6xl font-bold">${prices[billingCycle].starter}</span><span>/{prices[billingCycle].price}</span>
          </div>
          <button className="px-8 py-2 block w-[100%] bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
            Get Started
          </button>
          <ul className="flex flex-col gap-4 py-4 text-gray-500 text-sm">
            <li className="flex items-center gap-2">
              <CircleChevronRight /> <span>1 Users</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleChevronRight /> <span>10 Projects</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleChevronRight /> <span>10,000 Website Views</span>
            </li>
            <li className="flex gap-2">
              <CircleChevronRight /> <span>2 Integration</span>
            </li>
            <li className="flex gap-2">
              <CircleChevronRight /> <span>1GB Storage</span>
            </li>
            <li className="flex gap-2">
              <CircleChevronRight /> <span>Email Support</span>
            </li>
          </ul>
        </div>
        <div className="">
          <BackgroundGradient className="rounded-[22px] flex flex-col justify-center p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <h2 className="text-4xl font-bold">Pro Champion</h2>
            <p className="text-md mt-4 mb-2 dark:text-neutral-200 text-gray-500">
              For medium to large teams
            </p>
            <div className="py-4">
              <span className="text-6xl font-bold">${prices[billingCycle].proChampion}</span><span>/{prices[billingCycle].price}</span>
            </div>
            <button className="px-8 py-2 block w-[100%] bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
              Get Started
            </button>
            <ul className="flex flex-col gap-4 py-4 text-gray-500 text-sm text-left">
              <li className="flex items-center gap-2">
                <CircleChevronRight /> <span>5 Users</span>
              </li>
              <li className="flex items-center gap-2">
                <CircleChevronRight /> <span>50 Projects</span>
              </li>
              <li className="flex items-center gap-2">
                <CircleChevronRight /> <span>50,000 Website Views</span>
              </li>
              <li className="flex gap-2">
                <CircleChevronRight /> <span>5 Integration</span>
              </li>
              <li className="flex gap-2">
                <CircleChevronRight /> <span>5GB Storage</span>
              </li>
              <li className="flex gap-2">
                <CircleChevronRight /> <span>Email Support</span>
              </li>
              <li className="flex gap-2">
                <CircleChevronRight /> <span>Understand the meaning of life</span>
              </li>
              <li className="flex gap-2">
                <CircleChevronRight /> <span>Everything else</span>
              </li>
            </ul>
          </BackgroundGradient>
        </div>
        <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <h2 className="text-4xl font-bold">King Maker</h2>
          <p className="text-md mt-4 mb-2 dark:text-neutral-200 text-gray-500">
            For large team or office
          </p>
          <div className="py-4">
            <span className="text-6xl font-bold">${prices[billingCycle].kingMaker}</span><span>/{prices[billingCycle].price}</span>
          </div>
          <button className="px-8 py-2 block w-[100%] bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
            Get Started
          </button>
          <ul className="flex flex-col gap-4 py-4 text-gray-500 text-sm">
            <li className="flex items-center gap-2">
              <CircleChevronRight /> <span>Unlimited Users</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleChevronRight /> <span>Unlimited Projects</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleChevronRight /> <span>Unlimited Website Views</span>
            </li>
            <li className="flex gap-2">
              <CircleChevronRight /> <span>Unlimited Integration</span>
            </li>
            <li className="flex gap-2">
              <CircleChevronRight /> <span>Unlimited Storage</span>
            </li>
            <li className="flex gap-2">
              <CircleChevronRight /> <span>Email Support</span>
            </li>
            <li className="flex gap-2">
              <CircleChevronRight /> <span>Everything else</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
