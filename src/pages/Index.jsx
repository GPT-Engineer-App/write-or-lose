import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import SaveProgressButton from "@/components/SaveProgressButton";
import ShareStoryButton from "@/components/ShareStoryButton";
import Leaderboard from "@/components/Leaderboard";
import WritingPrompt from "@/components/WritingPrompt";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [text, setText] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [scores, setScores] = useState([
    { name: "Alice", points: 120 },
    { name: "Bob", points: 100 },
    { name: "Charlie", points: 80 },
  ]);
  const [prompt, setPrompt] = useState("Write about a time you overcame a challenge.");
  const timerRef = useRef(null);

  useEffect(() => {
    if (isWriting) {
      timerRef.current = setTimeout(() => {
        setText("");
        setShowAlert(true);
      }, 5000);
    }

    return () => clearTimeout(timerRef.current);
  }, [text, isWriting]);

  const handleChange = (e) => {
    setText(e.target.value);
    setIsWriting(true);
    setShowAlert(false);
    clearTimeout(timerRef.current);
  };

  const handleBlur = () => {
    setIsWriting(false);
  };

  const handleSave = () => {
    localStorage.setItem("story", text);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4 p-4">
      <WritingPrompt prompt={prompt} />
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Keep Writing</CardTitle>
        </CardHeader>
        <CardContent>
          <textarea
            className="w-full h-64 p-2 border rounded"
            value={text}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Start writing your story..."
          />
          {showAlert && (
            <Alert className="mt-4">
              <AlertTitle>Time's up!</AlertTitle>
              <AlertDescription>Your progress has been deleted.</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      <div className="flex space-x-4">
        <SaveProgressButton onSave={handleSave} />
        <ShareStoryButton story={text} />
      </div>
      <Tabs defaultValue="tutorial" className="w-full max-w-2xl">
        <TabsList>
          <TabsTrigger value="tutorial">Tutorial</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>
        <TabsContent value="tutorial">
          <Card>
            <CardHeader>
              <CardTitle>Tutorial</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Welcome to Keep Writing! Your task is to write a short story. If you stop writing for 5 seconds, all of your progress will be deleted. Keep your fingers moving and your creativity flowing!</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="roadmap">
          <Card>
            <CardHeader>
              <CardTitle>Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Feature 1: Save progress</li>
                <li>Feature 2: Share stories</li>
                <li>Feature 3: Leaderboards</li>
                <li>Feature 4: Writing prompts</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leaderboard">
          <Leaderboard scores={scores} />
        </TabsContent>
      </Tabs>
      <ToastContainer />
    </div>
  );
};

export default Index;