export default function CharacterPopup({isOpen, characters, onSelect, onClose, clickPosition}) {

    if (!isOpen || !clickPosition) return null;

    const opensLeft = clickPosition.x > 50;
    const opensAbove = clickPosition.y > 50;

    const popupPositionStyle = {
        position: "absolute",

        top: `${clickPosition.y}%`,
        left: `${clickPosition.x}%`,

        transform: `
            translate(
                ${opensLeft ? "-100%" : "0"},
                ${opensAbove ? "-100%" : "0"}
            )
        `,
    };

    return (
        <div
        // className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        className="absolute z-50  p-2"
        style={popupPositionStyle}
        onClick={onClose}
        >

        <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="character-popup-title"
            className="w-full max-w-sm rounded-xl bg-white p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
        >

            <div className="mb-1 flex items-center justify-between">
                <h2 id="character-popup-title" className="text-xl font-bold text-slate-900">
                    Who did you find?
                </h2>

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close character selector"
                    className="rounded p-1 text-red-700 hover:bg-slate-100 hover:text-red-500"
                >
                    x
                </button>
            </div>

        <ul className="space-y-1">
            { characters.map((character) => (
                <li key={character.id}>
                    <button
                        type="button"
                        onClick={() => onSelect(character)}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-left font-medium text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700"
                    >
                        {character.character.name}
                    </button>
                </li>
            ))}
        </ul>
        </section>
        </div>
    )
}