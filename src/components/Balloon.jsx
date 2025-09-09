export const Balloon = ({num=99 , maincolor="teal", bottomcolor="teal"}) => (


    <div className="flex flex-col items-center duration-300 animate-wiggle">
     <div className="flex flex-col items-center duration-300 ">
     <div className="rounded-[50%] w-[120px] h-[130px] flex justify-center items-center" style={{backgroundColor: maincolor}}> <p className="font-bold text-2xl">{num}</p>
      </div>
      <div className="w-[10px] h-[10px]"style={{backgroundColor: bottomcolor}}/>
     </div>
      <div className="bg-white w-[1px] h-[100px]"/>
    </div>

)
