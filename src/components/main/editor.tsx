"use client";

import { Editor } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { useCompilerStore } from "@/context/compiler-context";
import { Sidebar } from "@/components/main/sidebar";
import EditorSkeleton from "./editor-skeleton";

export default function EditorBlock() {
  const { userCode, setUserCode, compileCode } = useCompilerStore();

  return (
    <div className="relative w-full h-full">
      <Editor
        options={{ fontSize: 20 }}
        width="100%"
        height="100%"
        theme="vs-dark"
        language="cpp"
        defaultLanguage="cpp"
        value={userCode}
        loading={<EditorSkeleton />}
        onChange={(value) => setUserCode(value || "")}
      />
      <Sidebar />
      <Button className="absolute bottom-4 right-6 z-10" onClick={compileCode}>
        Submit
      </Button>
    </div>
  );
}
