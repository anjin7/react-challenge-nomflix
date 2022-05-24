import { useQuery } from "react-query";
import styled from "styled-components";
import { useLocation } from "react-router";
import { getMovies, IGetMoviesResult } from "../api";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled.div`
  background: black;
  padding-bottom: 200px;
`;
const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  console.log(data?.results);
  const SearchMovie = (keyword: string) => {
    
  };
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <h2>
          Search Result : {keyword}
        </h2>
      )}
    </Wrapper>    
  )
}
export default Search;