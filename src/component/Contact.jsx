const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Contact FoodVilla 📞</h1>
      <p className="mb-6">
        Have a question or feedback? We'd love to hear from you!
      </p>

      <form className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-400"
        ></textarea>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow transition duration-200"
        >
          Send Message
        </button>
      </form>

      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <strong>Email:</strong> support@foodvilla.com
        </p>
        <p>
          <strong>Phone:</strong> +91 62945 99756
        </p>
        <p>
          <strong>Address:</strong> FoodVilla HQ, Street 21, Bengaluru, India
        </p>
      </div>
    </div>
  );
};

export default Contact;
