"use client";
import { useCompilerStore } from "@/context/compiler-context";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useCompilerStore();
  return (
    <div
      className={
        theme !== "vs" && theme !== "kuroir" && theme !== "solarLight"
          ? "dark"
          : undefined
      }
    >
      {children}
    </div>
  );
}
