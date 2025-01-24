import EditorBlock from "@/components/main/editor";
import InputOutput from "@/components/main/input-output";

export default function CodeCompilerPage() {
  return (
    <main className="p-4 h-dvh flex">
      <div className="w-[70%] h-full flex flex-col">
        <EditorBlock />
      </div>
      <div className="w-[30%]">
        <InputOutput />
      </div>
    </main>
  );
}
