import { NavLink } from 'react-router-dom';
// import { useEffec, useState } from 'react';

import beachImage from "./Wheres-Waldo-Beach-Super-High-Resolution-scaled.jpg";
import candyFactoryImage from "./Wheres-Waldo-Candy-Factory-Super-High-Resolution-scaled.jpg";
import skiingImage from "./Wheres-Waldo-Skiing-Super-High-Resolution-scaled.jpg";
import spaceStationImage from "./Wheres-Waldo-Space-Station-Super-High-Resolution-scaled.jpg";

function Home() {

    let characters = [
                        {
                            "id": "char-101",
                            "name": "Fire Mage",
                            "description": "Controls flames and deals heavy area-of-effect damage.",
                            "characterUrl": beachImage
                        },
                        {
                            "id": "char-102",
                            "name": "Shadow Rogue",
                            "description": "Master of stealth, critical strikes, and mobility.",
                            "characterUrl": candyFactoryImage
                        },
                        {
                            "id": "char-103",
                            "name": "Waldo Skiing",
                            "description": "Spot Waldo somewhere on the snowy slopes.",
                            "characterUrl": skiingImage,
                        },
                        {
                            "id": "char-104",
                            "name": "Waldo in Space",
                            "description": "Find Waldo aboard the busy space station.",
                            "characterUrl": spaceStationImage,
                        },
                    ]

// export default function CharacterGrid() {
//     const [characters, setCharacters] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         async function fetchCharacters() {
//         try {
//             const response = await fetch('YOUR_BACKEND_API_URL/characters');
//             if (!response.ok) {
//             throw new Error('Failed to load characters');
//             }
//             const data = await response.json();
//             setCharacters(data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//         }

//         fetchCharacters();
//     }, []);

//     if (loading) {
//         return <div className="text-center py-10">Loading characters...</div>;
//     }

//     if (error) {
//         return <div className="text-center py-10 text-red-500">Error: {error}</div>;
//     }
// }
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

                    {/* <button className="mt-6 w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700">
                        Start Game
                    </button> */}
                </aside>

                 <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3 xl:grid-cols-3">
                    {characters.map((character) => (
                        <NavLink
                        key={character.id}
                        to={`/game/${character.id}`}
                        className="overflow-hidden rounded-xl bg-white shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                        <img
                            src={character.characterUrl}
                            alt={character.name}
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-4">
                            <h3 className="text-lg font-semibold">
                            Character {character.name}
                            </h3>

                            <p className="mt-2 text-sm text-gray-600">
                            {character.description}
                            </p>
                        </div>
                        </NavLink>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Home