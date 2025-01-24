import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCompilerStore } from "@/context/compiler-context";

export default function CodeChanger() {
  const { codingType, setCodingType } = useCompilerStore();

  return (
    <Select
      value={`${codingType}`}
      onValueChange={(value: string) => setCodingType(Number(value))}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0">No Loop</SelectItem>
        <SelectItem value="1">Loop</SelectItem>
        <SelectItem value="2">No Loop - With Function</SelectItem>
        <SelectItem value="3">Loop - With Function</SelectItem>
      </SelectContent>
    </Select>
  );
}
