declare global {
  interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
  }
  interface UsagePerDay {
    date: string;
    wordCount: number;
    _id: string;
  }
  interface Subscription {
    planName: string;
    planCredits: number;
    creditsRemains: number;
    wordsGenerated: number;
    imagesGenerated: number;
    startDate: string;
    endDate: string;
    planExpiry: string;
    wordUsagePerDay: UsagePerDay[];
  }
}
export {};
