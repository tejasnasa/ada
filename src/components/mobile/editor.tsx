"use client";

import { Editor } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { useCompilerStore } from "@/context/compiler-context";
import copy from "@/assets/copy.svg";
import copy2 from "@/assets/copy2.svg";
import EditorSkeleton from "@/components/editor-skeleton";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Sidebar } from "@/components/sidebar";
import codeTypeArray from "@/lib/data";
import { initializeTheme } from "@/lib/theme";
import { DialogDemo } from "@/components/dialog";

export default function EditorMobile() {
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
            title: "Code copied!",
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

  const handleClear = () => {
    setUserCode("");
    toast({
      title: "Editor cleared!",
      duration: 2000,
    });
  };

  return (
    <div className="relative w-full h-dvh">
      <Editor
        className="absolute left-[-10%] h-dvh"
        options={{
          fontSize: font,
          folding: false,
          lineDecorationsWidth: 10,
          glyphMargin: false,
          scrollbar: { verticalScrollbarSize: 3 },
          wordBasedSuggestionsOnlySameLanguage: true,
          minimap: {
            enabled: false,
          },
          wordWrap: "on",
        }}
        width="111%"
        height="100%"
        theme={theme}
        language="cpp"
        defaultLanguage="cpp"
        value={userCode}
        loading={<EditorSkeleton />}
        onChange={(value) => setUserCode(value || "")}
        beforeMount={(monaco) => {
          initializeTheme(monaco);
        }}
      />
      <Sidebar />
      <DialogDemo />
      <Button
        className="absolute bottom-4 right-40 z-10 bg-black hover:bg-[#252525] text-white dark:text-black dark:bg-white dark:hover:bg-[#E2E2E2]"
        onClick={handleClear}
      >
        Clear
      </Button>
      <Button
        size="icon"
        className="absolute bottom-4 right-[110px] z-10 bg-transparent hover:bg-[#252525] bg-black text-white dark:text-black dark:bg-white dark:hover:bg-[#E2E2E2]"
        onClick={copyToClipboard}
      >
        <Image src={copy} alt="Copy" className="dark:hidden block" />
        <Image src={copy2} alt="Copy" className="dark:block hidden" />
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
