import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import image from "@/assets/settings.svg";
import Image from "next/image";
import { Slider } from "../ui/slider";
import Dropdown from "./themechanger";
import { useCompilerStore } from "@/context/compiler-context";
import CodeChanger from "./codechanger";

export function Sidebar() {
  const { font, setFont } = useCompilerStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="absolute bottom-2 left-2 z-2 bg-transparent border-transparent"
        >
          <Image src={image} alt="settings" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl">Settings</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 w-[100%]">
            <Label htmlFor="slider" className="text-right">
              Font size
            </Label>
            <Slider
              id="slider"
              className="w-56"
              value={[font]}
              max={50}
              min={10}
              step={1}
              onValueChange={([newValue]) => setFont(newValue)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="slider" className="text-right">
              Theme
            </Label>
            <Dropdown />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="slider" className="text-right">
              Type
            </Label>
            <CodeChanger />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
