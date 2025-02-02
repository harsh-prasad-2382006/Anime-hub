import React from "react";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.glitch} data-text="404">404</h1>
      <p style={styles.text}>Oops! The page you are looking for doesn't exist.</p>
      <a href="/home" style={styles.button}>Go Back Home</a>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  glitch: {
    fontSize: "120px",
    fontWeight: "bold",
    position: "relative",
    textTransform: "uppercase",
    letterSpacing: "5px",
    animation: "glitch 1s infinite alternate",
  },
  text: {
    fontSize: "20px",
    margin: "10px 0",
    opacity: 0.8,
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "18px",
    color: "#fff",
    background: "#ff4560",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "0.3s",
  },
};


const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes glitch {
    0% { text-shadow: 2px 2px 0px #ff4560, -2px -2px 0pxrgb(72, 0, 255); }
    50% { text-shadow: -2px -2px 0px #ff4560, 2px 2px 0px #ffea00; }
    100% { text-shadow: 2px -2px 0px #ff4560, -2px 2px 0px #ffea00; }
  }`,
  styleSheet.cssRules.length
);

export default NotFound;
