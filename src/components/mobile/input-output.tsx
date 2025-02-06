"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useCompilerStore } from "@/context/compiler-context";
import OutputSkeleton from "@/components/output-skeleton";

export default function InputOutputMobile() {
  const {
    userInput,
    setUserInput,
    userOutput,
    loading,
    setUserInput: clearInput,
    setUserOutput: clearOutput,
  } = useCompilerStore();

  return (
    <section className="h-[90%]" id="inputoutput">
      <Card className="h-[49%] m-2 mb-3">
        <CardHeader>
          <CardTitle className="flex flex-row justify-between items-center">
            Input
            <Button size="sm" onClick={() => clearInput("")}>
              Clear
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center">
          <Textarea
            className="h-[320px]"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card className="h-[49%] m-2">
        <CardHeader>
          <CardTitle className="flex flex-row justify-between items-center">
            Output
            <Button
              size="sm"
              onClick={() => clearOutput({ code: "", isError: false })}
            >
              Clear
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[320px] rounded-md border border-input bg-background px-3 py-3 text-base">
            {!loading && userOutput.isError && (
              <pre className="text-wrap text-red-500">{userOutput.code}</pre>
            )}
            {!loading && !userOutput.isError && (
              <pre className="text-wrap">{userOutput.code}</pre>
            )}
            {loading && <OutputSkeleton />}
          </ScrollArea>
        </CardContent>
      </Card>
    </section>
  );
}
