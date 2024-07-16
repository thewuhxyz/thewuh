import { Project, ProjectStage, ProjectStatus } from "./types"

export const projects: Project[] = [
	{
		id: "create-anchor-dapp",
		name: "Create Anchor dApp",
		description:
			"CLI monorepo template generator for building Solana dApps with the Anchor Framework",
		favorite: true,
		links: {
			github: "https://github.com/thewuhxyz/create-anchor-dapp",
			additionalLinks: [
				{
					link: "https://www.npmjs.com/package/create-anchor-dapp",
					title: "npm",
				},
			],
		},
		stage: ProjectStage.Production,
		status: ProjectStatus.Active,
		tags: ["npm", "anchor", "solana", "cli", "react", "nextjs"],
		imageUrl: "",
	},
	{
		id: "valet",
		name: "Valet",
		description: "A social login in-built wallet for solana dapps.",
		favorite: true,
		links: {
			github: "https://github.com/thewuhxyz/valet",
			website: "https://valetw.xyz",
			additionalLinks: [
				{ link: "https://app.valetw.xyz", title: "Valet App" },
				{ link: "https://portal.valetw.xyz", title: "Valet Portal" },
				{ link: "https://demo.valetw.xyz", title: "Valet Demo" },
			],
		},
		stage: ProjectStage.Development,
		status: ProjectStatus.Inactive,
		tags: ["sveltekit", "anchor", "solana", "express"],
		imageUrl: "",
	},
	{
		id: "merstab",
		name: "Merstab",
		description: "Liquidity Protocol for CLOB DEX.",
		favorite: true,
		links: {
			github: "https://github.com/merstab",
		},
		stage: ProjectStage.Development,
		status: ProjectStatus.Inactive,
		tags: ["defi", "solana", "ws"],
		imageUrl: "",
	},
	{
		id: "zeta-liqiudeo",
		name: "Zeta Liquideo",
		description: "Real-time WS market data API for Zeta Markets. NPM package",
		favorite: false,
		links: {
			github: "https://github.com/merstab/zeta-liquideo",
			additionalLinks: [
				{ link: "https://npmjs.com/package/zeta-liquideo", title: "npm" },
			],
		},
		stage: ProjectStage.Production,
		status: ProjectStatus.Inactive,
		tags: ["zeta", "solana", "ws", "defi"],
		imageUrl: "",
	},
	{
		id: "01-flask",
		name: "01 flask",
		description: "Real-time WS market data API for 01 exchange. NPM package",
		favorite: false,
		links: {
			github: "https://github.com/merstab/01-flask",
			additionalLinks: [
				{ link: "https://npmjs.com/package/01-flask", title: "npm" },
			],
		},
		stage: ProjectStage.Production,
		status: ProjectStatus.Inactive,
		tags: [],
		imageUrl: "",
	},
]
