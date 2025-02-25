import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blog } from "../models/blog";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Pagination,
} from "@mui/material";

const Home = () => {
  const [blogs, setBlogs] = useState<blog[]>([]);
  const [page, setPage] = useState(1);
  const blogsPerPage = 5; // Sayfa başına gösterilecek blog sayısı
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5274/api/Blog/getall")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("API Hatası:", err));
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Blogları sayfalama için bölüyoruz
  const startIndex = (page - 1) * blogsPerPage;
  const selectedBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      {selectedBlogs.map((blog: blog) => (
        <Card
          key={blog.id}
          sx={{ minWidth: 275, mb: 2, cursor: "pointer" }}
          onClick={() => navigate(`/blog/${blog.id}`)}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              {blog.title}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              {new Date(blog.createdTime).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">
              {blog.content.length > 50
                ? blog.content.substring(0, 50) + "..."
                : blog.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => navigate(`/blog/${blog.id}`)}>
              Daha Fazla Oku
            </Button>
          </CardActions>
        </Card>
      ))}

      {/* Sayfalama Bileşeni */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={Math.ceil(blogs.length / blogsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default Home;
