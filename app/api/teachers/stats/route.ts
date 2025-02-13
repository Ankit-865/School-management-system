import { NextResponse } from 'next/server';

export async function GET() {
  // Temporary mock stats
  const stats = {
    totalTeachers: 10,
    activeTeachers: 8,
    averageExperience: 5,
    totalClassesPerWeek: 120
  };

  return NextResponse.json(stats);
} 