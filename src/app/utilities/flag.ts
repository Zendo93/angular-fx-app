export function getFlag(currency: string): string {
    return `assets/flags/${currency.slice(0, currency.length - 1)}.png`
}
