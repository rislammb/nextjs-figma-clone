"use client";

import { useEffect, useRef } from "react";
import * as fabric from "fabric";
import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import {
  handleCanvasMouseDown,
  handleResize,
  initializeFabric,
} from "@/lib/canvas";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const selectedShapeRef = useRef<string | null>("rectangle");
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });

    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        selectedShapeRef,
        isDrawing,
        shapeRef,
      });
    });

    window.addEventListener("resize", () => {
      handleResize({ canvas });
    });

    return () => {
      if (fabricRef.current) {
        fabricRef.current.dispose();
        fabricRef.current = null;
      }
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />

      <main className="flex h-full flex-row">
        <LeftSidebar />
        <Live canvasRef={canvasRef} />
        <RightSidebar />
      </main>
    </div>
  );
}
