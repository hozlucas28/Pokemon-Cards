type Parameters = {
	key: string
}

export function getLocalStorage<T>({ key }: Parameters): T {
	const item: string | null = window.localStorage.getItem(key)
	return JSON.parse(item || '{}')
}
