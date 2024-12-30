import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(e);
  };
  return (
    <main>
      <div className="title m-12 text-center">
        <h1 className="text-3xl font-medium">Contact</h1>
        <p>Get in touch with me</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-col justify-center bg-gray-200"
      >
        <section>
          <h1>Name</h1>
          <input type="text" className="border rounded-md p-2" />
        </section>
        <section>
          <h1>Name</h1>
          <input type="text" className="border rounded-md p-2" />
        </section>
        <section>
          <h1>Name</h1>
          <input type="text" className="border rounded-md p-2" />
        </section>
      </form>
    </main>
  );
};

export default Contact;
