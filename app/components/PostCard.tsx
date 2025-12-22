"use client";
interface Post {
  id: string;
  author: { name: string; handle: string };
  content: string;
  category: string;
  likes: number;
}
interface Props { post: Post; onLike: (id: string) => void; }
export default function PostCard({ post, onLike }: Props) {
  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg">
      <div className="flex justify-between mb-2">
        <div className="font-bold">{post.author.name}</div>
        <span className="text-gray-500 text-sm">{post.author.handle}</span>
      </div>
      <span className={`inline-block px-3 py-1 rounded text-sm mb-3 ${post.category === 'Tech' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
        {post.category}
      </span>
      <p className="text-gray-900 mb-4">{post.content}</p>
      <button onClick={() => onLike(post.id)} className="text-red-600 hover:text-red-700 font-semibold">
        ❤️ {post.likes}
      </button>
    </div>
  );
}
