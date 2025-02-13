import { NextResponse } from 'next/server';

export async function GET() {
  // Temporary mock data for notices
  const notices = [
    {
      id: "1",
      title: "School Holiday Announcement",
      content: "School will remain closed for summer vacation from June 1st to June 30th",
      date: "2024-05-25",
      category: "Holiday",
      priority: "high"
    },
    {
      id: "2",
      title: "Parent-Teacher Meeting",
      content: "PTA meeting scheduled for all classes next week",
      date: "2024-05-28",
      category: "Meeting",
      priority: "medium"
    }
    // Add more mock notices as needed
  ];

  return NextResponse.json(notices);
} 