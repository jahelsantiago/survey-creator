import { Component } from "react";
import anticonveptivo from "../assest/pildoras-anticonceptivas.png";
import Button from "../components/Button";
import WallPaper from "../components/WallPaper";

type props = {
  onSubmit: (data?: any) => void;
};
type state = {};

export default class Landing extends Component<props, state> {
  render() {
    return (
      <WallPaper background="noicons">
        <main className="w-screen h-screen bg-white flex justify-center content-center flex-col">
          <div className="flex flex-col items-center justify-between  gap-10 line-8">
            <h1 className="text-3xl md:text-5xl font-black mt-10 text-primary-gray text-center">
              Campaña de escasez de 
              <br/>
              <span className="text-primary-blue ">anticonceptivos</span>
            </h1>
            <img
              src={anticonveptivo}
              alt="anticonceptivo"
              className=" max-h-40"
            />
            <Button onClick={() => this.props.onSubmit()}>Responder</Button>
          </div>
        </main>
      </WallPaper>
    );
  }
}
