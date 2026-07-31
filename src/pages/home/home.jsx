function Home() {
    return (
        <div className="mx-auto max-w-7xl space-y-10 mt-4">
            {/* Hero */}
            <section className="rounded-xl bg-slate-900 p-10 text-center text-white shadow-lg">
                <h1 className="mb-4 text-5xl font-bold">
                    Where's Waldo
                </h1>

                <p className="mx-auto max-w-2xl text-slate-300">
                    Test your memory! Click character only once.
                    Selecting the same character twice ends the game.  
                </p>
            </section>

            {/* content */}
            <section className="grid gap-8 lg:grid-cols-4">
                <aside className="rounded-xl bg-white p-6 shadow">
                    <img
                        src="/profile1.jpeg"
                        alt="Player"
                        className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"    
                    />

                    <h2 className="text-center text-xl font-bold">
                        Wednesday
                    </h2>

                    <p className="mt-1 text-center text-gray-500" >
                        Memory Master
                    </p>

                    <div className="mt-6 space-y-3">
                    <div className="flex justify-between">
                        <span>Games Played</span>
                        <span className="font-semibold">24</span>
                    </div>
                    </div>

                    <div className="flex justify-between">
                        <span>High Score</span>
                        <span className="font-semibold text-green-600">
                            18
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span>Current Streak</span>
                        <span className="font-semibold text-blue-600">
                            7
                        </span>
                    </div>

                    <button className="mt-6 w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700">
                        Start Game
                    </button>
                </aside>

                 <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3 xl:grid-cols-3">
                    {[1, 2, 3].map((card) => (
                        <div
                        key={card}
                        className="overflow-hidden rounded-xl bg-white shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                        <img
                            src={`https://picsum.photos/400/300?random=${card}`}
                            alt="Character"
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-4">
                            <h3 className="text-lg font-semibold">
                            Character {card}
                            </h3>

                            <p className="mt-2 text-sm text-gray-600">
                            Click to view or play with this character.
                            </p>
                        </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Home