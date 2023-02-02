import React from 'react'
import DateQuestion from './DateQuestion';
import MultipleQuestion from './MultipleQuestion';
import SingleQuestion from './SingleQuestion';
import { motion } from "framer-motion"
import PersonalData from './PersonalData';

export type QuestionProps = {
    question?: string;
    options?: string[];
    flexibleOptions?: boolean;
    date?: boolean;
    personalData?: boolean;
    onSubmit?: (data: any) => void;
    optional?: boolean;
    questionNumber?: number;
}

export default function Question(props: QuestionProps) {

    let Component = <SingleQuestion {...props}/>

    if(props.personalData){
        Component = <PersonalData {...props} />
    }

    if(props.date){
        Component = <DateQuestion {...props}/>
    }
    
    if(props.options){
        Component =  <MultipleQuestion {...props}/>
    }

    return (
        <div className='w-[40rem] m-3 z-30'>
            {Component}
        </div>
    )
}