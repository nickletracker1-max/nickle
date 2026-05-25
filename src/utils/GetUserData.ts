export interface UserData {
  id: string | number;
  email: string;
  name: string;
  username: string;
  access_token: string;
}

/**
 * Reads the `userData` cookie and returns the parsed user object,
 * or null if not found / running server-side.
 */
export const GetUserData = (): UserData | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const cookies = document.cookie.split("; ");
  const userDataCookie = cookies.find((c) => c.startsWith("userData="));

  if (!userDataCookie) return null;

  try {
    const raw = userDataCookie.split("=")[1];
    return JSON.parse(decodeURIComponent(raw)) as UserData;
  } catch (error) {
    console.error("Error parsing userData cookie:", error);
    return null;
  }
};

/**
 * Serialises `data` into the `userData` cookie.
 */
export const SetUserData = (data: UserData): void => {
  document.cookie = `userData=${encodeURIComponent(JSON.stringify(data))}; path=/;`;
};
