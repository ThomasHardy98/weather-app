let previousClass = "";

// Helper function used to change the body's background colour dependant on local time of day
export const setBodyColor = (className: string) => {
  if (previousClass !== "") {
    document.body.classList.remove(previousClass);
  }
  previousClass = className;
  document.body.classList.add(className);
};
