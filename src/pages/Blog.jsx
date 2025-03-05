import React, { useState } from "react";
import HeroSection from "../components/Blog/HeroSection";
import NavSection from "../components/Blog/NavSection";
import Pagecount from "../components/Blog/Pagecount";
import SideBar from "../components/Blog/SideBar";
import BlogData from "../Data/Blog.json";

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

      <div className="grid lg:grid-cols-2 gap-6 w-full">
        <div>
          <HeroSection posts={currentPosts} />
        </div>
        <div className="hidden lg:block">
          <SideBar />
        </div>
      </div>

      <Pagecount
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPosts={BlogData.length}
        postsPerPage={postsPerPage}
      />

      {/* Move SideBar below Pagecount on small screens */}
      <div className="lg:hidden">
        <SideBar />
      </div>
    </div>
  );
}

export default Blog;
