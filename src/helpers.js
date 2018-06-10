/**
 *  useful reusable snippet
 * */
export function addListener(source, eventName, cb) {
  source.addEventListener(eventName, cb);
  return () => source.removeEventListener(eventName, cb);
}

export const activateDialogWindow = dialogWindow => () => {
  //const dialogWindow = document.getElementById("dialog");
  dialogWindow.classList.add("active");
  const removeActive = addListener(dialogWindow, "click", () => {
    dialogWindow.classList.remove("active");
    removeActive();
  });
};
