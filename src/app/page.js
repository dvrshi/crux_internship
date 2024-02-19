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
