import React from "react";

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.loader}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  loader: {
    width: "60px",
    height: "60px",
    border: "6px solid #e0e0e0",
    borderTop: "6px solid#171ab8", 
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: "15px",
    fontSize: "1.2rem",
    color: "#333",
    fontWeight: "bold",
  },
};


const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`,
  styleSheet.cssRules.length
);

export default Loader;
