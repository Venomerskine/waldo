const API_URL = import.meta.env.VITE_API_URL;

export async function getScenes() {
    const response = await fetch(`${API_URL}/api/games`);

    if (!response.ok) {
        throw new Error(`Api request failed: ${response.status}`);
    }
    return response.json()
}

export async function getSceneById(sceneId) {
    // console.log("Scene id in api get scene :", sceneId)

    const response = await fetch(`${API_URL}/api/games/scenes/${sceneId}`);
    // console.log("get scene response :", response)

    if (!response.ok) {
        throw new Error(`Api  response failed: ${response.status}`)
    }
    return response.json()
}