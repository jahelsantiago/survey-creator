import { Component } from 'react'
import { metdosAccesoAnticonceptivos, motivosTomaDeAnticonceptivos, tiposDeAnticonceptivos } from './assest/utils'
import Question, { QuestionProps } from './components/questions/Question'
import PageProvider, { PageProviderProps } from './pages/PageProvider'
type Props = {}

type State = {
  currentPage: number,
}

class App extends Component<Props, State> {
  state = {
    currentPage: 0,
  }

  answers : any[] = []

  nextPage = () => {
    this.setState({...this.state, currentPage: this.state.currentPage + 1})
  }
  
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log(this.state)
    console.log(this.answers)
  }

  onSubmit = (data: any) => {
    if(Array.isArray(data)){
      data.forEach((item) => {
        this.answers.push(item)
      })
    }else{
      this.answers.push(data)
    }
    this.nextPage()
  }
  
  pages:PageProviderProps[] = [
    { page: "landing"},
    { page: "question", questionProps : {question:"Datos de contacto", personalData: true}},
    { page: "question", questionProps : {question:"¿Qué tipo de anticonceptivo tomas?", options: tiposDeAnticonceptivos}},
    { page: "question", questionProps : {question:"¿Qué marca de anticonceptivo tomas?"}},
    { page: "question", questionProps : {question:"¿Cuál es el motivo por el que tomas anticonceptivos?", options: motivosTomaDeAnticonceptivos, flexibleOptions: true}},
    { page: "question", questionProps : {question: "¿Hace cuánto tiempo tienes problemas con el acceso al anticonceptivo?", date: true}},
    { page: "question", questionProps : {question: "¿De qué manera te afecta la escasez de estos anticonceptivos? Es decir, ¿qué consecuencias trae para tu vida y/o cuerpo la falta de ellos?"}},
    { page: "question", questionProps : {question: "¿Has tenido que pagar más por el acceso a ellos?", options: ["Sí", "No"]}},
    { page: "question", questionProps : {question: "¿Has tenido que reemplazar tu método anticonceptivo tradicional por otro alternativo?", options: ["Sí", "No"], flexibleOptions: true}},
    { page: "question", questionProps : {question: "¿Normalmente cómo accedes a los anticonceptivos?", options: metdosAccesoAnticonceptivos, flexibleOptions: true}},
    { page: "question", questionProps : {question: "¿Estás interesada en participar en la campaña “Por la vida y la salud sexual y reproductiva de las mujeres”?", options: ["Sí", "No"]}},
    { page: "thanks"}
 ]

  render() {
    return (
      <>
        <PageProvider {...this.pages[this.state.currentPage]} onSubmit = {this.onSubmit}/>
      </>
    )
  }
}

export default App