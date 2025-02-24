import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { blog } from '../models/blog';

const Home = () => {
    const [blogs,setBlogs]=useState([]);

    useEffect(() => {
        fetch("http://localhost:5274/api/Blog/getall")
          .then((res) => res.json())
          .then((data) =>setBlogs(data))
          .catch((err) => console.error("API Hatası:", err));
      }, []);
    

  return (
    <div> <div className="p-6 max-w-3xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Bloglar</h1>
    {blogs.map((blog:blog) => (
      <Link to={`/blog/${blog.id}`} key={blog.id} className="block border-b py-4 hover:bg-gray-100">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        <p className="text-gray-600">{blog.content.substring(0, 100)}...</p>
        <span className="text-sm text-gray-400">{new Date(blog.createdTime).toLocaleDateString()}</span>
      </Link>
    ))}
  </div></div>
  )
}

export default Home