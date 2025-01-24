"use client";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";
import OutputSkeleton from "./output-skeleton";

interface InputOutputProps {
  setUserInput: any;
  userOutput: any;
  loading: boolean;
}

export default function InputOutput({
  setUserInput,
  userOutput,
  loading,
}: InputOutputProps) {
  return (
    <section className="w-[30%]">
      <Card className="ml-3 mb-3 h-[49%]">
        <CardHeader>
          <CardTitle className="flex flex-row justify-between items-center align-middle">
            Input
            <Button size={"sm"} className="">
              Clear
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            className="h-[275px]"
            onChange={(e) => setUserInput(e.target.value)}
          />
        </CardContent>
      </Card>
      <Card className="ml-3 h-[49%]">
        <CardHeader>
          <CardTitle className="flex flex-row justify-between items-center align-middle">
            Output
            <Button size={"sm"} className="">
              Clear
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[275px] rounded-md border border-input bg-background px-3 py-3 text-base ring-offset-background">
            {!loading && <pre>{userOutput}</pre>}
            {loading && <OutputSkeleton />}
          </ScrollArea>
        </CardContent>
      </Card>
    </section>
  );
}
