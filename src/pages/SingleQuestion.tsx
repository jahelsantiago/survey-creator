import { Input } from '@material-tailwind/react'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import PageContainer from '../components/PageContainer'
import QuestionTitle from '../components/QuestionTitle'
import { FormData, SingleQuestionType } from '../types'

type Props = {
    title: string
    updateAnswers: (data: FormData) => void,
    nextPage: () => void
}

export default function SingleQuestion({title, updateAnswers, nextPage}: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<SingleQuestionType>();
  
  const onSubmit = handleSubmit( data => {
    updateAnswers(data);
    nextPage();
  });

  const hasErrors = Object.keys(errors).length > 0;
  
  return (
    <PageContainer>
        <div className='flex flex-col gap-5 w-[50rem]'>
            <QuestionTitle questionNumber={1}>
                {title}
            </QuestionTitle>
            <form onSubmit={onSubmit}>
                <Input className = "text-2xl font-extralight" size = "lg" variant="standard" type="text" placeholder="Por favor ingrese su respuesta" {...register("answer", {required: true, maxLength: 5000})} />
            </form>
            {
                hasErrors && <p className="text-red-500 text-sm">Por favor, responder la pregunta</p>    
            }
            <Button onClick={onSubmit}>Siguiente</Button>
        </div>
        
    </PageContainer>
  )
}