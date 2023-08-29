import { styled } from "styled-components"
import { useNavigate } from "react-router-dom";

const NavBar = styled.header`
    width: 100%;
    height: 72px;
    background-color: var(--Top-Brick);
    display: flex;
    align-items: center;
    padding-left: 80px;
`;

const Logo = styled.span`
    width: 40px;
    height: 40px;
    background-image: url('/public/logoRireyesTech.svg');
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 12px;
    display: block;
`;

const ButtonHome = styled.button`
    width: 252px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
`;

const P = styled.h2`
    font-family: 'nunito', sans-serif;
    letter-spacing: 1px;
    font-size: 22px;
`

const NavigtionBar = () => {

    const navigate = useNavigate();

    function goHome(){ 
        navigate('/home');
    }

    return(
        <NavBar>           
            <ButtonHome onClick={() => goHome()}>
                <Logo></Logo>
                <P>POLARIS MOVIES</P>
            </ButtonHome>
        </NavBar>
    )
}

export { NavigtionBar }

