const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md text-gray-800">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        Welcome to FoodVilla <span className="text-2xl">🍽️</span>
      </h1>

      <p className="mb-4">
        At <strong className="font-semibold">FoodVilla</strong>, we believe food
        is more than just fuel — it’s a celebration of flavors, culture, and
        connection.
      </p>

      <p className="mb-6">
        Whether you're craving spicy biryani, cheesy pizza, or comforting South
        Indian dosas, we bring your favorite dishes straight to your doorstep,
        fresh and fast.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>✔️ Curated selection of top-rated restaurants</li>
        <li>✔️ Fast and reliable delivery</li>
        <li>✔️ Real-time tracking</li>
        <li>✔️ Great deals and discounts daily</li>
      </ul>

      <p>
        Built with <span className="text-red-500">❤️</span> by food lovers,{" "}
        <strong>for</strong> food lovers. Thank you for choosing FoodVilla!
      </p>
    </div>
  );
};

export default About;
