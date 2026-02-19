import React from 'react';

interface CornerProps {
  className?: string;
  style?: React.CSSProperties;
}

export const CornerDecoration: React.FC<CornerProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img 
        src="/corner.png" 
        alt="Corner Decoration" 
        className="w-[12vmin] h-[12vmin] object-contain"
        draggable={false}
      />
    </div>
  );
};
