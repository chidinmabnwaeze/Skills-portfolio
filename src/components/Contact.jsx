import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(e);
  };
  return (
    <main className="m-32 bg-gray-100 p-3 rounded-xl">
      <div className="title m-12 text-center">
        <h1 className="text-3xl font-medium">Contact</h1>
        <p>Get in touch with me</p>
      </div>
      <form onSubmit={handleSubmit} className=" w-1/2 p-3 m-auto">
        <section>
          <h1>Name</h1>
          <input type="text" className="border rounded-md p-2 w-full" />
        </section>
        <section>
          <h1>Email Address</h1>
          <input type="text" className="border rounded-md p-2 w-full" />
        </section>
        <section>
          <h1>Phone Number</h1>
          <input type="text" className="border rounded-md p-2 w-full" />
        </section>
        <section>
          <h1>Write your message</h1>
          <textarea type="text" className="border rounded-md p-8 w-full " />
        </section>
        <div className="flex justify-center">
          <button className="CTA bg-purple-700 p-2.5 w-4/5 text-white rounded-md mt-5">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
