export default function Leaderboard() {
  const players = [
    { rank: 1, name: "Alex", score: 95 },
    { rank: 2, name: "Sarah", score: 90 },
    { rank: 3, name: "James", score: 87 },
    { rank: 4, name: "Lincoln", score: 84 },
    { rank: 5, name: "Emma", score: 80 },
    { rank: 6, name: "David", score: 77 },
    { rank: 7, name: "Olivia", score: 74 },
    { rank: 8, name: "Daniel", score: 70 },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <section className="mb-8 rounded-xl bg-slate-900 p-8 text-center text-white shadow-lg">
        <h1 className="text-4xl font-bold">Leaderboard</h1>
        <p className="mt-2 text-slate-300">
          Compete with other players and climb the rankings.
        </p>
      </section>

      {/* Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-lg">
        <table className="w-full">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="px-6 py-4 text-left">Rank</th>
              <th className="px-6 py-4 text-left">Player</th>
              <th className="px-6 py-4 text-right">High Score</th>
            </tr>
          </thead>

          <tbody>
            {players.map((player) => (
              <tr
                key={player.rank}
                className={`border-b last:border-none transition hover:bg-slate-100 ${
                  player.name === "Lincoln"
                    ? "bg-blue-50 font-semibold"
                    : ""
                }`}
              >
                <td className="px-6 py-4">
                  {player.rank === 1 && "🥇"}
                  {player.rank === 2 && "🥈"}
                  {player.rank === 3 && "🥉"}
                  {player.rank > 3 && `#${player.rank}`}
                </td>

                <td className="px-6 py-4">{player.name}</td>

                <td className="px-6 py-4 text-right">
                  {player.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Player Summary */}
      <div className="mt-8 rounded-xl bg-blue-600 p-6 text-white shadow-lg">
        <h2 className="text-xl font-bold">Your Ranking</h2>

        <div className="mt-4 flex justify-between">
          <span>Current Rank</span>
          <span>#4</span>
        </div>

        <div className="mt-2 flex justify-between">
          <span>High Score</span>
          <span>84</span>
        </div>

        <div className="mt-2 flex justify-between">
          <span>Points to Top 3</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
}