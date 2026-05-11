import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await register(formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setError("Greška: " + err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-500">
          Registracija
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm text-gray-300 cursor-pointer"
          >
            {showPassword ? "Sakrij" : "Prikaži"}
          </span>
        </div>

        {error && <p className="text-red-400 mb-3">{error}</p>}

        <button className="w-full bg-yellow-500 hover:bg-yellow-400 transition py-3 rounded font-semibold text-black">
          Registruj se
        </button>

        <p className="text-center mt-4 text-sm text-gray-300">
          Već imaš nalog?{" "}
          <Link to="/login" className="text-yellow-500 hover:underline">
            Prijavi se
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;