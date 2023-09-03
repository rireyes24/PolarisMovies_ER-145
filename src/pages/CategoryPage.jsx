import { MovieContainerTable } from "../components/MovieContainerTable";
import { useMovieFilterGenres } from "../hooks/useMovieFilterGenres";
import { Pagination } from "antd";


const CategoryPage = () => {

  const {discoverData, setNumberPage, categoryName} = useMovieFilterGenres();
 
  function pagination(page){
    setNumberPage(page);
  }

  return(
      <>
      <h1>{categoryName}</h1>
        <MovieContainerTable
          movieData={discoverData}
        ></MovieContainerTable>
        <Pagination 
          style={{backgroundColor: "white"}} 
          defaultCurrent={1} 
          total={5000} 
          showSizeChanger={false}  
          onChange={pagination} 
          showQuickJumper={true}                 
        ></Pagination>
      </>
  );
}

export { CategoryPage }