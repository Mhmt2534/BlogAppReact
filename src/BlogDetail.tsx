import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { blog } from './models/blog';

const BlogDetail = () => {

    const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<blog | null>(null);


  useEffect(() => {
    fetch(`http://localhost:5274/api/Blog/getbyid/${id}`)
    .then((res) => res.json())
      .then((data) => {
        setBlog(data);})
      .catch((err) => console.error("API Hatası:", err));
  }, [id]);

  if (!blog) return <p className="text-center mt-10">Blog bulunamadı...</p>;



  return (
    <div className="p-6 pt-20 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold">{blog.title}</h1>
    <span className="text-gray-500">{new Date(blog.createdTime).toLocaleDateString()}</span>
    <p className="mt-4">{blog.content}</p>
  </div>
  )
}

export default BlogDetail