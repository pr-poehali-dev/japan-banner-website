const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Японский флаг */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center border">
            <div className="w-16 h-16 bg-red-600 rounded-full"></div>
          </div>
        </div>

        {/* Заголовок */}
        <h1 className="text-6xl font-bold mb-6 tracking-tight">Nikkei 225</h1>

        {/* Подзаголовок */}
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Индекс ведущих японских компаний. Отслеживайте динамику, анализируйте
          тренды, принимайте решения.
        </p>

        {/* Текущий индекс */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
          <div className="text-sm text-gray-300 mb-2">Текущий индекс</div>
          <div className="text-4xl font-bold text-green-400 mb-1">
            28,945.63
          </div>
          <div className="text-sm text-green-400">+245.32 (+0.85%)</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
