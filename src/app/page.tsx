import EditorDesktop from "@/components/desktop/editor";
import InputOutputDesktop from "@/components/desktop/input-output";
import EditorMobile from "@/components/mobile/editor";
import InputOutputMobile from "@/components/mobile/input-output";
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
            <InputOutputMobile />
          </div>
        </main>
      )}
      {isMobile && (
        <main className="p-2 flex-col dark:bg-[#0A0A0A] bg-white">
          <EditorMobile />
          <InputOutputDesktop />
        </main>
      )}
    </>
  );
}
