import { Input, Radio } from "@material-tailwind/react";
import { useState } from "react";
import Button from "../Button";
import QuestionTitle from "./QuestionTitle";

export type Props = {
  question?: string;
  onSubmit?: (data?: any) => void;
  questionNumber?: number;
  options?: string[];
  flexibleOptions?: boolean;
  optional?: boolean;
};

export default function MultipleQuestion({
  question,
  onSubmit = () => {},
  questionNumber,
  options = [],
  flexibleOptions,
  optional,
}: Props) {
  const [otherOptionText, setOtherOptionText] = useState("");
  return (
      <div className="flex flex-col gap-5 w-full">
        <QuestionTitle questionNumber={questionNumber}>
          {question}
        </QuestionTitle>
        <form className="flex flex-col" onSubmit={(e) => {e.preventDefault()}}>
          {options.map((option, index) => (
            <Radio
              id={option}
              key={option + questionNumber}
              onChange={() => onSubmit({ answer: option, question })}
              name={question}
              label={option}
            />
          ))}
          {flexibleOptions && <div className="flex align-middle">
            <Input
              className="text-lg font-extralight"
              size="lg"
              variant="standard"
              type="text"
              placeholder="Otro, ¿Cual?"
              value={otherOptionText}
              onChange={(e) => setOtherOptionText(e.target.value)}
              autoFocus 
            />
          </div>}
          {flexibleOptions && (
            <Button
              onClick={() => {
                if (otherOptionText !== "") {
                  onSubmit({ answer: otherOptionText, question });
                }
              }}
              className="mt-5"
            >
              Siguiente
            </Button>
          )}
          {optional && <Button onClick={onSubmit} className = "bg-gray-600">Omitir</Button>}
        </form>
      </div>
  );
}
