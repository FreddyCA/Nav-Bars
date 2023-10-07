import styled from "styled-components";
import LogoImg from "../../../assets/logoAlura/logoAlura.png"

const LogoContentStyle = styled.div`
height: 100px;
width: min-content;
background-color: yellow;
`
const LogoImgStyle = styled.img`
height: min-content;
`

const LogoContent = () => {

    return <LogoContentStyle>
        <LogoImgStyle src={LogoImg} alt="Logo alura" />
    </LogoContentStyle>
}

export default LogoContent
