import React, { useState } from "react";
import HeroSection from "../components/Blog/HeroSection";
import NavSection from "../components/Blog/NavSection";
import Pagecount from "../components/Blog/Pagecount";
// import SideBar from "../components/Blog/SideBar";
import BlogData from "../Data/Blog.json";
import SideSection from "../components/Blog/SideSection";

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Calculate indices for slicing the blog data
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = BlogData.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <NavSection />
      <HeroSection posts={currentPosts} />
      {/* <div className="hidden lg:block">
          <SideBar />
        </div> */}
      <Pagecount
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPosts={BlogData.length}
        postsPerPage={postsPerPage}
      />
      <div className="block lg:hidden">
        <SideSection />
      </div>
    </div>
  );
}

export default Blog;
