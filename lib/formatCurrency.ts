export function formatCurrency(
  amount: number,
  currencyCode: string = "CAD"
): string {
  try {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: currencyCode.toUpperCase()
    }).format(amount)
  } catch (error) {
    console.error(`Invalid currency code ${currencyCode}, ${error}`)
    return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`
  }
}