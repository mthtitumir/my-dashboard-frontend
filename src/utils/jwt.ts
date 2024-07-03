import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string | undefined | null) => {
    if (!token) return undefined;
    return jwtDecode(token);
};