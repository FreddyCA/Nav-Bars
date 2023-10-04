import styled from "styled-components";
import LogoAlura from "../../../assets/logoAlura/logoAlura.png";

const LogoStyle = styled.div`
  height: 100px;
  width: 150px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImgStyle = styled.img`
  width: 100%;
  height: min-content;
`;

const Logo = () => {
  return (
    <LogoStyle>
      <LogoImgStyle src={LogoAlura} alt="Logo aluraflix" />
    </LogoStyle>
  );
};

export default Logo;
