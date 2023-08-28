import { styled } from "styled-components"


const HeaderBar = styled.header`
    width: 100%;
    height: 68px;
    background-color: #0D1F23;
    display: flex;
    align-items: center;
    padding-left: 80px;
`

const Header = () => {
    return(
        <HeaderBar>
            <h2>POLARIS MOVIES</h2>
            <span></span>
        </HeaderBar>
    )
}

export { Header }

