import { useEffect, useState } from "react";
import { styled } from "styled-components"
import { getCategories } from '../api/getCategories'
import { colors } from "../utils/colors";

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

const H4 = styled.h4`
    width: 80%;
    height: 20px;   
    display: block;
`;


const ContainerItem = styled.div`
    width: 80%;
    height: 100%;   
    display: flex;    
    justify-content: center;
    align-items: center;
    justify-self: center;
`;


const GenresTable = () => {
                    
    const [dataCategories, setDataCategories] = useState([]);

    useEffect(() => {
        getCategories()
          .then(categories => {
            setDataCategories(categories.genres);
          })
          .catch(error => {
            console.error(error);
          })
      }, [])

    return(
        <Table>
            {
                dataCategories.map((category, index) => {
                    return(
                        <ContainerItem key={category.id}>
                            <BlockColors style={{backgroundColor: colors[index]}}></BlockColors>
                            <H4 >{category.name}</H4>
                            <p></p>
                        </ContainerItem>
                    )
                })
            }                    
        </Table>
    );
}

export { GenresTable }