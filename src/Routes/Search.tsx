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
const SearchReslut = styled.h2`
  margin-top: 100px;
  margin-left: 100px;
  font-size: 24px;
  font-weight: 500;
`;

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  // console.log(data?.results);
  const SearchMovie = (title:any) => {
      if (data?.results.find((movie) => movie.title === title)) {
        return `SEARCH RESULT: ${title}`
      } else {
        return `CAN NOT FIND ${title}`
      }
  };
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <SearchReslut>{SearchMovie(keyword)}</SearchReslut>
      )}
    </Wrapper>    
  )
}
export default Search;