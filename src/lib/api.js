const API_URL = import.meta.env.VITE_API_URL;

export async function getScenes() {
    const response = await fetch(`${API_URL}/api/games`);

    if (!response.ok) {
        throw new Error(`Api request failed: ${response.status}`);
    }
    return response.json()
}