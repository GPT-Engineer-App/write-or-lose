import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const SaveProgressButton = ({ onSave }) => {
  const handleSave = () => {
    onSave();
    toast.success("Progress saved successfully!");
  };

  return (
    <Button onClick={handleSave} variant="outline">
      Save Progress
    </Button>
  );
};

export default SaveProgressButton;