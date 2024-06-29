import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const ShareStoryButton = ({ story }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(story).then(() => {
      toast.success("Story copied to clipboard!");
    });
  };

  return (
    <Button onClick={handleShare} variant="outline">
      Share Story
    </Button>
  );
};

export default ShareStoryButton;