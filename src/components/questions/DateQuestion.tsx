import  { useRef } from "react";
import Button from "../Button";
import DateSelector from "../DateSelector";
import QuestionTitle from "./QuestionTitle";


type Props = {
  question?: string;
  onSubmit?: (data: any) => void;
  questionNumber?: number;
};

export default function DateQuestion({
  question,
  onSubmit = () => {},
  questionNumber,
}: Props) {
  const selectedDate = useRef(new Date());

  function onClick() {
    const formattedDate = selectedDate.current.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    onSubmit({ answer: formattedDate, question });
  }

  return (
      <div className="flex flex-col gap-5 w-full">
        <QuestionTitle questionNumber={questionNumber}>
          {question}
        </QuestionTitle>
        <DateSelector
          onChange={(date) => {
            selectedDate.current = date;
          }}
        />
        <Button onClick={onClick}>Siguiente</Button>
      </div>
  );
}
