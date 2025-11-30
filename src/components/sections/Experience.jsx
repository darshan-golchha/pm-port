import { useState } from 'react';
import { experiences } from '../../data/portfolioData';
import { Section, Card, CalendarIcon, LocationIcon, BriefcaseIcon } from '../common';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section id="experience" title="Experience" className="bg-gray-50 dark:bg-gray-800">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={exp.id} delay={index * 100}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mt-1">
                    <BriefcaseIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3 ml-14">
                  <span className="flex items-center gap-1">
                    <CalendarIcon />
                    {exp.startDate} - {exp.endDate} ({exp.duration})
                  </span>
                  <span className="flex items-center gap-1">
                    <LocationIcon />
                    {exp.location}
                  </span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">
                    {exp.type}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 ml-14">
                  {exp.description}
                </p>

                {exp.highlights && exp.highlights.length > 0 && (
                  <>
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="text-white dark:text-blue-300 hover:text-white dark:hover:text-blue-200 hover:underline text-sm font-medium ml-14 mb-3 transition-colors"
                    >
                      {expandedId === exp.id ? 'Show Less' : 'Show Key Highlights'}
                    </button>
                    
                    {expandedId === exp.id && (
                      <div className="ml-14 space-y-2 animate-fade-in">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Key Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="text-gray-700 dark:text-gray-300 text-sm pl-4 border-l-2 border-blue-600 dark:border-blue-400"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

                <div className="flex flex-wrap gap-2 mt-4 ml-14">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
