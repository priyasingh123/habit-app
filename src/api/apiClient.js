export async function apiRequest(endpoint, options = {}) {
  const BASE_URL = "http://localhost:5000";

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return response.json();
  } catch (e) {
    console.error("API request error:", e);
    throw e;
  }
}
