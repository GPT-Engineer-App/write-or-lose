import React from "react";
import { Button } from "@/components/ui/button";

const SaveProgressButton = ({ onSave }) => {
  const handleSave = () => {
    onSave();
  };

  return (
    <Button onClick={handleSave} variant="outline">
      Save Progress
    </Button>
  );
};

export default SaveProgressButton;