let previousClass = "";

const setBodyColor = (className: string) => {
  if (previousClass) {
    document.body.classList.remove(previousClass);
  }
  previousClass = className;
  document.body.classList.add(className);
};

export default setBodyColor;
