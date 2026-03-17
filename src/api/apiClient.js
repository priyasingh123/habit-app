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
      const errorData = await response.json();
      throw new Error(errorData.message || "Request failed");
    }
    return response.json();
  } catch (e) {
    console.error("API request error:", e);
    throw e;
  }
}
