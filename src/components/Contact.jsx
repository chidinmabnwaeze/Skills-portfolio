import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(e);
  };
  return (
    <main
      id="contact"
      className="contact m-32 bg-gray-100 p-3 rounded-xl js-scroll hideScroll"
    >
      <div className="title m-12 text-center">
        <h1 className="text-3xl font-medium">Contact</h1>
        <p>Get in touch with me</p>
      </div>
      <section className="contact-section flex justify-center">
        <div className="contactInfo">
          <div className="phone flex items-center m-4">
            <span className="rounded-full mr-6 p-4 shadow-lg bg-slate-200">
              <i class="bx bx-phone text-xl"></i>
            </span>
            <span>
              <h3 className="font-medium text-lg">Phone Number</h3>
              <p className="text-sm text-gray-400">+44 7551 119942</p>
            </span>
          </div>
          <div className="email flex items-center m-4">
            <span className="rounded-full mr-6 p-4 shadow-lg bg-slate-200">
              <i class="bx bx-envelope text-xl"></i>
            </span>
            <span>
              <h3 className="font-medium text-lg">Email Address</h3>
              <p className="text-sm text-gray-400">everistusnwogo@gmail.com</p>
            </span>
          </div>
          <div className="map flex items-center m-4">
            <span className="rounded-full mr-6 p-4 shadow-lg bg-slate-200">
              <i class="bx bx-map text-xl"></i>
            </span>
            <span>
              <h3 className="font-medium text-lg">Address</h3>
              <p className="text-sm text-gray-400">
                Nottingham, UK
              </p>
            </span>
          </div>
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
      </section>
    </main>
  );
};

export default Contact;
