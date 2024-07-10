"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Card } from "../card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/",
		label: "X",
		handle: "@buckyySoft_",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:buckyypayment@gmail.com",
		label: "Email",
		handle: "buckyypayment@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/buckyy",
		label: "Github",
		handle: "buckyy",
	},
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/",
		label: "Fiverr",
		handle: "@buckyySoft_",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:buckyypayment@gmail.com",
		label: "Upwork",
		handle: "buckyypayment@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://facebook.com/BuckyyPay",
		label: "Facebook",
		handle: "/buckyysoft",
	},
];

export default function Services() {
	return (
		<div className="bg-black relative z-50">
			<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<div className="">
				<Card>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-20 my-20 md:my-40 px-4">
						<div className="flex flex-col items-start">
							<div className="relative">
								<div className="absolute inset-0 bg-purple-500/50 transform  rounded-md blur-lg"></div>
								<div className="h-10 w-10 rounded-2xl  backdrop-blur-sm flex items-center justify-center  bg-white bg-grid-extrasmall-zinc-200  overflow-hidden">
									<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-purple-600 h-4 w-4 relative z-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26a398.57 398.57 0 0 0-282.5 117 397.47 397.47 0 0 0-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127 36.7 36.7 79.4 65.5 127 85.6a396.64 396.64 0 0 0 155.6 31.5 398.57 398.57 0 0 0 282.5-117c36.7-36.7 65.5-79.4 85.6-127a396.64 396.64 0 0 0 31.5-155.6v-26c-.1-4.4-3.7-8-8.1-8zM951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3A398.5 398.5 0 0 0 588.4 75.6L560.1 73c-4.7-.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-.1 8.4-4 8-8.6z"></path></svg>
									<div className="absolute inset-0 bg-white [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)] z-40"></div>
								</div>
							</div>
							<div className="mt-8">
								<h2 className="text-white text-2xl">Amazing Analytics you will never ever use.</h2>
								<p className="text-sm text-zinc-100 mt-8 leading-relaxed">Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them.</p>
							</div>
						</div>
						<div className="flex flex-col items-start">
							<div className="relative">
								<div className="absolute inset-0 bg-purple-500/50 transform  rounded-md blur-lg"></div>
								<div className="h-10 w-10 rounded-2xl  backdrop-blur-sm flex items-center justify-center  bg-white bg-grid-extrasmall-zinc-200  overflow-hidden">
									<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-purple-600 h-4 w-4 relative z-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"></path></svg>
									<div className="absolute inset-0 bg-white [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)] z-40"></div>
								</div>
							</div>
							<div className="mt-8">
								<h2 className="text-white text-2xl">Amazing Analytics you will never ever use.</h2>
								<p className="text-sm text-zinc-100 mt-8 leading-relaxed">Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them.</p>
							</div>
						</div>
						<div className="flex flex-col items-start">
							<div className="relative">
								<div className="absolute inset-0 bg-purple-500/50 transform  rounded-md blur-lg"></div>
								<div className="h-10 w-10 rounded-2xl  backdrop-blur-sm flex items-center justify-center  bg-white bg-grid-extrasmall-zinc-200  overflow-hidden">
									<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-purple-600 h-4 w-4 relative z-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"></path></svg>
									<div className="absolute inset-0 bg-white [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)] z-40"></div>
								</div>
							</div>
							<div className="mt-8">
								<h2 className="text-white text-2xl">Amazing Analytics you will never ever use.</h2>
								<p className="text-sm text-zinc-100 mt-8 leading-relaxed">Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them.</p>
							</div>
						</div>
						<div className="flex flex-col items-start">
							<div className="relative">
								<div className="absolute inset-0 bg-purple-500/50 transform  rounded-md blur-lg"></div>
								<div className="h-10 w-10 rounded-2xl  backdrop-blur-sm flex items-center justify-center  bg-white bg-grid-extrasmall-zinc-200  overflow-hidden">
								<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-purple-600 h-4 w-4 relative z-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"></path><path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z"></path><path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"></path></svg>
									<div className="absolute inset-0 bg-white [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)] z-40"></div>
								</div>
							</div>
							<div className="mt-8">
								<h2 className="text-white text-2xl">Amazing Analytics you will never ever use.</h2>
								<p className="text-sm text-zinc-100 mt-8 leading-relaxed">Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them.</p>
							</div>
						</div>
						<div className="flex flex-col items-start">
							<div className="relative">
								<div className="absolute inset-0 bg-purple-500/50 transform  rounded-md blur-lg"></div>
								<div className="h-10 w-10 rounded-2xl  backdrop-blur-sm flex items-center justify-center  bg-white bg-grid-extrasmall-zinc-200  overflow-hidden">
								<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-purple-600 h-4 w-4 relative z-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 23c-75.556 0-137 61.444-137 137v.008c.038 42.262 19.614 82.002 52.756 107.857L116.473 489h279.054l-55.35-221.402c33.076-25.838 52.76-65.38 52.823-107.584V160c0-75.556-61.444-137-137-137zm0 18c65.824 0 118.993 53.164 119 118.986-.06 38.516-18.74 74.6-50.154 96.88l-5.016 3.56L372.473 471H139.527l52.625-210.504-5.013-3.558C155.712 234.64 137.036 198.53 137 160v-.008C137.004 94.168 190.174 41 256 41zm14.508 44.69c-1.983-.01-3.966-.003-5.95.03-30.615.485-61.19 6.227-91.69 16.77-3.66 5.217-6.824 10.77-9.378 16.608-1.183 2.468-2.232 4.98-3.166 7.523 30.858-12.783 61.51-20.36 91.987-22.376-25.746 5.47-45.19 28.43-45.19 55.756 0 31.374 25.627 57 57 57 31.375 0 57-25.626 57-57 0-28.278-20.82-51.876-47.9-56.26 24.755.443 49.475 4.616 74.22 12.733-4.17-8.416-9.554-16.247-15.872-23.258-20.307-4.896-40.67-7.39-61.06-7.524zM264.12 121c21.647 0 39 17.354 39 39s-17.353 39-39 39c-21.645 0-39-17.354-39-39 0-4.494.76-8.8 2.14-12.807.83.772 1.705 1.465 2.597 2.037 4.008 2.572 8.673 3.77 13.676 3.77s9.67-1.198 13.676-3.77C261.215 146.66 265 142 265 136s-3.784-10.66-7.79-13.23c-.484-.31-.978-.597-1.48-.868 2.702-.585 5.507-.902 8.39-.902zm-102.915 72.994c3.308 9.103 7.833 17.772 13.428 25.645 36.963 15.02 72.75 24.08 107.156 25.694 10.122.475 20.12.278 29.972-.613 8.763-5.944 16.48-13.31 22.963-21.65-16.736 3.786-34.09 5.127-52.092 4.284-37.77-1.77-78.5-13.594-121.428-33.36z"></path></svg>
									<div className="absolute inset-0 bg-white [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)] z-40"></div>
								</div>
							</div>
							<div className="mt-8">
								<h2 className="text-white text-2xl">Amazing Analytics you will never ever use.</h2>
								<p className="text-sm text-zinc-100 mt-8 leading-relaxed">Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them.</p>
							</div>
						</div>
						<div className="flex flex-col items-start">
							<div className="relative">
								<div className="absolute inset-0 bg-purple-500/50 transform  rounded-md blur-lg"></div>
								<div className="h-10 w-10 rounded-2xl backdrop-blur-sm flex items-center justify-center bg-white bg-grid-extrasmall-zinc-200 overflow-hidden">
									<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-purple-600 h-4 w-4 relative z-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path></svg>
									<div className="absolute inset-0 bg-white [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)] z-40"></div>
								</div>
							</div>
							<div className="mt-8">
								<h2 className="text-white text-2xl">Amazing Analytics you will never ever use.</h2>
								<p className="text-sm text-zinc-100 mt-8 leading-relaxed">Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them.</p>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
		</div>
	);
}
