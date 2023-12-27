import type { ReactNode } from 'react'

export interface Link {
	to: string
	title: string
	style: string
	text: string
	children?: ReactNode
}
