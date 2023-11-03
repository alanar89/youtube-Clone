import {
  MdOutlineHome,
  MdOutlineMusicNote,
  MdOutlineLocalFireDepartment,
  MdOutlineMovie,
  MdOutlineSensors,
  MdOutlineVideogameAsset,
  MdOutlineNewspaper,
  MdOutlineLightbulb,
  MdHome,
  MdMusicNote,
  MdLocalFireDepartment,
  MdMovie,
  MdSensors,
  MdVideogameAsset,
  MdNewspaper,
  MdLightbulb,
} from "react-icons/md";

import { AiOutlineTrophy, AiTwotoneTrophy } from "react-icons/ai";
const SideBar = ({ selected, setCategory }) => {
  return (
    <div className=" w-full bg-white fixed mt-16 md:mt-32 md:h-full  md:w-[20vw] lg:w-[16vw]  z-20 dark:bg-black dark:text-white">
      <div className=" ">
        <div className=" h-16 hidden md:block  items-center justify-center w-full p-2 border-b border-gray-100 dark:border-gray-500 ">
          <div
            onClick={() => setCategory("Principal")}
            className={`dark:text-white flex rounded-lg w-full md:p-2 items-center  group text-sm ${
              selected === "Principal"
                ? "bg-gray-200 dark:bg-gray-800"
                : "hover:dark:bg-gray-800 hover:cursor-pointer"
            }  text-gray-900`}
          >
            {selected === "Principal" ? (
              <MdHome className="mx-4 text-2xl" />
            ) : (
              <MdOutlineHome className="mx-4 text-2xl" />
            )}
            Principal
          </div>
        </div>
        <div className="md:px-2 ">
          <ul className="space-y-1  p-4 md:px-0  md:py-4 flex md:block overflow-x-auto  ">
            <li className=" mx-4  hidden md:block">Explorar</li>
            <li
              onClick={() => setCategory("Tendencias")}
              className={`dark:text-white flex rounded-lg  w-full md:p-2 items-center group text-sm ${
                selected === "Tendencias"
                  ? "bg-gray-200 dark:bg-gray-800"
                  : "hover:dark:bg-gray-800 hover:cursor-pointer"
              }  text-gray-900`}
            >
              {selected === "Tendencias" ? (
                <MdLocalFireDepartment className="mx-4 text-2xl" />
              ) : (
                <MdOutlineLocalFireDepartment className="mx-4 text-2xl" />
              )}
              Tendencias
            </li>
            <li
              onClick={() => setCategory("Musica")}
              className={`  dark:text-white flex rounded-lg  w-full md:p-2 items-center group text-sm ${
                selected === "Musica"
                  ? "bg-gray-200 dark:bg-gray-800"
                  : "hover:dark:bg-gray-800 hover:cursor-pointer"
              }  text-gray-900`}
            >
              {selected === "Musica" ? (
                <MdMusicNote className="mx-4 text-2xl" />
              ) : (
                <MdOutlineMusicNote className="mx-4 text-2xl" />
              )}
              Música
            </li>
            <li
              onClick={() => setCategory("Peliculas")}
              className={`dark:text-white flex rounded-lg  w-full md:p-2 items-center group  text-sm ${
                selected === "Peliculas"
                  ? "bg-gray-200 dark:bg-gray-800"
                  : "hover:dark:bg-gray-800 hover:cursor-pointer"
              }  text-gray-900`}
            >
              {selected === "Peliculas" ? (
                <MdMovie className="mx-4 text-2xl" />
              ) : (
                <MdOutlineMovie className="mx-4 text-2xl" />
              )}
              Películas
            </li>
            <li
              onClick={() => setCategory("En vivo")}
              className={`dark:text-white flex rounded-lg  w-full md:p-2 items-center group  text-sm ${
                selected === "En vivo"
                  ? "bg-gray-200 dark:bg-gray-800"
                  : "hover:dark:bg-gray-800 hover:cursor-pointer"
              }  text-gray-900`}
            >
              {selected === "En vivo" ? (
                <MdSensors className="mx-4 text-2xl" />
              ) : (
                <MdOutlineSensors className="mx-4 text-2xl" />
              )}
              Directos
            </li>
            <li
              onClick={() => setCategory("Videojuegos")}
              className={`dark:text-white flex rounded-lg  w-full md:p-2 items-center group text-sm ${
                selected === "Videojuegos"
                  ? "bg-gray-200 dark:bg-gray-800"
                  : "hover:dark:bg-gray-800 hover:cursor-pointer"
              }  text-gray-900`}
            >
              {selected === "Videojuegos" ? (
                <MdVideogameAsset className="mx-4 text-2xl" />
              ) : (
                <MdOutlineVideogameAsset className="mx-4 text-2xl" />
              )}
              Videojuegos
            </li>
            <li
              onClick={() => setCategory("Noticias")}
              className={`dark:text-white flex rounded-lg  w-full md:p-2 items-center group text-sm ${
                selected === "Noticias"
                  ? "bg-gray-200 dark:bg-gray-800"
                  : "hover:dark:bg-gray-800 hover:cursor-pointer"
              }  text-gray-900`}
            >
              {selected === "Noticias" ? (
                <MdNewspaper className="mx-4 text-2xl" />
              ) : (
                <MdOutlineNewspaper className="mx-4 text-2xl" />
              )}
              Noticias
            </li>
            <li
              onClick={() => setCategory("Deportes")}
              className={` dark:text-white flex rounded-lg  w-full md:p-2 items-center group text-sm ${
                selected === "Deportes"
                  ? "bg-gray-200 dark:bg-gray-800"
                  : "hover:dark:bg-gray-800 hover:cursor-pointer"
              }  text-gray-900`}
            >
              {selected === "Deportes" ? (
                <AiTwotoneTrophy className="mx-4 text-2xl" />
              ) : (
                <AiOutlineTrophy className="mx-4 text-2xl" />
              )}
              Deportes
            </li>
            <li
              onClick={() => setCategory("Aprendizaje")}
              className={`dark:text-white flex rounded-lg  w-full md:p-2 text-sm group items-center ${
                selected === "Aprendizaje"
                  ? "bg-gray-200 dark:bg-gray-800"
                  : "hover:dark:bg-gray-800 hover:cursor-pointer"
              }  text-gray-900`}
            >
              {selected === "Aprendizaje" ? (
                <MdLightbulb className="mx-4 text-2xl" />
              ) : (
                <MdOutlineLightbulb className="mx-4 text-2xl" />
              )}
              Aprendizaje
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
