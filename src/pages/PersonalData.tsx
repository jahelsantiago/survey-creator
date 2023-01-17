import { useForm } from "react-hook-form";
import PageContainer from "../components/PageContainer";
import { Input } from "@material-tailwind/react";
import Button from "../components/Button";
import { PersonalInfo } from "../types";
import QuestionTitle from "../components/QuestionTitle";

type Props = {
  questionNumber: number;
  onNext: () => void;
};

export default function PersonalData({ questionNumber = 0, onNext = ()=>{} }: Props) {

    const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfo>();
    const hasErrors = Object.keys(errors).length > 0;
    const onSubmit = handleSubmit(data => {
        if (hasErrors) return;
        onNext();
    });

  return (
    <PageContainer>
      <div className="flex flex-col gap-5">
        <QuestionTitle questionNumber={questionNumber}>
            Datos de contacto
        </QuestionTitle>
        <form className="w-96 flex flex-col gap-4" onSubmit={onSubmit}>
            <Input variant="standard" label="Nombre*" {...register("name", {required: true, maxLength: 80})} />
            <Input variant="standard" label="Correo electronico*" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
            <Input variant="standard" label="Numero de telefono*" {...register("phone", {required: true, minLength: 6, maxLength: 12})} />
            {
                hasErrors && <p className="text-red-500">Por favor, revisar los campos</p>    
            }
          <Button onClick={onSubmit}>Siguiente</Button>
        </form>
      </div>
    </PageContainer>
  );
}
