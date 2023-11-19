import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import VideosRelated from "./VideosRelated";
import CommentsVideo from "./CommentsVideo";
import {
  MdOutlineThumbUpAlt,
  MdOutlineThumbDownAlt,
  MdOutlineMoreVert,
  MdOutlineShare,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Loading from "./Loading";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const [hashtag, setHashtag] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
      setHashtag(data.items[0].snippet.localized.title.indexOf("#"));
    });
    fetchFromAPI(
      `commentThreads?part=snippet&videoId=${id}&maxResults=100`
    ).then((data) => {
      setComment(data.items);
    });
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);
  if (videoDetail == "" || videos == "" || hashtag == "" || comment == "")
    return <Loading />;
  return (
    <div className="w-full dark:bg-black dark:text-white">
      <div className="flex flex-col lg:flex-row md:w-[85vw] xl:w-[90vw] xl:max-w-[90vw]  md:mx-auto dark:bg-black dark:text-white">
        <div className=" mt-20 mx-auto md:mr-4 flex flex-col w-full">
          <div className="flex h-[30vh] sm:h-[40vh]  md:h-[70vh] lg:h-[60vh] xl:h-[75vh] 2xl:h-[80vh] lg:w-[55vw] xl:w-[65vw] 2xl:w-[70vw] ">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player "
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
          <div className="text-lg font-bold pt-2 mx-2 md:mx-0">
            {hashtag > 0
              ? videoDetail.snippet.localized.title.slice(0, hashtag)
              : videoDetail.snippet.localized.title}
          </div>
          {hashtag > 0 && (
            <div className="text-lg font-bold text-blue-700 mx-2 md:mx-0">
              {videoDetail.snippet.localized.title.slice(hashtag)}
            </div>
          )}
          <div className="block md:flex md:justify-between py-2 mx-2 md:mx-0">
            <div className="flex items-center mb-3 md:mb-0 ">
              <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                <div className="font-semibold">
                  {videoDetail.snippet.channelTitle}
                </div>
              </Link>
              <div>
                <button className="bg-black  text-white rounded-full py-2 px-3 text-sm  font-semibold dark:bg-gray-100 dark:hover:bg-gray-300 dark:text-gray-900  mx-4">
                  Suscribirse
                </button>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-100 text-sm p-2 rounded-full flex items-center  dark:bg-gray-800">
                <MdOutlineThumbUpAlt className=" text-xl mx-2 hover:cursor-pointer" />
                {videoDetail.statistics.likeCount > 0
                  ? videoDetail.statistics.likeCount
                  : ""}{" "}
                Me gusta
                <MdOutlineThumbDownAlt className=" text-xl mx-2 hover:cursor-pointer" />
              </div>
              <div className="bg-gray-100 text-sm p-2 rounded-full flex items-center mx-2  dark:bg-gray-800">
                <MdOutlineShare className=" text-xl mx-2 hover:cursor-pointer" />
                Compartir
              </div>
              <div className="bg-gray-100 text-sm p-1 rounded-full flex items-center  dark:bg-gray-800">
                <MdOutlineMoreVert className="text-xl  mx-2 hover:cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 text-sm mx-2 md:mx-0 p-3 text-gray-900  dark:text-white dark:bg-gray-800 rounded-lg mb-2 flex flex-col">
            <div className="font-semibold mb-2">
              {videoDetail.statistics.viewCount} Visualizaciones{"  "}
              {new Date(videoDetail.snippet.publishedAt).toLocaleDateString(
                "es-AR",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                }
              )}
            </div>
            <div>{videoDetail.snippet.localized.description}</div>
          </div>
          <div className="mx-2 md:mx-0">
            <CommentsVideo comment={comment} />
          </div>
        </div>
        <div className="  lg:mt-16 flex  w-full">
          <VideosRelated videos={videos} />
        </div>
      </div>
    </div>
  );
};
export default VideoDetail;
