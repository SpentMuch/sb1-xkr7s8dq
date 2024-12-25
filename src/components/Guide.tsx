import React from 'react';
import { Mail, Users, FileText, BarChart, Rocket, Gift } from 'lucide-react';

const Guide = () => {
  const sections = [
    {
      icon: Mail,
      title: 'Email Campaigns',
      description: 'Create and schedule email campaigns with our drag-and-drop editor.',
      steps: [
        'Click "Campaigns" in the sidebar',
        'Select "New Campaign"',
        'Choose a template or start from scratch',
        'Design your email and set sending options'
      ]
    },
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize and segment your subscriber list effectively.',
      steps: [
        'Navigate to "Contacts"',
        'Import contacts or add them manually',
        'Create segments based on behavior',
        'Monitor engagement metrics'
      ]
    },
    {
      icon: FileText,
      title: 'Landing Pages',
      description: 'Build conversion-optimized landing pages and thank you pages.',
      steps: [
        'Go to "Landing Pages"',
        'Choose a template type',
        'Customize content and design',
        'Connect to your campaign'
      ]
    },
    {
      icon: BarChart,
      title: 'Analytics & Tracking',
      description: 'Track email performance and subscriber engagement.',
      steps: [
        'Visit the "Analytics" section',
        'View open rates and click-through rates',
        'Monitor conversion metrics',
        'Export reports as needed'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to EmailCRM</h1>
        <p className="text-lg text-gray-600">Your all-in-one email marketing solution</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <section.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold ml-3">{section.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <div className="space-y-2">
              {section.steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="ml-3 text-gray-600">{step}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 text-white">
        <div className="flex items-center mb-4">
          <Rocket className="w-8 h-8" />
          <h2 className="text-2xl font-bold ml-3">Quick Start Tips</h2>
        </div>
        <ul className="space-y-3 ml-4">
          <li className="flex items-center">
            <Gift className="w-5 h-5 mr-2" />
            <span>Start with a pre-built template to save time</span>
          </li>
          <li className="flex items-center">
            <Gift className="w-5 h-5 mr-2" />
            <span>Import your existing contact list</span>
          </li>
          <li className="flex items-center">
            <Gift className="w-5 h-5 mr-2" />
            <span>Set up your first automated welcome email</span>
          </li>
          <li className="flex items-center">
            <Gift className="w-5 h-5 mr-2" />
            <span>Create a landing page for lead generation</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Guide;