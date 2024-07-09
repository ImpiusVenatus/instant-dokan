"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { motion } from "framer-motion";
import { CircleChevronRight } from 'lucide-react';

export function Pricing() {
  return (
    <motion.div 
        initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
        className="px-8 py-32 text-center bg-[#FAFAFA]"
    >
        <h2 className="pb-8 text-3xl font-semibold">Our Pricing</h2>
        <div className="flex flex-wrap gap-8 justify-center">
            <div className="rounded-[22px] text-left flex flex-col w-[33%] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <h2 className="text-4xl font-bold">Starter</h2>
                <p className="text-md mt-4 mb-2 dark:text-neutral-200 text-gray-500">
                For small teams or office
                </p>
                <div className="py-4"><span className="text-6xl font-bold">$9</span><span>/mo</span></div>
                <button className="px-8 py-2 block w-[100%] bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                    Get Started
                </button>
                <ul className="flex flex-col gap-4 py-4 text-gray-500">
                    <li className="flex gap-2">
                        <CircleChevronRight /> 1 User
                    </li>
                    <li className="flex gap-2">
                        <CircleChevronRight /> 10 Projects
                    </li>
                    <li className="flex gap-2">
                        <CircleChevronRight /> 10,000 Website Views
                    </li>
                    <li className="flex gap-2">
                        <CircleChevronRight /> 2 Integration
                    </li>
                    <li className="flex gap-2">
                        <CircleChevronRight /> 1GB Storage
                    </li>
                    <li className="flex gap-2">
                        <CircleChevronRight /> Email Support
                    </li>
                </ul>
            </div>
        <div className="w-[33%]">
            <BackgroundGradient className="rounded-[22px] flex flex-col justify-center p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                src={`/sadman.jpeg`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Certified Sadman 2
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Very efficient, hard working, will make you proud.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    $100
                </span>
                </button>
            </BackgroundGradient>
        </div>
       
        <div className="rounded-[22px] w-[33%] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image
            src={`/sadman.jpeg`}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Certified Sadman 3
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Very efficient, hard working, will make you proud.
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $100
            </span>
            </button>
        </div>
        </div>
    </motion.div>
  );
}
