import React from "react";

const CardLayout = () => {
  const layoutStyle = {
    display: "grid",
    gridTemplateAreas: `
      "left-top middle right-top"
      "left-bottom middle right-bottom"
    `,
    gridTemplateColumns: "1fr 0.85fr auto",
    gridTemplateRows: "1fr 1fr",
    gap: "10px",
    padding: "20px",
    height: "450px", 
  };

  const cardStyle = {
    backgroundColor: "grey",
    borderRadius: "20px",
  };

  const leftTopStyle = {
    gridArea: "left-top",
    display: "grid",
    gridTemplateColumns: "1fr 1fr", 
    gridTemplateRows: "2fr", 
    gap: "10px",
    height: "100%", 
  };

  const middleStyle = {
    ...cardStyle,
    gridArea: "middle",
    height: "100%", 
  };

  const leftBottomStyle = {
    ...cardStyle,
    gridArea: "left-bottom",
    height: "100%", 
  };

  const rightTopStyle = {
    ...cardStyle,
    gridArea: "right-top",
    aspectRatio: "1 / 1", 
    height: "100%", 
  };

  const rightBottomStyle = {
    ...cardStyle,
    gridArea: "right-bottom",  
    aspectRatio: "1 / 1", 
    height: "100%", 
  };

  return (
    <div style={layoutStyle}>
      <div style={leftTopStyle}>
        <div style={cardStyle}></div>
        <div style={cardStyle}></div>
      </div>
      <div style={middleStyle}></div>
      <div style={leftBottomStyle}></div>
      <div style={rightTopStyle}></div>
      <div style={rightBottomStyle}></div>
    </div>
  );
};

export default CardLayout;
