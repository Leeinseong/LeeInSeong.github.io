import { createContext, useState } from 'react';

export const ProjectContext = createContext({
  project: "",
  setProject: (index: any) => {}
});

const Blog = () => {
  return (
    <>
      BLOG
    </>
  );
}
  
export default Blog;