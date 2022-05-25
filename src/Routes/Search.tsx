import { useQuery } from "react-query";
import styled from "styled-components";
import { useLocation } from "react-router";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
// import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.black.veryDark};
  padding-bottom: 200px;
`;
const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchResult = styled.div`
  padding-top: 100px;
  padding-left: 100px;
  font-size: 24px;
  font-weight: 500;
`;
const Searched = styled.div`
  width: 60vw;
  margin: 20px auto;
`;
const SearchCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 600px;
`;
const SearchOverview = styled.div`
  margin-top: 20px;
  line-height: 1.75;
  font-size: 18px;
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
        return (`SEARCH RESULT: ${title}`)
      } else {
        return (`CAN NOT FIND ${title}`)
      }
  };

  const isSearched = data?.results.find((movie) => movie.title === keyword)
  
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <SearchResult>{SearchMovie(keyword)}</SearchResult>
      )};

      {isSearched ? (
        <Searched>          
          <SearchCover
            style={{
              backgroundImage: `url(${makeImagePath(isSearched.backdrop_path)})`,
            }}
          />
          <SearchOverview>{isSearched.overview}</SearchOverview>
        </Searched>
      ): null}
    </Wrapper>    
  )
}
export default Search;