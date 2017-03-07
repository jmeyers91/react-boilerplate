import "babel-polyfill";
import "index.html";
import "base.css";
import injectTapEventPlugin from "react-tap-event-plugin";
import React from "react";
import ReactDOM from "react-dom";
import ready from "util/ready";
import Application from "components/Application";

function entry() {
  ReactDOM.render(<Application/>, document.querySelector("#app"));
}

injectTapEventPlugin();
ready.then(entry);
