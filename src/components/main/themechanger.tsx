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
      onValueChange={(value: "vs" | "customDarkTheme" | "hc-black" ) =>
        setTheme(value)
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="vs">Light</SelectItem>
        <SelectItem value="customDarkTheme">Dark</SelectItem>
        <SelectItem value="hc-black">High Contrast Dark</SelectItem>
      </SelectContent>
    </Select>
  );
}
