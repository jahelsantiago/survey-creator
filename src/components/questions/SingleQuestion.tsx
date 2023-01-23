import { Input } from "@material-tailwind/react";
import Button from "../Button";
import { useForm } from "react-hook-form";
import QuestionTitle from "./QuestionTitle";
import { SingleQuestionType } from "../../types";

type Props = {
  question?: string;
  onSubmit?: (data?: any) => void;
  questionNumber?: number;
  optional?: boolean;
};

export default function SingleQuestion({
  question,
  onSubmit = () => {},
  questionNumber,
  optional,
}: Props) {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingleQuestionType>();

  const submit = handleSubmit((data) => {
    onSubmit({...data, question});
  });

  const hasErrors = Object.keys(errors).length > 0;

  return (
      <div className="flex flex-col gap-5 w-full">
        <QuestionTitle questionNumber={questionNumber}>{question}</QuestionTitle>
        <form onSubmit={submit}>
          <Input
            className="text-2xl font-extralight"
            size="lg"
            variant="standard"
            type="text"
            placeholder="Por favor ingrese su respuesta"
            {...register("answer", { required: true, maxLength: 5000 })}
          />
        </form>
        {hasErrors && (
          <p className="text-red-500 text-sm">
            Por favor, responder la pregunta
          </p>
        )}
        <div className="flex gap-2">
          <Button onClick={submit}>Siguiente</Button>
          {optional && <Button onClick={()=>onSubmit()} className = "bg-gray-600">Omitir</Button>}
        </div>
      </div>
  );
}
