"use client";
import { useParams } from "next/navigation";
import Blog from "@/components/Blog";
import React from "react";

const BlogPage = () => {
    const { slug } = useParams<{
        slug: string;
      }>(); // Access the dynamic slug from the URL
    
      console.log("params", slug);
  return (
    <div className="bg-gradient-to-r to-[#141E4C] via-[#00000040] from-[#0f1015] py-20">
      <Blog/>
    </div>
  );
};

export default BlogPage;
