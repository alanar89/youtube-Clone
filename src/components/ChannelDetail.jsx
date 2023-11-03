import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
const ChannelDetail = () => {
  const [video, setVideo] = useState([]);
  const [channelDetail, setChannelDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideo(data.items);
      }
    );
  }, [id]);
  if (channelDetail == "" || video == "") return <Loading />;
  return (
    <div className="w-full dark:bg-black dark:text-white">
      <div className="flex flex-col mx-4 md:mx-auto md:w-[90vw] dark:bg-black dark:text-white">
        <div className="flex mt-36 mb-4 justify-between">
          <div className="md:flex items-center ">
            <div>
              <img
                src={channelDetail.snippet.thumbnails.medium.url}
                alt=""
                className="rounded-full h-32"
              />
            </div>
            <div className="text-sm text-gray-700 mx-4 dark:text-gray-400">
              <div className="text-2xl font-semibold dark:text-white">
                {channelDetail.snippet.title}
              </div>
              <div className="my-2">
                <strong>{channelDetail.snippet.customUrl}</strong>{" "}
                {channelDetail.statistics.subscriberCount} de suscriptores{" "}
                {channelDetail.statistics.videoCount} videos
              </div>
              <div>{channelDetail.snippet.title}</div>
            </div>
          </div>
          <div className="mx-4">
            <button className="bg-black  text-white rounded-full py-2 px-3 text-sm  font-semibold dark:bg-gray-100 dark:hover:bg-gray-300 dark:text-gray-900">
              Suscribirse
            </button>
          </div>
        </div>
        <Videos videos={video} display={true} />;
      </div>
    </div>
  );
};

export default ChannelDetail;
