let cachedCsrfToken: string | null = null;

export const getCSRFToken = () => {
  return cachedCsrfToken;
};

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const apiClient = async (
  endpoint: string,
  options: RequestInit = {},
) => {
  const url = `${BASE_URL}${endpoint}`;

  const headers = new Headers(options.headers || {});

  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  // Set CSRF token for mutating requests
  if (
    options.method &&
    ["POST", "PUT", "PATCH", "DELETE"].includes(options.method.toUpperCase())
  ) {
    const csrfToken = getCSRFToken();
    if (csrfToken) {
      headers.set("X-CSRFToken", csrfToken);
    }
  }

  // For django-allauth headless, indicate browser client type
  headers.set("X-Session-Token", "browser");

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: "include",
  });

  const csrfFromHeader = response.headers.get("x-csrftoken");
  if (csrfFromHeader) {
    cachedCsrfToken = csrfFromHeader;
  }

  return response;
};
