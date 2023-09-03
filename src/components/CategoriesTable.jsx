import { styled } from "styled-components"
import { colors } from "../utils/colors";
import { pathProcessor } from "../utils/pathProcessor";
import { useCategories } from "../hooks/useCategories";

const ContainerTable = styled.ul`
    width: 88%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;    
    margin: 0 auto;
    margin-top: 40px;
    gap: 20px;
`;

const ContainerItem = styled.li`
    width: 180px;
    height: 60px;   
    display: flex;    
    justify-content: center;
    align-items: center;
    justify-self: right;
    align-self: center;
`;

const BlockColors = styled.div`
    width: 30px;
    height: 30px;   
    display: block;
    border-radius: 8px;    
    cursor: pointer;
`;

const H4 = styled.button`
    width: 120px;
    height: 20px;   
    display: block;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
    text-align: left;
    margin-left: 16px;

    &:hover{
        color: #d1d1d1;
    }
`;


// eslint-disable-next-line react/prop-types
const GenresTable = () => {
                    
    const dataCategories = useCategories();

    return(
        <ContainerTable>
            {
                dataCategories.map((category, index) => {
                    return(
                        <ContainerItem key={category.id}>
                            <BlockColors 
                                style={{backgroundColor: colors[index]}} 
                                onClick={() => {
                                    window.location.pathname = `category/${category.id}-${pathProcessor(category.name)}`; 
                                }}
                            ></BlockColors>
                            <H4 
                                onClick={() => {
                                    window.location.pathname = `category/${category.id}-${pathProcessor(category.name)}`; 
                                }}>{category.name}
                            </H4>
                        </ContainerItem>
                    )
                })
            }                    
        </ContainerTable>
    );
}

export { GenresTable }