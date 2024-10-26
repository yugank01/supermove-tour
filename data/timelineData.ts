// data/timelineData.ts

export interface TimelineEvent {
  title: string;
  description: string;
  date: string;
  imageUrl: string; // New field for the image
}

export const timelineData: TimelineEvent[] = [
  {
    title: "City Wide Workshops",
    description: "This is the first event on the timeline.",
    date: "July 2024 - November 2024",
    imageUrl: "/colleges.jpeg", // Example image path
  },
  {
    title: "College/University Workshops",
    description: "This is the first event on the timeline.",
    date: "July(Mid) 2024 - November(Mid) 2024",
    imageUrl: "/colleges.jpeg",
  },
  {
    title: "Online Workshops",
    description: "This is the third event on the timeline.",
    date: "August 2024 - November 2024",
    imageUrl: "/online.png",
  },
  {
    title: "Day - dAppathon",
    description: "This is the fourth event on the timeline.",
    date: "August(Mid) 2024 - December 2024",
    imageUrl: "/colleges.jpeg",
  },
  {
    title: "SuperMove Builder's Meet",
    description: "This is the fourth event on the timeline.",
    date: "August(Mid) 2024 - December(Mid) 2024",
    imageUrl: "/colleges.jpeg",
  },
  {
    title: "dAppathon",
    description: "This is the fourth event on the timeline.",
    date: "August(Mid) 2024 - November(Mid) 2024",
    imageUrl: "/colleges.jpeg",
  },
  // Add more events as needed...
];
