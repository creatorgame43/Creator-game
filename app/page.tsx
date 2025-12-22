"use client";
import { useState } from "react";
import Navigation from "./components/Navigation";
import PostCard from "./components/PostCard";

interface Post {
  id: string;
  author: { name: string; handle: string };
  content: string;
  category: string;
  likes: number;
}

const mockPosts: Post[] = [
  {
    id: "1",
    author: { name: "Juma Mkono", handle: "@jumamkono" },
    content: "🔧 Ujuzi wa kukamatia bugs kwenye React. Tumia DevTools!",
    category: "Tech",
    likes: 245,
  },
  {
    id: "2",
    author: { name: "Amina Mtaji", handle: "@aminamtaji" },
    content: "💡 Kuanza biashara ya online: 1. Design, 2. Marketing, 3. Kuuza",
    category: "Biashara",
    likes: 512,
  },
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const handleLike = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Swahili Loop 📚</h1>
        <button className="w-full mb-8 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
          ✍️ Andika Funzo
        </button>
        <div className="space-y-6">
          {posts.map(post => (
            <PostCard key={post.id} post={post} onLike={handleLike} />
          ))}
        </div>
      </div>
    </div>
  );
}
