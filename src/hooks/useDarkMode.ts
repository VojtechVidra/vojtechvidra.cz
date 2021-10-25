import useDarkModeOriginal from "use-dark-mode";

export const useDarkMode = () => useDarkModeOriginal(false, {element: typeof window !== "undefined" && document.querySelector("html")});