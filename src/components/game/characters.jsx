export default function CharacterPopup({isOpen, characters, onSelect, onClose}) {

    if (!isOpen) return null;

    return (
        <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
        >

        <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="character-popup-title"
            className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
        >

            <div className="mb-5 flex items-center justify-between">
                <h2 id="character-popup-title" className="text-xl font-bold text-slate-900">
                    Who did you find
                </h2>

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close cahracter selector"
                    className="rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                >
                    X
                </button>
            </div>

        <ul className="space-y-2">
            { characters.map((character) => (
                <li key={character.id}>
                    <button
                        type="button"
                        onClick={() => onSelect(character)}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-left font-medium text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700"
                    >
                        {character.name}
                    </button>
                </li>
            ))}
        </ul>
        </section>
        </div>
    )
}