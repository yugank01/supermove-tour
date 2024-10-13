// data/timelineData.ts

export interface TimelineEvent {
  title: string;
  description: string;
  date: string;
  imageUrl: string; // New field for the image
}

export const timelineData: TimelineEvent[] = [
  {
    title: "Event One",
    description: "This is the first event on the timeline.",
    date: "Jan 2024",
    imageUrl: "/img/event1.jpg", // Example image path
  },
  {
    title: "Event Two",
    description: "This is the second event on the timeline.",
    date: "Feb 2024",
    imageUrl: "/img/event2.jpg",
  },
  {
    title: "Event Three",
    description: "This is the third event on the timeline.",
    date: "March 2024",
    imageUrl: "/img/event3.jpg",
  },
  {
    title: "Event Four",
    description: "This is the fourth event on the timeline.",
    date: "April 2024",
    imageUrl: "/img/event4.jpg",
  },
  // Add more events as needed...
];
