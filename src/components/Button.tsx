import React, { Component } from "react";
import next from "../assest/next.svg";
import { FcNext } from "react-icons/fc";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

type State = {};

export default class Button extends Component<Props, State> {
  state = {};

  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="bg-primary-2 hover:bg-primary-3 duration-300 transition-colors px-6 py-3 rounded-full max-w-fit"
      >
        <span className="text-white text-lg font-bold uppercase">
            {this.props.children}
        </span>
      </button>
    );
  }
}
