// 'use client'
// import { useState } from "react";
// import ResultCard from "../components/ResultCard.jsx";

// export default function Home() {
//   const [result, setResult] = useState(null);

//   const handleAnalyze = async () => {
//     const studentData = {
//       name: "Abdul Hadi",
//       rollNo: "1398",
//       class: "11",
//       group: "science",
//       subjects: [
//         {
//           name: "Computer",
//           mcq: { obtained: "20", total: "20" },
//           shortQuestions: [
//             { obtainedMarks: "3", totalMarks: "5", topic: "Network" },
//             { obtainedMarks: "4", totalMarks: "5", topic: "Architecture" },
//             { obtainedMarks: "4.5", totalMarks: "5", topic: "Topology" },
//             { obtainedMarks: "4", totalMarks: "5", topic: "Input Devices" },
//             { obtainedMarks: "4", totalMarks: "5", topic: "Algorithms" },
//           ],
//           longQuestions: [
//             { obtainedMarks: "8", totalMarks: "10", topic: "Security" },
//             { obtainedMarks: "9", totalMarks: "10", topic: "OSI Model" },
//             { obtainedMarks: "9.5", totalMarks: "10", topic: "Storage Devices" },
//           ],
//         },
//         // Add other subjects...
//       ],
//     };

//     const response = await fetch("/api/gemini", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ studentData }),
//     });

//     const data = await response.json();
//     setResult(data);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold">Student Performance Analyzer</h1>
//       <button
//         onClick={handleAnalyze}
//         className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
//       >
//         Analyze Performance
//       </button>
//       <ResultCard data={result} />
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleAnalyze = async () => {
  const studentData = {
      name: "Abdul Hadi",
      rollNo: "1398",
      class: "11",
      group: "science",
      subjects: [
        {
          name: "Computer",
          mcq: { obtained: "20", total: "20" },
          shortQuestions: [
            { obtainedMarks: "3", totalMarks: "5", topic: "Network" },
            { obtainedMarks: "4", totalMarks: "5", topic: "Architecture" },
            { obtainedMarks: "4.5", totalMarks: "5", topic: "Topology" },
            { obtainedMarks: "4", totalMarks: "5", topic: "Input Devices" },
            { obtainedMarks: "4", totalMarks: "5", topic: "Algorithms" },
          ],
          longQuestions: [
            { obtainedMarks: "8", totalMarks: "10", topic: "Security" },
            { obtainedMarks: "9", totalMarks: "10", topic: "OSI Model" },
            { obtainedMarks: "9.5", totalMarks: "10", topic: "Storage Devices" },
          ],
        },
        
      

    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentData }),
    }),

    const data = await response.json(),
    router.push("/performance", { state: { data } }),
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Student Performance Analyzer</h1>
      <button
        onClick={handleAnalyze}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
      >
        Analyze Performance
      </button>
    </main>
  );
}}