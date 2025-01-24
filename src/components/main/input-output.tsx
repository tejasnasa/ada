import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";

const output = `Hello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorldHello\nWorld`;

export default function InputOutput() {
  return (
    <section className="w-[30%]">
      <Card className="ml-3 mb-3 h-[49%]">
        <CardHeader className="flex flex-row justify-between items-center align-middle">
          <CardTitle>Input</CardTitle>
          <Button size={"sm"} className="">
            Clear
          </Button>
        </CardHeader>
        <CardContent>
          <Textarea className="h-[275px]" />
        </CardContent>
      </Card>
      <Card className="ml-3 h-[49%]">
        <CardHeader className="flex flex-row justify-between items-center align-middle">
          <CardTitle>Output</CardTitle>
          <Button size={"sm"} className="">
            Clear
          </Button>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[275px] rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background">
            <pre>{output}</pre>
          </ScrollArea>
        </CardContent>
      </Card>
    </section>
  );
}
