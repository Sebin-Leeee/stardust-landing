import React from "react";

const Newsletter = () => {
  return (
    <div className="mt-24 mb-24">
      <h2 className="text-4xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <form>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        ></label>
        <div className="flex">
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mr-2 p-2 flex-1 border rounded-md"
            placeholder="Your email address"
          />
          <button
            type="submit"
            className="mt-1 p-2 rounded-md bg-rgb-dark text-white"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
