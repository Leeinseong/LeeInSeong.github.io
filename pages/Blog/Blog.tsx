import React from "react";
import page1 from "./components/page1";

const aa = {
  comp: page1,
};

const Blog = () => {
  console.log(aa.comp);
  return (
    <>
      {aa.comp}
      BLOG
    </>
  );
};

export default Blog;
