import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}"], theme: { extend: { colors: { navy: "#002E5E", lime: "#93C748", mist: "#F4F7FA" }, boxShadow: { lift: "0 18px 40px rgba(0,46,94,.11)" } } }, plugins: [] } satisfies Config;
