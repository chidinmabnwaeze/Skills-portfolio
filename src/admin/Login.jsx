import React from "react";

const Login = () => {
  return (
    <div className=" h-screen flex justify-center items-center bg-purple-100">
      <section>
        <h1 className="font-bold text-3xl">Welcome to your Portfolio !</h1>
        <div className="border p-5">
          <h1>Who is signing in ?</h1>
          <div className="dropdown">
            <select name="name" id="">
              <option value=""></option>
              <option value="name">Chidinma</option>
              <option value="name">Everistus</option>
            </select>
            <p>Chidinma</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
