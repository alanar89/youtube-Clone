import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import Videos from "./Videos";
import Loading from "./Loading";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  if (videos == "") return <Loading />;
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="flex">
        <div className=" mt-32 mx-4 lg:mx-2 w-full">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default SearchFeed;
