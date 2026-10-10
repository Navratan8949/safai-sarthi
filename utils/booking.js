export function generateBookingReference() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const random = String(Math.floor(1000 + Math.random() * 9000));
  return `SS-${y}${m}${d}-${random}`;
}

export function generateCorporateReference() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const random = String(Math.floor(1000 + Math.random() * 9000));
  return `SS-CORP-${y}${m}${d}-${random}`;
}
