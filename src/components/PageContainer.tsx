import React, { Component } from "react";
import Logo from "../assest/logo.gif";
import { Button } from "@material-tailwind/react";
import { FcPrevious } from "react-icons/fc";
import WallPaper from "./WallPaper";

type Props = {
  children: React.ReactNode;
  prevPage?: () => void;
};

type State = {};

class PageContainer extends Component<Props, State> {
  render() {
    return (
      <WallPaper background="noicons">
        <div className="w-screen h-screen flex flex-col relative">
          <main className="w-full flex-1 bg-white flex items-center justify-center content-center ">
            {this.props.children}
          </main>
          <div className="flex flex-col gap-5 w-fit justify-center items-center m-5 absolute top-1 left-1 md:top-10 md:left-10 z-10">
            <Button
              className="p-2 rounded-full"
              variant="outlined"
              onClick={this.props.prevPage}
            >
              <FcPrevious className="text-4xl text-white" />
            </Button>
          </div>
        </div>
      </WallPaper>
    );
  }
}

export default PageContainer;
