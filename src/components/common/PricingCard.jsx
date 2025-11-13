

const PricingCard = ({ icon, title, price, period, features }) => {
  return (
    <div className="bg-[#242424] min-h-[500px] min-w-[270px] text-white  shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <div className="text-5xl mb-4">
        <img src={icon} />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-3xl font-semibold">{price}</p>
      <span className="text-sm text-gray-400 mb-6">{period}</span>
      <ul className="mb-6 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-300">{feature}</li>
        ))}
      </ul>
      <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition mt-8">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
