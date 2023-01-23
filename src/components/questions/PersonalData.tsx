import { useForm } from "react-hook-form";
import PageContainer from "../PageContainer";
import { Input } from "@material-tailwind/react";
import Button from "../Button";
import { PersonalInfo } from "../../types";
import QuestionTitle from "./QuestionTitle";

type Props = {
  question?: string;
  onSubmit?: (data: any) => void;
  questionNumber?: number;
};

export default function PersonalData({ questionNumber, onSubmit = ()=>{}, question }: Props) {

    const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfo>();
    const hasErrors = Object.keys(errors).length > 0;
    const submit = handleSubmit(data => {
        if (hasErrors) return;
        onSubmit([
          {answer: data.name, question: "Nombre"},
          {answer: data.email, question: "Correo electronico"},
          {answer: data.phone, question: "Numero de telefono"},
        ]);
        
    });
    function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
      if (event.key === 'Enter') {
        console.log("key pressed")
        submit();
      }
    }

  return (
      <div className="flex flex-col gap-5">
        <QuestionTitle questionNumber={questionNumber}>
             {question}
        </QuestionTitle>
        <form className="flex flex-col gap-4" onSubmit={submit}>
            <Input variant="standard" label="Nombre*" {...register("name", {required: true, maxLength: 80})} onKeyUp = {handleKeyPress}/>
            <Input variant="standard" label="Correo electronico*" {...register("email", {required: true, pattern: /^\S+@\S+$/i}) } onKeyUp = {handleKeyPress}/>
            <Input variant="standard" label="Numero de telefono*" {...register("phone", {required: true, minLength: 6, maxLength: 12})} onKeyUp = {handleKeyPress}/>
            {
                hasErrors && <p className="text-red-500">Por favor, revisar los campos</p>    
            }
          <Button onClick={submit}>Siguiente</Button>
        </form>
      </div>
  );
}
