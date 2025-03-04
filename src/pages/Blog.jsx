import HeroSection from "../components/Blog/HeroSection";
import NavSection from "../components/Blog/NavSection";
import Pagecount from "../components/Blog/Pagecount";
import SideBar from "../components/Blog/SideBar";

function Blog() {
  return (
    <div>
      <NavSection />

      <div className="grid lg:grid-cols-2 gap-6 w-full">
        <div>
          <HeroSection />
        </div>
        <div className="hidden lg:block">
          <SideBar />
        </div>
      </div>

      <Pagecount />

      {/* Move SideBar below Pagecount on small screens */}
      <div className="lg:hidden">
        <SideBar />
      </div>
    </div>
  );
}

export default Blog;
