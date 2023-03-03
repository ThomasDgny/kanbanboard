import React from 'react';

const CostumeProgressBar = ({ percentage, color, height, borderRadius }) => {
  const containerStyles = {
    height: height,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: borderRadius,
  }

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: color,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
}

export default CostumeProgressBar;
