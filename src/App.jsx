import NavBar1 from "./components/NavBar1/NavBar1";
import dataNavBar from "./data";
import GlobalStyle from "./style/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar1 data={dataNavBar}/>
      <h1>Vite + React</h1>
    </>
  );
};

export default App;
