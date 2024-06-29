import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Leaderboard = ({ scores }) => {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-center text-3xl">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-decimal pl-5">
          {scores.map((score, index) => (
            <li key={index} className="mb-2">
              {score.name}: {score.points} points
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;