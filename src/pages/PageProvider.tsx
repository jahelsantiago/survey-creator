import React from 'react'
import PageContainer from '../components/PageContainer';
import Question, { QuestionProps } from '../components/questions/Question';
import Landing from './Landing';
import ThankYou from './ThankYou';

type Pages = "landing" | "question" | "thanks"

export type PageProviderProps = {
    page: Pages;
    questionProps?: QuestionProps;
    onSubmit?: (data: any) => void;
}

export default function PageProvider({page, questionProps, onSubmit = ()=>{}}: PageProviderProps) {
  if (page === "landing"){
    return <Landing onSubmit = {onSubmit}/>
  }

  if (page === "question"){
    return (
        <PageContainer>
            <Question {...questionProps} onSubmit = {onSubmit}/>
        </PageContainer>
    )
  }

  if (page === "thanks"){
    return <ThankYou/>
  }

  return <div>404</div>
}