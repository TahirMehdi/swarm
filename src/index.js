import { reducers } from "reducers";
import { createStore } from "redux";
import app from "./app";

function init(iDocument, iWindow) {
  const canvas = iDocument.getElementById("main");
  if (canvas) {
    const context = canvas.getContext("2d");
    const container = iDocument.getElementsByClassName("container")[0];
    const store = createStore(reducers);
    store.dispatch({})
    app(api, store);
  }
}

window.onload = () => init( document, window });
