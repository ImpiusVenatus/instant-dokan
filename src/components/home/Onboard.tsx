"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function Onboard() {
  return (
    <div className="container pb-16">
        <div className="m-8 h-96 relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-3xl">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h2 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            So what are you waiting for?
        </h2>
        <p className="text-center mt-2 text-neutral-300 relative z-20 max-w-[40rem]">
            We are here to help you with your business. Get in touch with us and we will get back to you as soon as possible.
        </p>
        <button className="bg-slate-800 my-4 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-0.5 px-4 ring-1 ring-white/10 ">
                <span className="text-md">
                    Contact Us
                </span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
        </div>
    </div>
  );
}
