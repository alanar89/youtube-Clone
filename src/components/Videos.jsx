import { Link } from "react-router-dom";

const Videos = ({ videos, display }) => {
  return (
    <div className={`${!display ? "md:w-[75vw] lg:w-[80vw]" : ""}`}>
      <div
        className={`${
          !display
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 w-full gap-4"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-full gap-4"
        }`}
      >
        {videos &&
          videos.map((item, index) => (
            <div
              className="rounded-lg pb-2 shadow-sm shadow-indigo-100 dark:shadow-black"
              key={index}
            >
              <Link to={`/video/${item.id.videoId}`} className="">
                <img
                  alt={item.snippet.title}
                  src={item.snippet.thumbnails.high.url}
                  className="h-56 w-full rounded-md object-cover"
                />
                <div className="font-bold mt-2">{item.snippet.title}</div>
              </Link>
              <Link to={`/channel/${item.snippet.channelId}`}>
                <div className=" mt-2 text-gray-600 dark:text-gray-400">
                  {item.snippet.channelTitle}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Videos;
