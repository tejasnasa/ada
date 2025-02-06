import EditorDesktop from "@/components/desktop/editor";
import InputOutput from "@/components/input-output";
import EditorMobile from "@/components/mobile/editor";
import { headers } from "next/headers";

export default async function CodeCompilerPage() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /mobile/i.test(userAgent);

  return (
    <>
      {!isMobile && (
        <main className="p-4 h-dvh flex dark:bg-black bg-white">
          <div className="w-[70%] h-full flex flex-col">
            <EditorDesktop />
          </div>
          <div className="w-[30%]">
            <InputOutput />
          </div>
        </main>
      )}
      {isMobile && (
        <main className="p-2 flex-col dark:bg-[#0A0A0A] bg-white">
          <div className="w-[100%] h-dvh flex flex-col">
            <EditorMobile />
          </div>
          <div className="w-[30%]">
            <InputOutput />
          </div>
        </main>
      )}
    </>
  );
}
