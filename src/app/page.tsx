import Image from "next/image"
import {
	TwitterLogoIcon,
	GitHubLogoIcon,
	DiscordLogoIcon,
} from "@radix-ui/react-icons"
import Link from "next/link"

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center p-24">
			<section className="space-y-16 flex flex-col items-center">
				<div className="flex space-x-2">
					<Image
						src="/avatar.jpg"
						width={200}
						height={200}
						alt="the wuh avatar"
						className="p-3"
					/>
					<h1 className="flex flex-col  text-[100px] font-extrabold leading-none m-0 p-0">
						<span className="p-0  mt-0 align-text-top">The</span>
						<span className="p-0">Wuh.</span>
					</h1>
				</div>
				<p className="text-center text-2xl italic tracking-[0.5rem]">
					Building on Solana, mostly.
				</p>
				<div className="flex space-x-16">
					<Link target="_blank" href="https://twitter.com/_thewuh">
						<TwitterLogoIcon className="h-8 w-8" />
					</Link>
					<Link target="_blank" href="https://github.com/thewuhxyz">
						<GitHubLogoIcon className="h-8 w-8" />
					</Link>
					<Link
						target="_blank"
						href="https://discord.com/users/805507481988104254"
					>
						<DiscordLogoIcon className="h-8 w-8" />
					</Link>
					<Link target="_blank" href="https://t.me/thewuh">
						<Image
							src="/telegram.svg"
							width={32}
							height={32}
							alt="the wuh avatar"
						/>
					</Link>
				</div>
			</section>
		</main>
	)
}
