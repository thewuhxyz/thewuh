import { Links, Project, ProjectStage, ProjectStatus } from "@/lib/types"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card"
import { Badge } from "../ui/badge"
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button, buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import { projects } from "@/lib/projects"
import { HTMLAttributeAnchorTarget } from "react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

export function ProjectList() {
	return (
		<div className="space-y-16">
			<h2 className="text-4xl text-center underline">Projects</h2>
			<div className="grid w-full  grid-cols-1  lg:grid-cols-2 place-items-center gap-8">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	)
}

export function ProjectCard({ project }: { project: Project }) {
	return (
		<Card className="w-full h-[320px]  min-w-[320px] max-w-[480px] flex flex-col justify-between">
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle className="text-xl">{project.name}</CardTitle>
					<div className="flex space-x-4 items-center">
						<SentimentalValue favorite={project.favorite} />
						<StatusBadge status={project.status} />
						<StageBadge stage={project.stage} />
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>{project.description ?? ""}</CardDescription>
			</CardContent>
			<CardFooter>
				<ProjectLinks links={project.links} />
			</CardFooter>
		</Card>
	)
}

export function ProjectLinks({ links }: { links: Links }) {
	return (
		<div className="flex space-x-4 w-full  items-center">
			{links.website ? (
				<WebsiteLink className="w-6 h-6" link={links.website} />
			) : (
				""
			)}
			{links.github ? (
				<GithubLink className="w-6 h-6" link={links.github} />
			) : (
				""
			)}
			{links.additionalLinks ? (
				<AddtionalLinks links={links.additionalLinks} />
			) : (
				""
			)}
		</div>
	)
}

export function AddtionalLinks({
	links,
}: {
	links: { title?: string; link: string }[]
}) {
	return (
		<Popover>
			<PopoverTrigger
				className={cn(
					buttonVariants({
						className: "p-0",
						size: "sm",
						variant: "link",
					})
				)}
			>
				Additional Links
			</PopoverTrigger>
			<PopoverContent className="flex flex-col justify-center w-max">
				{links.map((link, i) => (
					<LinkButton key={i} target="_blank" href={link.link}>
						{link.title ?? link.link}
					</LinkButton>
				))}
			</PopoverContent>
		</Popover>
	)
}

export function GithubLink({
	link,
	className,
}: {
	link: string
	className?: string
}) {
	return (
		<Link target="_blank" href={link}>
			<GitHubLogoIcon className={className} />
		</Link>
	)
}

export function WebsiteLink({
	link,
	className,
}: {
	link: string
	className?: string
}) {
	return (
		<Link target="_blank" href={link}>
			<GlobeIcon className={className} />
		</Link>
	)
}

export function StageBadge({ stage }: { stage: ProjectStage }) {
	return (
		<Badge
			className={`${
				stage === ProjectStage.Production ? "bg-lime-400" : "bg-purple-300"
			}
			`}
			variant="default"
		>
			{stage}
		</Badge>
	)
}

export function StatusBadge({ status }: { status: ProjectStatus }) {
	return (
		<Badge
			className={`${
				status === ProjectStatus.Active
					? "bg-cyan-300"
					: status === ProjectStatus.Maintenance
					? "bg-amber-400"
					: "bg-muted-foreground"
			}

			`}
		>
			{status}
		</Badge>
	)
}

export function LinkButton({
	href,
	children,
	className,
	target,
}: {
	href: string
	children: React.ReactNode
	className?: string
	target?: HTMLAttributeAnchorTarget
}) {
	return (
		<Link target={target} className="w-max" href={href}>
			<Button className={className} variant="link">
				{children}
			</Button>
		</Link>
	)
}

export function SentimentalValue({favorite}: {favorite: boolean}) {
	
	return favorite ? (
		<HoverCard>
			<HoverCardTrigger className="text-xl">❤️</HoverCardTrigger>
			<HoverCardContent className="text-xs w-max">Sentimental Value</HoverCardContent>
		</HoverCard>
	) : ""
}
