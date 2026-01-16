import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-6 shadow">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
          Create Account
        </h2>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <Input label="Name" name="name" onChange={handleChange} required />
          <Input label="Email" name="email" type="email" onChange={handleChange} required />
          <Input label="Password" name="password" type="password" onChange={handleChange} required />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            required
          />

          <Button loading={loading}>Sign Up</Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
