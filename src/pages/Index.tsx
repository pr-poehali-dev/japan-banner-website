import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FinancialData from "@/components/FinancialData";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <FinancialData />
      <Footer />
    </div>
  );
};

export default Index;
