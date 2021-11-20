export default function checkCardType(cardNumber: string): string {
  if (cardNumber.startsWith("4")) {
    // if (cardNumber.length === 13 || cardNumber.length === 16) {
    return "visa";
    // }
  }
  if (cardNumber.startsWith("5")) {
    // if (cardNumber.length === 16) {
    return "master";
    // }
  }
  if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
    // if (cardNumber.length === 15) {
    return "amex";
    // }
  }
  return "unknown";
}
