"use client";

import { Editor } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { useCompilerStore } from "@/context/compiler-context";
import copy from "@/assets/copy.svg";
import EditorSkeleton from "./editor-skeleton";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Sidebar } from "./sidebar";
import codeTypeArray from "@/lib/data";
import { customDarkTheme } from "@/lib/theme";

export default function EditorBlock() {
  const { userCode, setUserCode, compileCode, theme, font, codingType } =
    useCompilerStore();
  const { toast } = useToast();

  const copyToClipboard = () => {
    if (navigator.clipboard && userCode) {
      navigator.clipboard
        .writeText(
          codeTypeArray[codingType].preCode +
            userCode +
            codeTypeArray[codingType].postCode
        )
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
      toast({
        title: "Nothing to copy!",
        duration: 2000,
      });
    }
  };

  return (
    <div className="relative w-full h-full">
      <Editor
        options={{ fontSize: font }}
        width="100%"
        height="100%"
        theme={theme}
        language="cpp"
        defaultLanguage="cpp"
        value={codeTypeArray[codingType].defaultCode}
        loading={<EditorSkeleton />}
        onChange={(value) => setUserCode(value || "")}
        beforeMount={(monaco) => {
          monaco.editor.defineTheme("customDarkTheme", customDarkTheme);
        }}
      />
      <Sidebar />

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
      <Button
        className="absolute bottom-4 right-6 z-10"
        onClick={() => compileCode(codingType)}
      >
        Submit
      </Button>
    </div>
  );
}
