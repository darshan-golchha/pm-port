import { useState } from 'react';
import { projects } from '../../data/portfolioData';
import { Section, Card, Button, GitHubIcon, ExternalLinkIcon, CalendarIcon } from '../common';

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section id="projects" title="Projects" className="bg-white dark:bg-gray-900">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={project.id} delay={index * 100} className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex-1">
                  {project.title}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <GitHubIcon className="w-6 h-6" />
                  </a>
                )}
              </div>

              {project.affiliation && (
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                  {project.affiliation}
                </p>
              )}

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <CalendarIcon />
                <span>{project.date}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>

              {project.longDescription && (
                <>
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mb-3"
                  >
                    {expandedId === project.id ? 'Show Less' : 'Read More'}
                  </button>
                  
                  {expandedId === project.id && (
                    <div className="text-gray-700 dark:text-gray-300 text-sm space-y-2 mb-4 animate-fade-in">
                      {project.longDescription.split('\n\n').map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  )}
                </>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-medium">
                Technologies & Skills:
              </p>
              <div className="flex flex-wrap gap-1">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
