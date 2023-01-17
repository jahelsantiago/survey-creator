import { Radio } from "@material-tailwind/react";
import PageContainer from "../components/PageContainer";
import QuestionTitle from "../components/QuestionTitle";
import { SingleQuestionType } from "../types";

type Props = {
  title: string;
  options: string[];
  updateAnswers: (data: SingleQuestionType) => void;
  nextPage: () => void;
};

export default function MultipleQuestion({
  title,
  options,
  nextPage,
  updateAnswers,
}: Props) {


  return (
    <PageContainer>
      <div className="flex flex-col gap-5 w-[50rem]">
        <QuestionTitle questionNumber={1}>{title}</QuestionTitle>
        <form className="flex flex-col" onSubmit={()=>{}}>
          {options.map((option, index) => (
            <Radio
              id={option}
              key={option}
              onChange={() => {
                console.log(option);
                updateAnswers({ answer: option });
                nextPage();
              }}
              name="type"
              label={option}
            />
          ))}
        </form>
      </div>
    </PageContainer>
  );
}
