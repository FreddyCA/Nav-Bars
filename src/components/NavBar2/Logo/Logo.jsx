import styled from "styled-components";
import LogoImg from "../../../assets/logoAlura/logoAlura.png";

const LogoContentStyle = styled.div`
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

const LogoContent = () => {
  return (
    <LogoContentStyle>
      <LogoImgStyle src={LogoImg} alt="Logo alura" />
    </LogoContentStyle>
  );
};

export default LogoContent;
