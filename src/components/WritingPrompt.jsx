import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WritingPrompt = ({ prompt }) => {
  return (
    <Card className="w-full max-w-2xl mb-4">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Writing Prompt</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{prompt}</p>
      </CardContent>
    </Card>
  );
};

export default WritingPrompt;