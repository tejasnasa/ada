import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCompilerStore } from "@/context/compiler-context";

type ThemeType =
  | "vs"
  | "customDarkTheme"
  | "hc-black"
  | "monokai"
  | "dracula"
  | "cobalt"
  | "kuroir"
  | "nightOwl"
  | "solarDark"
  | "solarLight";

export default function ThemeChanger() {
  const { theme, setTheme } = useCompilerStore();

  return (
    <Select value={theme} onValueChange={(value: ThemeType) => setTheme(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent
        className={`flex flex-col justify-between ${
          theme !== "vs" && theme !== "kuroir" && theme !== "solarLight"
            ? "dark"
            : undefined
        }`}
      >
        <SelectItem value="vs">Light</SelectItem>
        <SelectItem value="customDarkTheme">Dark</SelectItem>
        <SelectItem value="hc-black">High Contrast Dark</SelectItem>
        <SelectItem value="monokai">Monokai</SelectItem>
        <SelectItem value="dracula">Dracula</SelectItem>
        <SelectItem value="cobalt">Cobalt</SelectItem>
        <SelectItem value="kuroir">Kuroir</SelectItem>
        <SelectItem value="nightOwl">Night Owl</SelectItem>
        <SelectItem value="solarLight">Solarized Light</SelectItem>
        <SelectItem value="solarDark">Solarized Dark</SelectItem>
      </SelectContent>
    </Select>
  );
}
