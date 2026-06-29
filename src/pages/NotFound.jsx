import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "80px",
          marginBottom: "20px",
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for doesn't exist.
      </p>

      <Link to="/">
        <button
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Go To Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;