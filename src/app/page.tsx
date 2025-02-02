import EditorBlock from "@/components/editor";
import InputOutput from "@/components/input-output";

export default function CodeCompilerPage() {
  return (
    <main className="p-4 h-dvh flex dark:bg-black bg-white">
      <div className="w-[70%] h-full flex flex-col">
        <EditorBlock />
      </div>
      <div className="w-[30%]">
        <InputOutput />
      </div>
    </main>
  );
}
