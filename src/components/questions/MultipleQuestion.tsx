import { Input, Radio } from "@material-tailwind/react";
import { useState } from "react";
import Button from "../Button";
import QuestionTitle from "./QuestionTitle";

type Props = {
  question?: string;
  onSubmit?: (data: any) => void;
  questionNumber?: number;
  options?: string[];
  flexibleOptions?: boolean;
};

export default function MultipleQuestion({
  question,
  onSubmit = () => {},
  questionNumber,
  options = [],
  flexibleOptions,
}: Props) {
  const [otherOptionText, setOtherOptionText] = useState("");
  return (
      <div className="flex flex-col gap-5 w-full">
        <QuestionTitle questionNumber={questionNumber}>
          {question}
        </QuestionTitle>
        <form className="flex flex-col" onSubmit={() => {}}>
          {options.map((option, index) => (
            <Radio
              id={option}
              key={option}
              onChange={() => onSubmit({ answer: option, question })}
              name={question}
              label={option}
            />
          ))}
          {flexibleOptions && <div className="flex align-middle">
            <Radio
              name={question}
              alt="Otro"
              checked={otherOptionText !== ""}
              readOnly
            />
            <Input
              className="text-lg font-extralight"
              size="lg"
              variant="standard"
              type="text"
              placeholder="Otro, ¿Cual?"
              value={otherOptionText}
              onChange={(e) => setOtherOptionText(e.target.value)}
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
        </form>
      </div>
  );
}
