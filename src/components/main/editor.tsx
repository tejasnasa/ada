"use client";

import { Editor } from "@monaco-editor/react";
import { Button } from "../ui/button";
import EditorSkeleton from "./editor-skeleton";
import { Sidebar } from "./sidebar";

interface EditorBlockProps {
  compile: () => void;
  setUserCode: any;
}

export default function EditorBlock({
  compile,
  setUserCode,
}: EditorBlockProps) {
  return (
    <section className="w-[70%] h-[100%] flex flex-col items-end relative ">
      <Editor
        options={{ fontSize: 20 }}
        width="100%"
        loading={<EditorSkeleton />}
        className="bg-red"
        height="100%"
        theme="vs-dark"
        language="cpp"
        defaultLanguage="cpp"
        defaultValue="# Enter your code here"
        onChange={(value) => {
          setUserCode(value);
        }}
      />
      <Sidebar />
      <Button
        className="absolute bottom-4 right-6 z-2"
        onClick={() => compile()}
      >
        Submit
      </Button>
    </section>
  );
}
