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
}

export default function Question({question, options, flexibleOptions, date, onSubmit= ()=>{}, personalData}: QuestionProps) {
    
    let component = <SingleQuestion question={question} onSubmit={onSubmit} />

    if(personalData){
        component = <PersonalData question={question} onSubmit={onSubmit}/>
    }

    if(date){
        component = <DateQuestion question={question} onSubmit={onSubmit} />
    }
    
    if(options){
        component =  <MultipleQuestion question={question} options={options} onSubmit={onSubmit} flexibleOptions = {flexibleOptions}/>
    }

    return (
        <div className='w-[50rem] m-3'>
            {component}
        </div>
    )
}