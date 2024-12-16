"use client";
import { useParams } from "next/navigation";

// import Job from "@/components/Job";

export default function JobPage() {
  const { slug } = useParams<{
    slug: string;
  }>(); // Access the dynamic slug from the URL

  console.log("params", slug);

  return (
    <>
      {/* <Job slugname={slug} /> */}sads
    </>
  );
}
