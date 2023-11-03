import { Link } from "react-router-dom";
import { MdOutlineMoreVert } from "react-icons/md";

const VideosRelated = ({ videos }) => {
  return (
    <div className="flex flex-col">
      {videos &&
        videos.map((item, index) => (
          <div
            className="flex flex-col mr-4 sm:mr-0 sm:flex-row py-4 lg:pb-0 group"
            key={index}
          >
            <div className=" lg:basis-2/5 sm:basis-1/3">
              <Link to={`/video/${item.id.videoId}`} className=" ">
                <img
                  alt={item.snippet.title}
                  src={item.snippet.thumbnails.high.url}
                  className="md:h-32 w-full  rounded-md object-cover"
                />
              </Link>
            </div>
            <div className="px-2 lg:basis-3/5 sm:basis-2/3 ">
              <div className="flex  text-sm  ">
                <Link to={`/video/${item.id.videoId}`} className=" ">
                  <div className=" text-gray-700 dark:text-white font-semibold basis-11/12 ">
                    {item.snippet.title}
                  </div>
                </Link>
                <div className="h-10 mt-1 basis-1/12">
                  <MdOutlineMoreVert className="mx-2 opacity-0  text-lg group-hover:opacity-100 hover:cursor-pointer dark:opacity-100" />
                </div>
              </div>
              <Link to={`/channel/${item.snippet.channelId}`}>
                <div className=" sm:mt-2 text-xs text-gray-500 dark:text-gray-300">
                  {item.snippet.channelTitle}
                </div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default VideosRelated;
