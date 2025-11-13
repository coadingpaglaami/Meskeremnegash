// // utils/auth.ts
// export const setUserRole = (role: "admin" | "carrier" | "sender" | string) => {
//   localStorage.setItem("userRole", role);
// };

// export const getUserRole = (): "admin" | "carrier" | "sender" | null => {
//   return (localStorage.getItem("userRole") as "admin" | "carrier" | "sender") || null;
// };

// export const removeUserRole = () => {
//   localStorage.removeItem("userRole");
// };

// utils/auth.ts
export const setUserRole = (role: "admin" | "carrier" | "sender" | string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("userRole", role);
  }
};

export const getUserRole = (): "admin" | "carrier" | "sender" | null => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("userRole") as "admin" | "carrier" | "sender") || null;
  }
  return null;
};

export const removeUserRole = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("userRole");
  }
};