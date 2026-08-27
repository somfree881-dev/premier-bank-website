"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("Premier Bank page error:", error); }, [error]);
  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#f7fbfc", color: "#002e5e", fontFamily: "Poppins, Arial, sans-serif", textAlign: "center" }}><div><h1>Something went wrong</h1><p>Please try again. If the issue continues, contact Premier Bank support.</p><button type="button" onClick={reset} style={{ padding: "12px 18px", border: 0, borderRadius: 6, background: "#93c748", color: "#173622", fontWeight: 800, cursor: "pointer" }}>Try again</button></div></main>;
}
