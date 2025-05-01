import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const Login = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/user", apiKey);
        setUsers(response.data);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };
    fetchUsers();
  }, [apiKey]);
  return (
    <div className=" h-screen flex flex-col justify-center items-center bg-purple-100">
      <section>
        <h1 className="font-bold text-3xl">Welcome to your Portfolio !</h1>
        <div className="border p-5 flex flex-col justify-center items-center">
          <h1 className="font-medium text-lg m-3">Who is signing in ?</h1>
          <div className="dropdown">
            <select name="name" id="" className="w-[300px] p-3">
              <option value=""></option>
              <option value="name">{users}</option>
              <option value="name">Everistus</option>
            </select>
          </div>
        </div>
      </section>
      <div className="create account">
        <Link to="/signup">
          Don't have an account?{" "}
          <button className="text-purple-700">Create one here !</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
