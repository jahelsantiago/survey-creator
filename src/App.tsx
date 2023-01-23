import { Component } from 'react'
import { metdosAccesoAnticonceptivos, motivosTomaDeAnticonceptivos, tiposDeAnticonceptivos } from './assest/utils'
import Question, { QuestionProps } from './components/questions/Question'
import PageProvider, { PageProviderProps } from './pages/PageProvider'
import { answer } from './types'
type Props = {}

type State = {
  currentPage: number,
}

class App extends Component<Props, State> {
  state = {
    currentPage: 0,
  }

  answers : answer[] = []

  nextPage = () => {
    this.setState({...this.state, currentPage: this.state.currentPage + 1})
  }

  prevPage = () => {
    this.setState({...this.state, currentPage: this.state.currentPage - 1})
  }
  
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log(this.state)
    console.log(this.answers)
  }

  onSubmit = (data: answer) => {
    this.answers[this.state.currentPage] = data
    this.nextPage()
  }
  
  pages:PageProviderProps[] = [
    { page: "landing"},
    { page: "question", questionProps : {question:"Datos de contacto", personalData: true}},
    { page: "question", questionProps : {question:"¿Qué tipo de anticonceptivo tomas?", options: tiposDeAnticonceptivos}},
    { page: "question", questionProps : {question:"¿Qué marca de anticonceptivo utilizas?"}},
    { page: "question", questionProps : {question:"¿Cuál es el motivo por el que tomas anticonceptivos?", options: motivosTomaDeAnticonceptivos, flexibleOptions: true}},
    { page: "question", questionProps : {question: "¿Has tenido problemas con el acceso al anticonceptivo?", options: ["Sí", "No"]}},
    { page: "question", questionProps : {question: "¿Hace cuánto tiempo tienes problemas con el acceso al anticonceptivo?", date: true, optional: true}},
    { page: "question", questionProps : {question: "¿De qué manera te afecta la escasez de estos anticonceptivos? Es decir, ¿qué consecuencias trae para tu vida y/o cuerpo la falta de ellos?", optional:true}},
    { page: "question", questionProps : {question: "¿Has tenido que pagar más por el acceso a ellos?", options: ["Sí", "No"]}},
    { page: "question", questionProps : {question: "¿Has tenido que reemplazar tu método anticonceptivo tradicional por otro alternativo?", options: ["Sí", "No"], flexibleOptions: true}},
    { page: "question", questionProps : {question: "¿Normalmente cómo accedes a los anticonceptivos?", options: metdosAccesoAnticonceptivos, flexibleOptions: true}},
    { page: "question", questionProps : {question: "¿Estás interesada en participar en la campaña “Por la vida y la salud sexual y reproductiva de las mujeres”?", options: ["Sí", "No"]}},
    { page: "thanks", answers : this.answers}
 ]

  render() {
    return (
      <>
        <PageProvider {...this.pages[this.state.currentPage]} onSubmit = {this.onSubmit} currPage = {this.state.currentPage} nextPage = {this.nextPage} prevPage = {this.prevPage}/>
      </>
    )
  }
}

export default App