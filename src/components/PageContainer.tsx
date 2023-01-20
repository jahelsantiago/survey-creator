import React, { Component } from "react";
import Logo from "../assest/logo.gif";
import { Button } from "@material-tailwind/react";
import {FcPrevious} from "react-icons/fc";

type Props = {
  children: React.ReactNode;
  prevPage?: () => void;
};



type State = {};

class PageContainer extends Component<Props, State> {
  render() {
    return (
      <div className="w-screen h-screen flex flex-col">
        <header className="w-full h-28 bg-gray-100 shadow-md shadow-blue-100">
          <div className="flex items-center justify-center h-full px-4">
            <img src={Logo} alt="logo" className="w-16 h-16 mr-2" />
          </div>
        </header>
        <main className="w-full flex-1 bg-white flex items-center justify-center content-center ">
          {this.props.children}
        </main>
        <footer>
          <div className="flex flex-col gap-5 w-fit justify-center items-center m-5">
            <Button className="p-1" variant="outlined" onClick={this.props.prevPage}>
              <FcPrevious className="text-4xl text-white"/>
            </Button>
          </div>
        </footer>
      </div>
    );
  }
}

export default PageContainer;
