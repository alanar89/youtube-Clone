import { Link } from "react-router-dom";

const Videos = ({ videos }) => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]  w-full gap-4">
        {videos &&
          videos.map((item, index) => (
            <div
              className="rounded-lg pb-2 shadow-sm shadow-indigo-100 dark:shadow-black w-full"
              key={index}
            >
              <Link to={`/video/${item.id.videoId}`} className="">
                <img
                  alt={item.snippet.title}
                  src={item.snippet.thumbnails.high.url}
                  className="h-48 w-full rounded-xl object-cover"
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
