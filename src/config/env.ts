const publicApiUrl = import.meta.env.VITE_API_URL ?? import.meta.env["NEXT_PUBLIC_API_URL"] ?? "";
const mockFlag = import.meta.env.VITE_USE_MOCK_DATA ?? import.meta.env["NEXT_PUBLIC_USE_MOCK_DATA"];

export const API_BASE_URL = publicApiUrl.replace(/\/$/, "");
export const USE_MOCK_DATA = mockFlag === undefined ? true : mockFlag !== "false";
