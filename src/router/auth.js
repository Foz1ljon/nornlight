// src/middleware/auth.js
export function isAuthenticated() {
  return !!localStorage.getItem("token");
}
