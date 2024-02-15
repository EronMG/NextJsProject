// HorizontalScrollGallery.tsx
import React from 'react';

interface HorizontalScrollGalleryProps {
  images: string[];
}

const HorizontalScrollGallery: React.FC<HorizontalScrollGalleryProps> = ({
  images,
}) => {
  return (
    <div className='overflow-x-auto whitespace-nowrap'>
      <div className='flex'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className='mr-4'
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollGallery;
