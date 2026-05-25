import { formatDistanceToNow } from "date-fns";

class GeneralHelpers {
  static getTimeAgo(date: string | Date): string {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  }
}

export default GeneralHelpers;
