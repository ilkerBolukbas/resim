'use client';
import './style/style.css';
import React, { useState } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  const [emojiSizes, setEmojiSizes] = useState([]);

  const addImage = () => {
    const randomId = Math.floor(Math.random() * 1000); 
    const newImage = {
      id: randomId,
      url: `https://picsum.photos/150?random=${randomId}`,
    };
    setImages([...images, newImage]);
    setEmojiSizes([...emojiSizes, 20]);
  };

  const handleImageClick = (index) => {
    const newSizes = [...emojiSizes];
    newSizes[index] += 5; 
    setEmojiSizes(newSizes);
  };

  return (
    <div style={{ padding: "30px"}}>
      <button
        onClick={addImage}
        style={{
          padding: "10px 20px",
          fontSize: "15px",
        }}
      >
        Resim eklemek için tıklayınız
      </button>

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", marginTop: "20px" }}>
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(index)}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src={image.url}
              alt="random"
              style={{
                width: "150px",
                height: "150px",                
              }}
            />
            <span
              style={{
                fontSize: `${emojiSizes[index]}px`,
                marginLeft: "10px",
                transition: "all 0.2s ease",
              }}
            >
              👍
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
