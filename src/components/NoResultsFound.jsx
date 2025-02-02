import React from "react";

const NoResultsFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>No Results Found</h1>
      <p style={styles.message}>We couldn't find any anime matching your search.</p>
      <a href="/anime" style={styles.button}>Back to Anime List</a>
    </div>
  );
};

const styles = {
  container: {
    height: "90vh",
    width:"100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
    color: "#333",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
  },
  title: {
    fontSize: "36px",
    fontWeight: "500",
    color: "#333",
    marginBottom: "20px",
  },
  message: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 25px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    borderRadius: "4px",
    textDecoration: "none",
    transition: "0.3s ease",
    border: "none",
  },
};

// Adding hover effect
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `a:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }`,
  styleSheet.cssRules.length
);

export default NoResultsFound;
