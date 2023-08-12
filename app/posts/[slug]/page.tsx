import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => {
    slug: post.slug;
  });
};

export default function Posts(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const x = new Date();
  return (
    <>
      <div className="container flex justify-center">
        <div className="pt-32 px-8">
          <h1 className="text-2xl font-semibold">{post.data.title}</h1>
          <div className="prose w-full">
            <Markdown>{post.content}</Markdown>
            <footer className="mt-4">
              Copyright &copy; {x.getFullYear()}{" "}
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
