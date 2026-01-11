import { format } from "@formkit/tempo";

export function formatDate(
  date: Date,
  formatStr: string = "YYYY.MM.DD",
): string {
  return format(date, formatStr);
}

export function formatDateForHTML(date: Date): string {
  return format(date, "YYYY-MM-DD");
}

export function formatDateWithLabel(date: Date, label: string): string {
  return format(date, `${label} YYYY年MM月DD日`);
}
