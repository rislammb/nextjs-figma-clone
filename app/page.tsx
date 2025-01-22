"use client";

import Live from "@/components/Live";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <section className="flex h-full flex-row">
        <Live />
      </section>
    </div>
  );
}
