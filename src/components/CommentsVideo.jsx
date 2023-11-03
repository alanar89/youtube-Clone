import { Link } from "react-router-dom";
import { MdOutlineThumbUpAlt, MdOutlineThumbDownAlt } from "react-icons/md";

const VideoDetail = ({ comment }) => {
  return (
    <>
      <div className="p-2 text-gray-900 text-xl dark:text-white">
        Comentarios
      </div>

      {comment &&
        comment.map((item, index) => (
          <div className="flex my-2 " key={index}>
            <div className="mr-4 w-12">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
                className="h-10 w-10  rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col text-sm text-gray-900 w-full dark:text-white">
              <div className="font-semibold text-xs pb-1">
                @{item.snippet.topLevelComment.snippet.authorDisplayName}
              </div>
              <div className="mr-2">
                {item.snippet.topLevelComment.snippet.textDisplay}
              </div>
              <div className="flex items-center py-1">
                <MdOutlineThumbUpAlt className=" text-xl mx-2 hover:cursor-pointer" />
                {item.snippet.topLevelComment.snippet.likeCount > 0
                  ? item.snippet.topLevelComment.snippet.likeCount
                  : ""}
                <MdOutlineThumbDownAlt className=" text-xl mx-4 hover:cursor-pointer" />
                <span className="hover:bg-gray-200 p-2 text-xs  hover:cursor-pointer rounded-full">
                  Responder
                </span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
export default VideoDetail;
