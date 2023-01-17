import React, { Component } from 'react'
import DateQuestion from './pages/DateQuestion'
import Landing from './pages/Landing'
import MultipleQuestion from './pages/MultipleQuestion'
import PersonalData from './pages/PersonalData'
import SingleQuestion from './pages/SingleQuestion'
import ThankYou from './pages/ThankYou'
import { FormData } from './types'

type Props = {}

type State = {
  currentPage: number,
  answers: FormData[]
}


class App extends Component<Props, State> {
  state = {
    currentPage: 0,
    answers: [],
  }

  
  nextPage = () => {
    this.setState({...this.state, currentPage: this.state.currentPage + 1})
  }

  updateAnswers = (data : FormData) =>{
    const questionName = this.pages[this.state.currentPage].name
    const dataWithPage = {...data, id: this.state.currentPage, page: questionName}
    const answers = [...this.state.answers, {...dataWithPage}]
    this.setState({...this.state ,currentPage: this.state.currentPage + 1, answers: answers})
  }
  
  pages = [{component: Landing, props: {onNext: this.nextPage}, name : "Landing"}]

  render() {
    return (
      <ThankYou/>
    )
  }
}

export default App