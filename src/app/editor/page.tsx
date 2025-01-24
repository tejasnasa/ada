import EditorBlock from "@/components/main/editor";
import InputOutput from "@/components/main/input-output";
import { Suspense } from "react";

export default function page() {
  return (
    <main className="p-4 h-dvh flex">
      <EditorBlock />
      <InputOutput />
    </main>
  );
}
