import PostItem from "@/components/PostItem";
import getPostMetadata from "@/components/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata();
  const PostPreviews = postMetadata.map((post) => (
    <PostItem key={post.slug} {...post} />
  ));
  return (
    <div className="container mx-auto flex justify-center">
      <div className="py-32 px-8 space-y-4">{PostPreviews}</div>
    </div>
  );
}
