export function setLocalStorage<T>({ key, value }: { key: string; value: T }): void {
	const stringifyValue: string = JSON.stringify(value)
	window.localStorage.setItem(key, stringifyValue)
}
