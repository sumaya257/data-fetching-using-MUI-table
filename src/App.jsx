import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const PostsTable = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ width: { xs: "100%", md: "50%" }, margin: "auto", mt: 4, boxShadow: 3 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 'bold', color: '#4CAF50' }}>Todo List</Typography> 
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f4f4f4' }}>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Title</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.slice(0, 10).map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.completed ? "Completed" : "Not Completed"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostsTable;
