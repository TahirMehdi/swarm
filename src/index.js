import { addListener, activateDialogWindow } from "./helpers";
import { createClearCanvas, createRedraw } from "./draw/draw-canvas";
import { initListeners } from "./draw/initListeners";

function mainCycle({ clearCanvas, reDraw }) {
  clearCanvas();
  reDraw("test");
}

function init({ ...props }) {
  const { iDocument } = props;
  const canvas = iDocument.getElementById("main");
  if (canvas) {
    const context = canvas.getContext("2d");
    const container = iDocument.getElementsByClassName("container")[0];
    const params = {
      ...props,
      reDraw: createRedraw(context),
      clearCanvas: createClearCanvas(container, canvas)
    };
    initListeners(params);
    mainCycle(params);
  }
}

/**
 * start program on window load
 * */
window.onload = () => init({ iDocument: document, iWindow: window });
