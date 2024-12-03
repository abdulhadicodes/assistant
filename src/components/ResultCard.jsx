export default function ResultCard({ data }) {
  if (!data) return null;

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Performance Summary</h2>
      <p className="mt-4">{data.summary}</p>

      <h3 className="mt-6 text-xl font-semibold">Weak Topics</h3>
      <ul className="mt-2 list-disc list-inside">
        {data.weaknesses.map((weak, index) => (
          <li key={index}>
            <strong>{weak.topic}</strong> in <em>{weak.subject}</em>
          </li>
        ))}
      </ul>

      <h3 className="mt-6 text-xl font-semibold">Recommendations</h3>
      <ul className="mt-2 space-y-4">
        {data.recommendations.map((rec, index) => (
          <li key={index}>
            <p>
              <strong>{rec.topic}</strong> ({rec.subject}):{" "}
              <a
                href={rec.video}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Video Resource
              </a>{" "}
              |{" "}
              <a
                href={rec.document}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Document
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}