export type Project = {
	id: string
	name: string
	description?: string
	stage: ProjectStage
	status: ProjectStatus
	favorite: boolean
	tags: string[]
	links: Links
  image?: string
}

export enum ProjectStatus {
	Active = "active",
	Maintenance = "maintenance",
	Inactive = "inactive",
}

export enum ProjectStage {
	Development = "development",
	Production = "production",
}

export type Links = {
	github?: string
	website?: string
	additionalLinks?: {
		link: string
		title?: string
	}[]
}
