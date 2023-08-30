import { styled } from "styled-components"
import { colors } from "../utils/colors";
import { pathProcessor } from "../utils/pathProcessor";
import { useCategories } from "../hooks/useCategories";

const Table = styled.div`
    width: 80%;
    height: 300px;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(4, 25%);
    align-items: center;    
    margin: 0 auto;
    margin-top: 40px;
`;

const BlockColors = styled.div`
    width: 30px;
    height: 30px;   
    display: block;
    border-radius: 8px;
`;

const H4 = styled.button`
    width: 80%;
    height: 20px;   
    display: block;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
    text-align: left;
    margin-left: 16px;
`;

const ContainerItem = styled.div`
    width: 80%;
    height: 100%;   
    display: flex;    
    justify-content: center;
    align-items: center;
    justify-self: right;
    align-self: center;
`;


// eslint-disable-next-line react/prop-types
const GenresTable = () => {
                    
    const dataCategories = useCategories();

    return(
        <Table>
            {
                dataCategories.map((category, index) => {
                    return(
                        <ContainerItem key={category.id}>
                            <BlockColors style={{backgroundColor: colors[index]}}></BlockColors>
                            <H4 onClick={() => {
                                    window.location.pathname = `category/${category.id}-${pathProcessor(category.name)}`; 
                                }} >{category.name}
                            </H4>
                            <p></p>
                        </ContainerItem>
                    )
                })
            }                    
        </Table>
    );
}

export { GenresTable }