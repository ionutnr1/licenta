const utilizatorCurent = () => {
  return JSON.parse(localStorage.getItem("utilizatorCurent"));
};

export default utilizatorCurent;
