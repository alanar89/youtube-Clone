const Loading = () => {
  return (
    <div className="dark:bg-black w-full h-screen min-h-screen items-center flex justify-center">
      <span className=" animate-spin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          overflow="visible"
          fill="#ce0014"
          stroke="#ff0000"
        >
          <defs>
            <circle
              id="loader"
              r="4"
              cx="50"
              cy="50"
              transform="translate(0 -30)"
            />
          </defs>
          <use xlinkHref="#loader" transform="rotate(40 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="0.22s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#loader" transform="rotate(80 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="0.44s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#loader" transform="rotate(120 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="0.67s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#loader" transform="rotate(160 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="0.89s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#loader" transform="rotate(200 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="1.11s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#loader" transform="rotate(240 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="1.33s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#loader" transform="rotate(280 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="1.56s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#loader" transform="rotate(320 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="1.78s"
              repeatCount="indefinite"
            ></animate>
          </use>
          <use xlinkHref="#loader" transform="rotate(360 50 50)">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="2.00s"
              repeatCount="indefinite"
            ></animate>
          </use>
        </svg>
      </span>
    </div>
  );
};

export default Loading;
