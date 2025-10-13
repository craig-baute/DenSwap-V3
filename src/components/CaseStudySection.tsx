import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  quote: string;
  company: string;
  role: string;
  project_details: string;
  results: {
    months_to_goal: number;
    annual_target: number;
    occupancy_rate: number;
    month_breakeven: number;
  };
  services: string[];
}

interface CaseStudySectionProps {
  caseStudy: CaseStudy | null;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ caseStudy }) => {

  if (!caseStudy) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="mb-8">
              <svg className="h-12 w-12 text-emerald-500" fill="currentColor" viewBox="0 0 48 48">
                <path d="M14 28h8v8H14v-8zm12 0h8v8h-8v-8zm-12-12h8v8H14v-8zm12 0h8v8h-8v-8zM8 42q-1.65 0-2.825-1.175T4 38V10q0-1.65 1.175-2.825T8 6h32q1.65 0 2.825 1.175T44 10v28q0 1.65-1.175 2.825T40 42H8z" />
              </svg>
            </div>
            <blockquote className="text-3xl font-bold text-gray-900 mb-6">
              "{caseStudy.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <img src="/somo-cowork-logo.png" alt={caseStudy.company} className="h-12 w-auto" />
              <div>
                <p className="font-semibold">{caseStudy.company}</p>
                <p className="text-gray-600">{caseStudy.role}</p>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-4">Project Details:</h4>
              <p className="text-gray-600 mb-4">{caseStudy.project_details}</p>
              <div className="grid grid-cols-2 gap-4">
                {caseStudy.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories from Real Operators</h2>
            <p className="text-lg text-gray-600 mb-8">
              The office world has changed, and the decision about where to work is made by individuals or small groups and not bosses demanding hundreds of people where to go. This dramatic shift requires new data and a new approach to deciding what's next for a building.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="font-semibold text-lg mb-4">Results Achieved:</h4>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-emerald-600">{caseStudy.results.months_to_goal}</p>
                  <p className="text-gray-600">Months to Goal</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-emerald-600">{caseStudy.results.annual_target}%</p>
                  <p className="text-gray-600">Annual Target</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-emerald-600">{caseStudy.results.occupancy_rate}%</p>
                  <p className="text-gray-600">Occupancy Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-emerald-600">{caseStudy.results.month_breakeven}</p>
                  <p className="text-gray-600">Month Breakeven</p>
                </div>
              </div>
            </div>
            <a href="/case-studies" className="mt-8 inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300">
              See Somo's Case Study
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
