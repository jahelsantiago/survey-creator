import React from "react";
import Button from "../components/Button";
import DateSelector from "../components/DateSelector";
import PageContainer from "../components/PageContainer";
import QuestionTitle from "../components/QuestionTitle";

type Props = {
  title: string;
  updateAnswers: (data: Date) => void;
  nextPage: () => void;
};

export default function DateQuestion({
  title,
  nextPage,
  updateAnswers,
}: Props) {
  return (
    <PageContainer>
      <div className="flex flex-col gap-5 w-[50rem]">
        <QuestionTitle questionNumber={1}>{title}</QuestionTitle>
        <DateSelector onChange={() => {}} />
        <Button onClick={() => {}}>Siguiente</Button>
      </div>
    </PageContainer>
  );
}
