import React, { useState, useEffect } from 'react';
import { Save, Plus, Edit3, Trash2, ArrowLeft, Building, MapPin, Calendar, Users, DollarSign, TrendingUp, Image, FileText, Star, Eye } from 'lucide-react';

export interface CaseStudyProject {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  buildingSize: string;
  timeline: string;
  industry: string;
  challenge: string;
  solution: string;
  testimonial: string;
  clientName: string;
  clientTitle: string;
  image: string;
  results: {
    occupancy: string;
    noiIncrease: string;
    breakeven: string;
    members: string;
  };
  isFeatured: boolean;
  isHighlighted: boolean;
  createdAt: string;
}

interface CaseStudyCMSProps {
  onBack: () => void;
}

export const CaseStudyCMS: React.FC<CaseStudyCMSProps> = ({ onBack }) => {
  const [caseStudyProjects, setCaseStudyProjects] = useState<CaseStudyProject[]>([]);
  const [currentProject, setCurrentProject] = useState<CaseStudyProject | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedProjects = localStorage.getItem('caseStudyProjects');
    if (savedProjects) {
      setCaseStudyProjects(JSON.parse(savedProjects));
    } else {
      // Initialize with sample data
      const sampleProjects: CaseStudyProject[] = [
        {
          id: '1',
          title: 'Downtown Office Revival',
          subtitle: 'Transforming a struggling office building into a thriving coworking hub',
          location: 'Austin, TX',
          buildingSize: '25,000 SF',
          timeline: '8 months',
          industry: 'Commercial Real Estate',
          challenge: 'A 25,000 SF office building in downtown Austin was struggling with 60% vacancy rates and declining rental income. Traditional office tenants were not renewing leases, and the property was hemorrhaging money.',
          solution: 'We conducted a comprehensive market analysis and determined the area had strong demand for flexible workspace. Our team designed an optimal space allocation plan with 40% private offices, 35% open coworking, and 25% meeting/common areas.',
          testimonial: 'DenSwap transformed our struggling asset into our most profitable property. The data-driven approach gave us confidence to invest in the conversion.',
          clientName: 'Sarah Johnson',
          clientTitle: 'Property Manager, Austin Commercial Group',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
          results: {
            occupancy: '92%',
            noiIncrease: '+45%',
            breakeven: '14 months',
            members: '180'
          },
          isFeatured: true,
          isHighlighted: false,
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          title: 'Suburban Flex Space Success',
          subtitle: 'Converting traditional office space to meet modern workforce needs',
          location: 'Plano, TX',
          buildingSize: '15,000 SF',
          timeline: '6 months',
          industry: 'Property Development',
          challenge: 'A suburban office building was losing tenants to remote work trends. The owner needed a new strategy to attract businesses and professionals in the changing work landscape.',
          solution: 'Our analysis revealed strong demand for flexible workspace among local entrepreneurs and remote workers. We recommended a hybrid model with dedicated desks, private offices, and collaboration spaces.',
          testimonial: 'The feasibility study was spot-on. We exceeded our occupancy projections within the first year.',
          clientName: 'Mike Rodriguez',
          clientTitle: 'Development Director, Plano Properties',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
          results: {
            occupancy: '88%',
            noiIncrease: '+38%',
            breakeven: '16 months',
            members: '125'
          },
          isFeatured: false,
          isHighlighted: true,
          createdAt: new Date().toISOString()
        }
      ];
      setCaseStudyProjects(sampleProjects);
      localStorage.setItem('caseStudyProjects', JSON.stringify(sampleProjects));
    }
  }, []);

  const saveProjects = (updatedProjects: CaseStudyProject[]) => {
    setCaseStudyProjects(updatedProjects);
    localStorage.setItem('caseStudyProjects', JSON.stringify(updatedProjects));
  };

  const createNewProject = () => {
    const newProject: CaseStudyProject = {
      id: Date.now().toString(),
      title: '',
      subtitle: '',
      location: '',
      buildingSize: '',
      timeline: '',
      industry: '',
      challenge: '',
      solution: '',
      testimonial: '',
      clientName: '',
      clientTitle: '',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: {
        occupancy: '',
        noiIncrease: '',
        breakeven: '',
        members: ''
      },
      isFeatured: false,
      isHighlighted: false,
      createdAt: new Date().toISOString()
    };
    setCurrentProject(newProject);
    setIsEditing(true);
  };

  const editProject = (project: CaseStudyProject) => {
    setCurrentProject(project);
    setIsEditing(true);
  };

  const saveProject = () => {
    if (!currentProject || !currentProject.title.trim()) {
      alert('Please fill in the title field');
      return;
    }

    const existingIndex = caseStudyProjects.findIndex(p => p.id === currentProject.id);
    let updatedProjects;

    if (existingIndex >= 0) {
      updatedProjects = [...caseStudyProjects];
      updatedProjects[existingIndex] = currentProject;
    } else {
      updatedProjects = [...caseStudyProjects, currentProject];
    }

    saveProjects(updatedProjects);
    setIsEditing(false);
    setCurrentProject(null);
  };

  const deleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this case study project?')) {
      const updatedProjects = caseStudyProjects.filter(p => p.id !== id);
      saveProjects(updatedProjects);
    }
  };

  const toggleFeatured = (id: string) => {
    const updatedProjects = caseStudyProjects.map(project => ({
      ...project,
      isFeatured: project.id === id ? !project.isFeatured : false // Only one can be featured
    }));
    saveProjects(updatedProjects);
  };

  const toggleHighlighted = (id: string) => {
    const updatedProjects = caseStudyProjects.map(project => ({
      ...project,
      isHighlighted: project.id === id ? !project.isHighlighted : project.isHighlighted
    }));
    saveProjects(updatedProjects);
  };

  if (isEditing && currentProject) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentProject(null);
              }}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Study Projects
            </button>
            <button
              onClick={saveProject}
              className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
            >
              <Save className="h-4 w-4" />
              Save Project
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {currentProject.title ? `Edit ${currentProject.title}` : 'New Case Study Project'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Basic Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={currentProject.title}
                    onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={currentProject.subtitle}
                    onChange={(e) => setCurrentProject({ ...currentProject, subtitle: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Brief description"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={currentProject.location}
                      onChange={(e) => setCurrentProject({ ...currentProject, location: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="City, State"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Building Size
                    </label>
                    <input
                      type="text"
                      value={currentProject.buildingSize}
                      onChange={(e) => setCurrentProject({ ...currentProject, buildingSize: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., 25,000 SF"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <input
                      type="text"
                      value={currentProject.timeline}
                      onChange={(e) => setCurrentProject({ ...currentProject, timeline: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., 8 months"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <input
                      type="text"
                      value={currentProject.industry}
                      onChange={(e) => setCurrentProject({ ...currentProject, industry: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., Commercial Real Estate"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Image URL
                  </label>
                  <input
                    type="url"
                    value={currentProject.image}
                    onChange={(e) => setCurrentProject({ ...currentProject, image: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                  />
                  {currentProject.image && (
                    <div className="mt-3">
                      <img
                        src={currentProject.image}
                        alt="Project preview"
                        className="w-full h-32 object-cover rounded-lg border"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Content & Results */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Content & Results</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Challenge
                  </label>
                  <textarea
                    value={currentProject.challenge}
                    onChange={(e) => setCurrentProject({ ...currentProject, challenge: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Describe the initial challenge or problem..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Solution
                  </label>
                  <textarea
                    value={currentProject.solution}
                    onChange={(e) => setCurrentProject({ ...currentProject, solution: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Describe the solution and approach..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Client Testimonial
                  </label>
                  <textarea
                    value={currentProject.testimonial}
                    onChange={(e) => setCurrentProject({ ...currentProject, testimonial: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Client testimonial quote..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Client Name
                    </label>
                    <input
                      type="text"
                      value={currentProject.clientName}
                      onChange={(e) => setCurrentProject({ ...currentProject, clientName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Client name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Client Title
                    </label>
                    <input
                      type="text"
                      value={currentProject.clientTitle}
                      onChange={(e) => setCurrentProject({ ...currentProject, clientTitle: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Client title/position"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Occupancy Rate
                    </label>
                    <input
                      type="text"
                      value={currentProject.results.occupancy}
                      onChange={(e) => setCurrentProject({ 
                        ...currentProject, 
                        results: { ...currentProject.results, occupancy: e.target.value }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., 92%"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      NOI Increase
                    </label>
                    <input
                      type="text"
                      value={currentProject.results.noiIncrease}
                      onChange={(e) => setCurrentProject({ 
                        ...currentProject, 
                        results: { ...currentProject.results, noiIncrease: e.target.value }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., +45%"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Breakeven Timeline
                    </label>
                    <input
                      type="text"
                      value={currentProject.results.breakeven}
                      onChange={(e) => setCurrentProject({ 
                        ...currentProject, 
                        results: { ...currentProject.results, breakeven: e.target.value }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., 14 months"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Members
                    </label>
                    <input
                      type="text"
                      value={currentProject.results.members}
                      onChange={(e) => setCurrentProject({ 
                        ...currentProject, 
                        results: { ...currentProject.results, members: e.target.value }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., 180"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={currentProject.isFeatured}
                      onChange={(e) => setCurrentProject({ ...currentProject, isFeatured: e.target.checked })}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Featured Project</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={currentProject.isHighlighted}
                      onChange={(e) => setCurrentProject({ ...currentProject, isHighlighted: e.target.checked })}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Highlighted Project</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog Management
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Case Study Project Management</h1>
            <p className="text-gray-600">Manage case study projects for your website</p>
          </div>
          <button
            onClick={createNewProject}
            className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
          >
            <Plus className="h-4 w-4" />
            New Case Study Project
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {caseStudyProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.isFeatured && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Featured
                    </span>
                  )}
                  {project.isHighlighted && (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      Highlighted
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  {project.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                  )}
                  {project.buildingSize && (
                    <span className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      {project.buildingSize}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                {project.subtitle && (
                  <p className="text-gray-600 mb-4">{project.subtitle}</p>
                )}
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {project.results.occupancy && (
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-emerald-600">{project.results.occupancy}</div>
                      <div className="text-xs text-gray-600">Occupancy</div>
                    </div>
                  )}
                  {project.results.noiIncrease && (
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-teal-600">{project.results.noiIncrease}</div>
                      <div className="text-xs text-gray-600">NOI Increase</div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleFeatured(project.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        project.isFeatured 
                          ? 'text-yellow-600 bg-yellow-50 hover:bg-yellow-100' 
                          : 'text-gray-400 hover:text-yellow-600 hover:bg-yellow-50'
                      }`}
                      title="Toggle Featured"
                    >
                      <Star className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => toggleHighlighted(project.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        project.isHighlighted 
                          ? 'text-blue-600 bg-blue-50 hover:bg-blue-100' 
                          : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      title="Toggle Highlighted"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => editProject(project)}
                      className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {caseStudyProjects.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No case study projects yet</h3>
            <p className="text-gray-600 mb-4">Create your first case study project to get started.</p>
            <button
              onClick={createNewProject}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
            >
              Create First Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};