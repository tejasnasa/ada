import { Button } from "@/components/ui/button";
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
import { Slider } from "@/components/ui/slider";
import Dropdown from "./themechanger";
import { useCompilerStore } from "@/context/compiler-context";
import CodeChanger from "./codechanger";
import loop from "@/assets/loop.png";
import noloop from "@/assets/no-loop.png";
import noloop2 from "@/assets/no-loop2.png";
import loop2 from "@/assets/loop2.png";
import blank from "@/assets/blank.png";
import settings2 from "@/assets/settings2.svg";

export function Sidebar() {
  const { font, setFont, codingType, theme } = useCompilerStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="absolute bottom-2 left-2 z-2 bg-transparent border-transparent"
        >
          <Image src={image} alt="settings" className="dark:block hidden" />
          <Image src={settings2} alt="settings" className="dark:hidden block" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className={`flex flex-col justify-between ${
          theme !== "vs" && theme !== "kuroir" && theme !== "solarLight"
            ? "dark"
            : undefined
        }`}
      >
        <SheetHeader className="dark:bg-[#0A0A0A] dark:text-white bg-white text-black transition ease-in-out">
          <SheetTitle className="text-3xl">Settings</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4 dark:bg-[#0A0A0A] dark:text-white bg-white text-black transition ease-in-out">
          <div className="grid grid-cols-4 items-center gap-4 w-[100%] mt-5">
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
          <div className="grid grid-cols-4 items-center gap-4 mt-2">
            <Label htmlFor="slider" className="text-right">
              Theme
            </Label>
            <Dropdown />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 mt-1">
            <Label htmlFor="slider" className="text-right">
              Type
            </Label>
            <CodeChanger />
          </div>
        </div>
        <div className="h-[700px] flex flex-col justify-center">
          {codingType === 0 && <Image src={noloop} alt="" />}
          {codingType === 1 && <Image src={loop} alt="" />}
          {codingType === 2 && <Image src={noloop2} alt="" />}
          {codingType === 3 && <Image src={loop2} alt="" />}
          {codingType === 4 && <Image src={blank} alt="" />}
        </div>

        <div>
          <SheetFooter className="mt-1">
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
