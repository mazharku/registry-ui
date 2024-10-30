import React, { useState, useEffect } from "react";
import "./Home.css";
import { CartBox } from "../cart/CartBox";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = ({ searchTerm }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dockerhub');
  };

  const [imagesWithTags, setImagesWithTags] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const imagesResponse = await fetch("http://localhost:4000/api/registry/");
        const images = await imagesResponse.json();
        setImagesWithTags(images);
      } catch (error) {
        console.error('Error fetching images and tags:', error);
      }
    };

    fetchImages();
  }, []);

  const filteredData = imagesWithTags?.filter(item => {
    return Array.isArray(item.tags) && item.tags.length !== 0
  }).filter(item => {
    console.log(searchTerm)
    //return item;
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <div className="home-page-container" style={{ marginTop: '64px' }}>
      <ToastContainer position="top-right" /> 
      <div className="top-bar">
        <Button
          variant="contained"
          className="docker-hub-btn"
          onClick={handleNavigate}
        >
          Search In Docker Hub
        </Button>
      </div>

      {filteredData.length === 0 ? (
        <div>No images are found.</div>
      ) : (
        filteredData.map(item => (
          <CartBox key={item.id} data={item} />
        ))
      )}
    </div>
  );
}
