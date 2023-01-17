import React, { useRef, useState } from "react";
import Button from "../components/Button";
import DateSelector from "../components/DateSelector";
import PageContainer from "../components/PageContainer";
import QuestionTitle from "../components/QuestionTitle";
import { SingleQuestionType } from "../types";

type Props = {
  title: string;
  updateAnswers: (data: SingleQuestionType) => void;
  nextPage: () => void;
};

export default function DateQuestion({
  title,
  nextPage,
  updateAnswers,
}: Props) {
  const selectedDate = useRef(new Date)

  function onClick(){
    const formattedDate = selectedDate.current.toLocaleDateString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"});
    console.log(formattedDate)
    updateAnswers({answer: formattedDate})
    nextPage()
  }
  return (
    <PageContainer>
      <div className="flex flex-col gap-5 w-[50rem]">
        <QuestionTitle questionNumber={1}>{title}</QuestionTitle>
        <DateSelector onChange={(date) => {selectedDate.current = date}} />
        <Button onClick={onClick}>Siguiente</Button>
      </div>
    </PageContainer>
  );
}
