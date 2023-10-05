import { useState, useEffect } from "react";
import NavBar1 from "./components/NavBar1/NavBar1";
import dataNavBar from "./data";
import GlobalStyle from "./style/reset";

const App = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [desktop, setDesktop] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);

      if (newWidth > 992) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      {desktop !== null && <NavBar1 desktop={desktop} data={dataNavBar}/>}
      
    </>
  );
};

export default App;
