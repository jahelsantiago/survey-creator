import React, { Component } from "react";
import Logo from "../assest/logo.gif";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  children: React.ReactNode;
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
      </div>
    );
  }
}

export default PageContainer;
