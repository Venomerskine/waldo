import { Link, useParams } from "react-router-dom";
import beachImage from "../home/Wheres-Waldo-Beach-Super-High-Resolution-scaled.jpg";
import candyFactoryImage from "../home/Wheres-Waldo-Candy-Factory-Super-High-Resolution-scaled.jpg";
import skiingImage from "../home/Wheres-Waldo-Skiing-Super-High-Resolution-scaled.jpg";
import spaceStationImage from "../home/Wheres-Waldo-Space-Station-Super-High-Resolution-scaled.jpg";
import CharacterPopup from "../../components/game/characters";
import { useState } from "react";

const games = {
  "char-101": { name: "Waldo at the Beach", image: beachImage },
  "char-102": { name: "Waldo at the Candy Factory", image: candyFactoryImage },
  "char-103": { name: "Waldo Skiing", image: skiingImage },
  "char-104": { name: "Waldo in Space", image: spaceStationImage },
};

const characters = [
  { id: "waldo", name: "Waldo" },
  { id: "wenda", name: "Wenda" },
  { id: "wizard", name: "Wizard Whitebeard" },
  { id: "odlaw", name: "Odlaw" },
];

function Game() {

  const { characterId } = useParams();
  const game = games[characterId];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState(null);

    function handleImageClick(event) {

        const image = event.currentTarget
        const bounds = image.getBoundingClientRect();
        
        const xPercent = ((event.clientX - bounds.left) / bounds.width) * 100;
        const yPercent = ((event.clientY - bounds.top) / bounds.height) * 100;

        setClickPosition({
            x: Number(xPercent.toFixed(2)),
            y: Number(yPercent.toFixed(2)),
        })

        setIsPopupOpen(true)

        console.log("Clicked position:", { xPercent, yPercent});
    }


    function handleCharacterSelect(selectedCharacter) {
        const selectionData = {
            gameId: characterId,
            character: selectedCharacter,
            clickedPosition: clickPosition,
        };

        console.log(selectionData)
// send to backend
// await axios.post

        setIsPopupOpen(false);
        setClickPosition(null)

    }

  if (!game) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Game not found</h1>
        <Link to="/" className="mt-5 inline-block text-blue-600 hover:underline">
          Back to game selection
        </Link>
      </section>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Find Waldo
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 sm:text-4xl">
            {game.name}
          </h1>
        </div>

        <Link
          to="/"
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Exit game
        </Link>
      </div>

      <section className="rounded-2xl bg-slate-900 p-3 shadow-xl sm:p-1">
        <div className="relative mx-auto flex min-h-[50vh] items-center justify-center overflow-hidden rounded-xl bg-slate-200">
          <img
            src={game.image}
            alt={game.name}
            onClick={handleImageClick}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />

          <CharacterPopup
            isOpen={isPopupOpen}
            characters={characters}
            onClose={() => setIsPopupOpen(false)}
            onSelect={handleCharacterSelect}
        />
        </div>
      </section>

      <p className="mt-4 text-center text-sm text-slate-600">
        Look closely, then click the character when you find them.
      </p>
    </main>
  );
}

export default Game;
