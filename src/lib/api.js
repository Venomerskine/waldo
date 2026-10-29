const API_URL = import.meta.env.VITE_API_URL;

export async function getScenes() {
    const response = await fetch(`${API_URL}/api/games`);

    if (!response.ok) {
        throw new Error(`Api request failed: ${response.status}`);
    }
    return response.json()
}

export async function getSceneById(sceneId) {
    console.log("Scene id in api get scene :", sceneId)

    const response = await fetch(`${API_URL}/api/games/scenes/${sceneId}`);
    console.log("get scene response :", response)

    if (!response.ok) {
        throw new Error(`Api get scene by id failed: ${response.status}`)
    }
    return response.json()
}

export const verifyGuess = async (sceneId,selectionData) => {
    sceneId = sceneId.characterId
    console.log("Scene id in POST", sceneId)

    const response = await fetch(
        `${API_URL}/api/games/scenes/${sceneId}/verify-guess`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(selectionData),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to verify guess");
    }
    return data;
}

export async function startGame(sceneId) {

    const response = await fetch(`${API_URL}/api/games/scenes/${sceneId}/startGame`,
        {
            method: "POST",
        }
    )

    if (!response.ok) {
        throw new Error(`Failed to start game: ${response.status}`);
    }
    const data = await response.json()

    return data
}