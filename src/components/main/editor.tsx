"use client";

import { Editor } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { useCompilerStore } from "@/context/compiler-context";
import copy from "@/assets/copy.svg";
import EditorSkeleton from "./editor-skeleton";
import { DialogDemo } from "@/components/main/dialog";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export default function EditorBlock() {
  const { userCode, setUserCode, compileCode } = useCompilerStore();
  const { toast } = useToast();

  const copyToClipboard = () => {
    if (navigator.clipboard && userCode) {
      navigator.clipboard
        .writeText(userCode)
        .then(() => {
          toast({
            title: "Code copied",
            duration: 2000,
          });
        })
        .catch(() => {
          alert("Failed to copy code. Please try again.");
        });
    } else {
      alert("Nothing to copy!");
    }
  };

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
      <DialogDemo />

      <Button
        className="absolute bottom-4 right-40 z-10 bg-black hover:bg-gray-900 text-white"
        onClick={() => setUserCode("")}
      >
        Clear
      </Button>
      <Button
        size="icon"
        className="absolute bottom-4 right-28 z-10 bg-transparent text-white"
        onClick={copyToClipboard}
      >
        <Image src={copy} alt="Copy" />
      </Button>
      <Button className="absolute bottom-4 right-6 z-10" onClick={compileCode}>
        Submit
      </Button>
    </div>
  );
}
