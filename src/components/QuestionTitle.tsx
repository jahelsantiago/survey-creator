import React from "react";

type Props = {
  questionNumber: number;
  children: React.ReactNode;
};

export default function QuestionTitle({ questionNumber, children }: Props) {
  return (
    <div>
      <p className="text-sm text-gray-500">Pregunta {questionNumber}</p>
      <h1 className="text-2xl font-bold text-gray-700">{children}</h1>
    </div>
  );
}
