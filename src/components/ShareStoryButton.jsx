import React from "react";
import { Button } from "@/components/ui/button";


const ShareStoryButton = ({ story }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(story).then(() => {
      
    });
  };

  return (
    <Button onClick={handleShare} variant="outline">
      Share Story
    </Button>
  );
};

export default ShareStoryButton;