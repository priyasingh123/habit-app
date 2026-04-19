const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

interface ApiError {
  message?: string;
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });
    if (!response.ok) {
      const errorData: ApiError = await response.json();
      throw new Error(errorData.message || "Request failed");
    }
    return response.json();
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("API request error:", e.message);
    } else {
      console.error("API request error:", e);
    }
    throw e;
  }
}
