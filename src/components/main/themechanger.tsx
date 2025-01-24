import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCompilerStore } from "@/context/compiler-context";

export default function ThemeChanger() {
  const { theme, setTheme } = useCompilerStore();

  return (
    <Select
      value={theme}
      onValueChange={(value: "vs" | "vs-dark" | "hc-black" | "hc-light") =>
        setTheme(value)
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="vs">Light</SelectItem>
        <SelectItem value="vs-dark">Dark</SelectItem>
        <SelectItem value="hc-black">High Contrast Black</SelectItem>
        <SelectItem value="hc-light">High Contrast Light</SelectItem>
      </SelectContent>
    </Select>
  );
}
