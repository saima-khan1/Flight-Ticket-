import React, { useRef, useEffect } from "react";
import JsBarcode from "jsbarcode";

interface CanvasBarcodeProps {
  value: string;
  onDataUrl: (dataUrl: string) => void;
}

export const CanvasBarcode: React.FC<CanvasBarcodeProps> = ({
  value,
  onDataUrl,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      JsBarcode(canvas, value, { format: "CODE128", displayValue: true });
      onDataUrl(canvas.toDataURL("image/png"));
    }
  }, [value, onDataUrl]);

  return <canvas ref={canvasRef} style={{ display: "none" }} />;
};
