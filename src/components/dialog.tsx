import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import help from "@/assets/circle-help.svg";
import help2 from "@/assets/circle-help2.svg";
import { useCompilerStore } from "@/context/compiler-context";
import { ScrollArea } from "./ui/scroll-area";
import React from "react";

export function DialogDemo({ device }: { device: string }) {
  const { theme } = useCompilerStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className={`absolute left-12 text-white z-2 bg-transparent border-transparent ${
            device === "mobile" ? "bottom-4 left-[72px]" : "bottom-2"
          }`}
        >
          <Image src={help} alt="Ada" className="dark:block hidden" />
          <Image src={help2} alt="Ada" className="dark:hidden block" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-4xl h-[650px] ${
          theme !== "vs" && theme !== "kuroir" && theme !== "solarLight"
            ? "dark"
            : undefined
        }`}
      >
        <DialogHeader className="dark:bg-[#0A0A0A] dark:text-white bg-white text-black p-2">
          <DialogTitle className="text-3xl">
            Compiler Shortcuts Documentation
          </DialogTitle>
          <DialogDescription>
            A list of useful compiler shortcuts for faster coding.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 dark:bg-[#0A0A0A] dark:text-white bg-white text-black">
          <ScrollArea className="h-[510px] w-full p-2">
            <div className="space-y-8 pr-1">
              <Section title="Input Shortcuts">
                <ShortcutItem
                  code="i1(x);"
                  description="Declare and read 1 integer"
                  expansion="int num; cin >> n;"
                />
                <ShortcutItem
                  code="i2(x,y);"
                  description="Declare and read 2 integers"
                  expansion="int x, y; cin >> x >> y;"
                />
                <ShortcutItem
                  code="i3(x,y,z);"
                  description="Declare and read 3 integers"
                  expansion="int x, y, z; cin >> x >> y >> z;"
                />
                <ShortcutItem
                  code="i4(w,x,y,z);"
                  description="Declare and read 1 integer"
                  expansion="int w,x,y,z; cin >> w >> x >> y >> z;"
                />
                <ShortcutItem
                  code="vin(v, n);"
                  description="Read vector of size n (0-based)"
                  expansion="for(int i=0; i<n; i++) cin >> vec[i];"
                />
              </Section>

              <Section title="Output Helpers">
                <ShortcutItem
                  code="vout(v, n);"
                  description="Print 0-based vector elements"
                  expansion={`for(auto i:v) cout << i << " "; cout << endl;`}
                />
                <ShortcutItem
                  code="yes;"
                  description="Prints yes with a linebreak after"
                  expansion='cout << "YES" << endl;'
                />
                <ShortcutItem
                  code="no;"
                  description="Prints no with a linebreak after"
                  expansion='cout << "NO" << endl;'
                />
              </Section>

              <Section title="Loop Macros">
                <ShortcutItem
                  code="loop(i, a, n);"
                  description="Loops from a to n-1"
                  expansion="for(int i = a; i < n; i++)"
                />
                <ShortcutItem
                  code="loopr(i, a, n);"
                  description="Reverse loop from a down to n"
                  expansion=" for(int i = a; i >= n; i--)"
                />
              </Section>

              <Section title="Utility Functions">
                <ShortcutItem
                  code="ceil(a, b);"
                  description="Ceiling division handling negative numbers"
                />
                <ShortcutItem
                  code="int_sqrt(a);"
                  description="Integer square root (floor value)"
                />
              </Section>

              <Section title="Common Constants & Macros">
                <ShortcutItem
                  code="MOD"
                  description="10⁹+7 (Common programming competition modulus)"
                />
                <ShortcutItem
                  code="pb, ff, ss"
                  description="push_back, first, second respectively"
                />
                <ShortcutItem
                  code="vi"
                  description="Integer vector declaration"
                  expansion="vector<int>"
                />
              </Section>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </section>
  );
}

function ShortcutItem({
  code,
  description,
  expansion,
}: {
  code: string;
  description: string;
  expansion?: string;
}) {
  return (
    <div className="bg-muted p-4 rounded-lg">
      <code className="text-lg font-semibold">{code}</code>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      {expansion && (
        <div className="mt-1">
          <span className="text-sm font-medium">Expands to: </span>
          <code className="text-sm bg-background px-1 py-0.5 rounded">
            {expansion}
          </code>
        </div>
      )}
    </div>
  );
}
