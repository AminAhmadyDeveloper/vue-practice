import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  theme: {
    extend: {},
  },
  plugins: [],
  shortcuts: {
    button: "bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600",
    body: "flex flex-col h-full h-screen items-center justify-center bg-[#050505] space-y-4",
    "bouncing-header":
      "animate-bounce animate-duration-[0.8s] animate-loop text-4xl text-white",
  },
});
