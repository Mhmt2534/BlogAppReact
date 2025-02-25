import { useState } from "react";
import { TextField, Button, Container, Typography, Paper, CircularProgress } from "@mui/material";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const blogData = {
      title,
      content,
      createdTime: new Date().toISOString(), // Otomatik tarih ekleme
    };

    try {
      const response = await fetch("http://localhost:5274/api/Blog/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        throw new Error("Blog eklenirken hata oluştu.");
      }

      setSuccess(true);
      setTitle("");
      setContent("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Yeni Blog Ekle
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Başlık"
            fullWidth
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="İçerik"
            fullWidth
            required
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{ mb: 2 }}
          />
          {error && <Typography color="error">{error}</Typography>}
          {success && <Typography color="success.main">Blog başarıyla eklendi!</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Ekle"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddBlog;
