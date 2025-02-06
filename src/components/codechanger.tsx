import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCompilerStore } from "@/context/compiler-context";
import codeTypeArray from "@/lib/data";

export default function CodeChanger() {
  const { codingType, setCodingType, setUserCode, theme } = useCompilerStore();

  return (
    <>
      <Select
        value={`${codingType}`}
        onValueChange={(value: string) => {
          setCodingType(Number(value));
          setUserCode(codeTypeArray[Number(value)].defaultCode);
        }}
      >
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
          <SelectItem value="0">No Loop</SelectItem>
          <SelectItem value="1">Loop</SelectItem>
          <SelectItem value="2">No Loop - With Function</SelectItem>
          <SelectItem value="3">Loop - With Function</SelectItem>
          <SelectItem value="4">Blank</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
