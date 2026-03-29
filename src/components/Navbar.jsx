const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-3">
      <span className="navbar-brand">🍕 Mamma Mia</span>

      <div>
        <button className="btn btn-outline-light me-2">Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light me-2">Profile</button>
            <button className="btn btn-outline-light me-2">Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light me-2">Login</button>
            <button className="btn btn-outline-light me-2">Register</button>
          </>
        )}

        <button className="btn btn-warning">
          🛒 ${total.toLocaleString("es-CL")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;