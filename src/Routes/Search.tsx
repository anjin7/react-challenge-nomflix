import { useLocation } from "react-router";

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);
  return (
    <h2>
      {keyword}
    </h2>
  )
}
export default Search;