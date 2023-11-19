import { Link } from "react-router-dom";
import { MdOutlineMoreVert } from "react-icons/md";

const VideosRelated = ({ videos }) => {
  return (
    <div className="flex flex-col pt-3 mx-2 md:mx-0">
      {videos &&
        videos.map((item, index) => (
          <div
            className="flex flex-col  w-full sm:mr-0 sm:flex-row py-4  lg:p-1 group lg:max-w-md"
            key={index}
          >
            <div className="w-full">
              <Link to={`/video/${item.id.videoId}`} className=" ">
                <img
                  alt={item.snippet.title}
                  src={item.snippet.thumbnails.high.url}
                  className="lg:h-32 w-full  rounded-md object-cover"
                />
              </Link>
            </div>
            <div className="px-2 w-full md:h-32 flex   ">
              <div className="flex  text-sm flex-col ">
                <Link
                  to={`/video/${item.id.videoId}`}
                  className=" text-gray-700 dark:text-white font-semibold line-clamp-3"
                >
                  {item.snippet.title}
                </Link>

                <Link
                  to={`/channel/${item.snippet.channelId}`}
                  className=" sm:mt-2 text-xs text-gray-500 dark:text-gray-300"
                >
                  {item.snippet.channelTitle}
                </Link>
              </div>

              <div className="h-10 mt-1 ">
                <MdOutlineMoreVert className="mx-2 opacity-0  text-lg group-hover:opacity-100 hover:cursor-pointer dark:opacity-100" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default VideosRelated;
