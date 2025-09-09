export const HomeVideos = (props) => {
  return (
    <div className="w-[385px] h-[270px]">
      <img src={props.img} className=" w-[385px] h-[216px] rounded-3xl" />
      <div id="descDiv" className="w-[385px] mt-[2px] flex gap-[10px]">
        <img
          className="w-[36px] h-[36px] rounded-3xl "
          src={props.channelImg}
        />
        <div>
          <div className="flex justify-around items-center gap-[60px]">
            <h1 className="text-[14px] font-display font-semibold">
              {props.titleH1}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </div>
          <div className="flex gap-[4px] items-center">
            <p className="text-[11px]">{props.channelName}</p>
            <svg
              className="s"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="16"
              viewBox="0 0 16 16"
              width="16" 
              focusable="false"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                d="M13.053 5.906a2.1 2.1 0 01.002 4.188 2.1 2.1 0 01-2.963 2.961 2.1 2.1 0 01-4.189.003 2.1 2.1 0 01-2.96-2.964 2.1 2.1 0 01-.002-4.188 2.1 2.1 0 012.962-2.961 2.1 2.1 0 014.189-.001 2.1 2.1 0 012.961 2.962ZM7.999 4v4.668a1.75 1.75 0 101 1.582V6h2V4h-3Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="text-[11px]">{props.views}</p>
        </div>
      </div>
    </div>
  );
};

{
  /*
    <div className="flex items-center justify-between">
    <h1 id="titleH1" className="text-[14px] font-display font-semibold">
      {props.titleH1}
    </h1>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-three-dots-vertical"
      viewBox="0 0 16 16"
    >
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </svg>
  </div>
  <div>
          <p className="text-[12px] opacity-70 font-display">{props.views}</p>
        </div>
        <div className="flex gap-4 my-[13px]">
          <img className="w-[20px] h-[20px] rounded-3xl " src={props.channelImg} />
          <p className="text-[12px] opacity-70 font-display">{props.channelName}</p>
          <svg
            className="s"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            focusable="false"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              d="M13.053 5.906a2.1 2.1 0 01.002 4.188 2.1 2.1 0 01-2.963 2.961 2.1 2.1 0 01-4.189.003 2.1 2.1 0 01-2.96-2.964 2.1 2.1 0 01-.002-4.188 2.1 2.1 0 012.962-2.961 2.1 2.1 0 014.189-.001 2.1 2.1 0 012.961 2.962ZM7.999 4v4.668a1.75 1.75 0 101 1.582V6h2V4h-3Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <p className="text-[12px] opacity-70 font-display">{props.info}</p>
*/
}
