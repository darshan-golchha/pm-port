import { useState } from 'react';
import { education } from '../../data/portfolioData';
import { Section, Card, CalendarIcon, LocationIcon } from '../common';

const Education = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <Section id="education" title="Education" className="bg-gray-50 dark:bg-gray-800">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={edu.id} delay={index * 100}>
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mt-1">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {edu.institution}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mt-1">
                  {edu.degree}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4 ml-14">
              <span className="flex items-center gap-1">
                <CalendarIcon />
                {edu.startDate} - {edu.endDate}
              </span>
              <span className="flex items-center gap-1">
                <LocationIcon />
                {edu.location}
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium">
                GPA: {edu.gpa}
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                {edu.grade}
              </span>
            </div>

            {/* Computer Science Courses */}
            {edu.computerScienceCourses && (
              <div className="mb-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <button
                  onClick={() => toggleSection(`cs-${edu.id}`)}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-3 hover:text-blue-700 dark:hover:text-blue-300 transition-colors bg-slate-100 dark:bg-slate-800"
                >
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      expandedSection === `cs-${edu.id}` ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Computer Science Coursework ({edu.computerScienceCourses.length})
                </button>
                {expandedSection === `cs-${edu.id}` && (
                  <ul className="space-y-2 animate-fade-in">
                    {edu.computerScienceCourses.map((course, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-blue-600 dark:border-blue-400"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Mathematics Courses */}
            {edu.mathematicsCourses && (
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <button
                  onClick={() => toggleSection(`math-${edu.id}`)}
                  className="flex items-center gap text-purple-600 dark:text-purple-400 font-semibold mb-3 hover:text-purple-700 dark:hover:text-purple-300 transition-colors bg-purple-100 dark:bg-purple-900/30"
                >
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      expandedSection === `math-${edu.id}` ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Mathematics Coursework ({edu.mathematicsCourses.length})
                </button>
                {expandedSection === `math-${edu.id}` && (
                  <ul className="space-y-2 animate-fade-in">
                    {edu.mathematicsCourses.map((course, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-purple-600 dark:border-purple-400"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Education;
