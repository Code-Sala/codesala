import HeroSection from "../components/Blog/HeroSection";
import NavSection from "../components/Blog/NavSection";
import Pagecount from "../components/Blog/Pagecount";
import SideBar from "../components/Blog/SideBar";

function Blog() {
  return (
    <div>
      <NavSection />

      <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full  ">
        <div>
          <HeroSection />
        </div>
        <div>
          <SideBar />
        </div>
      </div>
      <Pagecount />
    </div>
  );
}

export default Blog;
