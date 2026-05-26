import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCompilerStore } from "@/context/compiler-context";

export default function LanguageChanger() {
  const { language, setLanguage, theme } = useCompilerStore();

  return (
    <Select
      value={language}
      onValueChange={(value: "cpp" | "python") => setLanguage(value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent
        className={`flex flex-col justify-between ${
          theme !== "vs" && theme !== "kuroir" && theme !== "solarLight"
            ? "dark"
            : undefined
        }`}
      >
        <SelectItem value="cpp">C++</SelectItem>
        <SelectItem value="python">Python</SelectItem>
      </SelectContent>
    </Select>
  );
}
