import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Логотип и описание */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Nikkei 225</h3>
            </div>
            <p className="text-gray-400">
              Профессиональная платформа для мониторинга японского фондового
              индекса.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Главная
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Аналитика
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span className="text-gray-400">info@nikkei225.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span className="text-gray-400">Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Nikkei 225. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
