import Navigation from "./Components/Navigation";
import Widgets from "./Components/Widgets";
import SideBarNavigation from "./Components/SideBarNavigation";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-20 h-[960px]">
        <SideBarNavigation />
      </div>
      <div className='w-full h-full'>
        <Navigation />
        <Widgets />
      </div>
    </div>

  );
}
{/* <div style={{ fontSize: "0.8vw" }} className='flex flex-col gap-2 pt-3' >
                        <div className='flex gap-2 border-b w-full'>
                            <div className='w-8 text-right border-b-2 border-indigo-500 text-indigo-500'>7d</div>
                            <div className='w-8 text-right'>14d</div>
                            <div className='w-8 text-right'>30d</div>
                        </div>
                        <div className='px-1'>

                            <TableDataSmall />
                        </div>
                    </div> */}