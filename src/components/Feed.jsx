import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Principal");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  if (videos == "") return <Loading />;
  return (
    <div className="dark:bg-black dark:text-white">
      <SideBar selected={selectedCategory} setCategory={setSelectedCategory} />
      <div className="flex lg:ml-[260px]">
        <div className=" mt-32 mx-4 lg:mx-2  w-full">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
