import { formatDistanceToNow } from "date-fns";
export function formatDateFromNow(date: string) {
  const result = formatDistanceToNow(date, { addSuffix: true });
  return result;
}
