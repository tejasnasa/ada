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
import Link from "next/link";
import arrow from "@/assets/arrow2.svg";

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
    <div className="relative w-full h-dvh overflow-hidden">
      <Editor
        className="absolute h-dvh"
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
        width="110%"
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
      <Sidebar device="mobile" />
      <DialogDemo device="mobile" />
      <Button
        className="absolute left-2 bottom-4 bg-black hover:bg-[#252525] text-white dark:text-black dark:bg-white dark:hover:bg-[#E2E2E2]"
        onClick={handleClear}
      >
        Clear
      </Button>
      <Link
        href={"#inputoutput"}
        className="absolute bottom-6 left-1/2 text-white"
      >
        <Image src={arrow} alt="" />
      </Link>
      <div className="absolute bottom-4 right-1 z-10 flex space-x-2">
        <Button
          size="icon"
          className="bg-transparent hover:bg-[#252525] bg-black text-white dark:text-black dark:bg-white dark:hover:bg-[#E2E2E2]"
          onClick={copyToClipboard}
        >
          <Image src={copy} alt="Copy" className="dark:hidden block" />
          <Image src={copy2} alt="Copy" className="dark:block hidden" />
        </Button>
        <Button
          className="bg-black hover:bg-[#252525] text-white dark:text-black dark:bg-white dark:hover:bg-[#E2E2E2] px-3"
          onClick={() => compileCode(codingType)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
