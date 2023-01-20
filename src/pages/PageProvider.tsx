import React from 'react'
import PageContainer from '../components/PageContainer';
import Question, { QuestionProps } from '../components/questions/Question';
import Landing from './Landing';
import ThankYou from './ThankYou';

type Pages = "landing" | "question" | "thanks"

export type PageProviderProps = {
    page: Pages;
    nextPage?: () => void;
    prevPage?: () => void;
    currPage?: number;
    questionProps?: QuestionProps;
    onSubmit?: (data: any) => void;
}

export default function PageProvider({page, questionProps, onSubmit = ()=>{}, prevPage}: PageProviderProps) {
  if (page === "landing"){
    return <Landing onSubmit = {onSubmit}/>
  }

  if (page === "question"){
    return (
        <PageContainer prevPage={prevPage}>
            <Question {...questionProps} onSubmit = {onSubmit}/>
        </PageContainer>
    )
  }

  if (page === "thanks"){
    return <ThankYou/>
  }

  return <div>404</div>
}