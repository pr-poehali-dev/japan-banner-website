import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FinancialData = () => {
  const marketData = [
    { name: "Toyota Motor", price: "2,847", change: "+1.2%", positive: true },
    { name: "Sony Group", price: "13,420", change: "+0.8%", positive: true },
    {
      name: "SoftBank Group",
      price: "8,950",
      change: "-0.3%",
      positive: false,
    },
    { name: "Nintendo", price: "6,890", change: "+2.1%", positive: true },
  ];

  const chartData = [
    { day: "Пн", value: 28700 },
    { day: "Вт", value: 28850 },
    { day: "Ср", value: 28920 },
    { day: "Чт", value: 28780 },
    { day: "Пт", value: 28946 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Финансовые данные
          </h2>
          <p className="text-gray-600">
            Актуальная информация о состоянии рынка
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* График недели */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} />
                Динамика за неделю
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-4">
                {chartData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="text-xs text-gray-500">{item.value}</div>
                    <div
                      className="w-12 bg-blue-500 rounded-t"
                      style={{ height: `${(item.value - 28600) / 10}px` }}
                    ></div>
                    <div className="text-sm font-medium">{item.day}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Ключевые показатели */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" size={20} />
                Ключевые показатели
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Максимум за день</span>
                  <span className="font-semibold">29,100.45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Минимум за день</span>
                  <span className="font-semibold">28,820.12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Объем торгов</span>
                  <span className="font-semibold">1.2B ¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Рыночная капитализация</span>
                  <span className="font-semibold">847.3T ¥</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Топ компании */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Building2" size={20} />
              Топ компании Nikkei 225
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketData.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Icon name="Building" size={16} />
                    </div>
                    <div>
                      <div className="font-medium">{company.name}</div>
                      <div className="text-sm text-gray-500">
                        ¥{company.price}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-1 ${company.positive ? "text-green-600" : "text-red-600"}`}
                  >
                    <Icon
                      name={company.positive ? "TrendingUp" : "TrendingDown"}
                      size={16}
                    />
                    <span className="font-medium">{company.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinancialData;
