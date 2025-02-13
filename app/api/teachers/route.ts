import { NextResponse } from 'next/server';

export async function GET() {
  // Temporary mock data
  const teachers = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      subject: "Mathematics",
      yearsOfExperience: 5,
      classesPerWeek: 15,
      department: "Science",
      status: "active"
    },
    // Add more mock teachers as needed
  ];

  return NextResponse.json(teachers);
} 