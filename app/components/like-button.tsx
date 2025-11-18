"use client";
import { useState } from "react";

interface LikeButtonProps {
  postId: string;
}

export function LikeButton({ postId }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes((current) => current - 1);
      setIsLiked(false);
    } else {
      setLikes((current) => current + 1);
      setIsLiked(true);
    }

    // In a real app, you'd save this to a database here
    console.log(`Post ${postId} ${isLiked ? "unliked" : "liked"}`);
  };

  return (
    <button
      onClick={handleLike}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
        isLiked
          ? "bg-red-500 text-white hover:bg-red-600"
          : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
      }`}
    >
      <span className="text-lg">{isLiked ? "❤️" : "🤍"}</span>
      <span>
        {isLiked ? "Liked" : "Like"} {likes > 0 && `(${likes})`}
      </span>
    </button>
  );
}
