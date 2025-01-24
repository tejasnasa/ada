"use client";

import { Editor } from "@monaco-editor/react";
import { Button } from "../ui/button";
import EditorSkeleton from "./editor-skeleton";
import { Sidebar } from "./sidebar";

export default function EditorBlock() {
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
        defaultValue="# Entergg your code here"
      />
      <Sidebar/>
      <Button className="absolute bottom-4 right-6 z-2">Submit</Button>
    </section>
  );
}
