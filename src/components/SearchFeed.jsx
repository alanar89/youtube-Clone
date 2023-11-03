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
    <div className="dark:bg-black dark:text-white w-full">
      <div className="flex flex-col mx-4 md:mx-auto md:w-[90vw]">
        <div className="flex md:justify-end ">
          <div className=" mt-32 mx-4 md:mx-2">
            <Videos videos={videos} display={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFeed;
