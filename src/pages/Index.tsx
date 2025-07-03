const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        {/* Флаг Японии */}
        <div className="flex justify-center mb-8">
          <div className="w-48 h-36 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200">
            <div className="w-24 h-24 bg-red-600 rounded-full"></div>
          </div>
        </div>

        {/* Надпись Nikkei 225 */}
        <h1 className="text-6xl font-bold text-gray-900 tracking-wide">
          Nikkei 225
        </h1>
      </div>
    </div>
  );
};

export default Index;
