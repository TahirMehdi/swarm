import { createClearCanvas } from "./draw-canvas";
import { addListener } from "./../helpers";

export function initListeners({ iDocument, clearCanvas, reDraw }) {
  const clearButton = iDocument.getElementById("clear");
  addListener(clearButton, "click", reDraw);
  /*  
  const aboutButton = localDocument.getElementById("about");
  const tooltip = localDocument.getElementById("tooltip");
  addListener(localWindow, "resize", () => redraw(localDocument, ctx, shapes));
  addListener(canvas, "mousedown", e =>
    drawCanvas(shapes, e, localWindow, localDocument, ctx)
  );
  addListener(aboutButton, "click", activateDialogWindow);
  */
}
