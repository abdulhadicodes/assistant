import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const { studentData } = await req.json();

  if (!studentData) {
    return NextResponse.json({ error: "Student data is required." }, { status: 400 });
  }

  const { name, class: studentClass, subjects } = studentData;

  const prompt = `
    Analyze the student's performance: Name: ${name}, Class: ${studentClass}.
    - Provide a detailed summary of overall performance.
    - Identify topic-wise weaknesses.
    - Suggest actionable recommendations for improvement for each weak topic.
    - Based on the analysis, suggest potential career paths considering strengths and interests.
    Here's the data: ${JSON.stringify(subjects)}
  `;

  try {
    const response = await axios.post(
      "https://gemini.google.dev/v1/your_endpoint",
      { prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error calling Gemini API:", error.message);
    return NextResponse.json({ error: "Failed to process the request." }, { status: 500 });
  }
}