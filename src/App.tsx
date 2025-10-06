import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { SolutionSection } from './components/SolutionSection';
import { ProductsSection } from './components/ProductsSection';
import { StrategySection } from './components/StrategySection';
import { TestimonialSection } from './components/TestimonialSection';
import { BlogSection } from './components/BlogSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';

// Pages
import { Blog } from './pages/Blog';
import { BlogAdmin } from './pages/BlogAdmin';
import { MarketAnalysis } from './pages/MarketAnalysis';
import { FinancialProjections } from './pages/FinancialProjections';
import { Operations } from './pages/Operations';
import { SampleReport } from './pages/SampleReport';
import { BookConsultation } from './pages/BookConsultation';
import { DemandReport } from './pages/DemandReport';
import { FeasibilityStudy } from './pages/FeasibilityStudy';
import { AnalyticsMap } from './pages/AnalyticsMap';
import { Contact } from './pages/Contact';
import { WhyUseUs } from './pages/WhyUseUs';
import CaseStudies from './pages/CaseStudies';
import { REITsInvestmentFunds } from './pages/REITsInvestmentFunds';
import { CoworkingOperators } from './pages/CoworkingOperators';
import { FranchiseeCaseStudies } from './pages/FranchiseeCaseStudies';

// Homepage Component
const HomePage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <Hero />
      <TestimonialSection />
      <PainSection />
      <SolutionSection />
      <ProductsSection />
      <StrategySection />
      <BlogSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-admin" element={<BlogAdmin />} />
        <Route path="/market-analysis" element={<MarketAnalysis />} />
        <Route path="/financial-projections" element={<FinancialProjections />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/sample-report" element={<SampleReport />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
        <Route path="/demand-report" element={<DemandReport />} />
        <Route path="/feasibility-study" element={<FeasibilityStudy />} />
        <Route path="/analytics-map" element={<AnalyticsMap />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<WhyUseUs />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/reits-investment-funds" element={<REITsInvestmentFunds />} />
        <Route path="/coworking-operators" element={<CoworkingOperators />} />
        <Route path="/franchisee-case-studies" element={<FranchiseeCaseStudies />} />
      </Routes>
    </Router>
  );
};

export default App;