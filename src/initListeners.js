import { createClearCanvas } from "./render";
import { addListener } from "./helpers";

export function initListeners({ iDocument, clearCanvas, reDraw, context }) {
  const clearButton = iDocument.getElementById("clear");
  addListener(clearButton, "click", clearCanvas);
  const aboutButton = iDocument.getElementById("about");
  addListener(aboutButton, "click", reDraw);
  // addListener(localWindow, "resize", () => redraw(iDocument, context, shapes));
  /*  
  const aboutButton = localDocument.getElementById("about");
  const tooltip = localDocument.getElementById("tooltip");
  addListener(canvas, "mousedown", e =>
    drawCanvas(shapes, e, localWindow, localDocument, ctx)
  );
  addListener(aboutButton, "click", activateDialogWindow);
  */
}
