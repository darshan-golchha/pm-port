import { skills } from '../../data/portfolioData';
import { Section } from '../common';

const Skills = () => {
  const skillCategories = [
    { name: 'Programming Languages', items: skills.languages, color: 'blue' },
    { name: 'Frameworks & Libraries', items: [...skills.frameworks, ...skills.libraries], color: 'green' },
    { name: 'Tools & Technologies', items: skills.tools, color: 'purple' },
    { name: 'Domain Expertise', items: skills.domains, color: 'orange' }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50',
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50'
  };

  return (
    <Section id="skills" title="Skills & Technologies" className="bg-white dark:bg-gray-900">
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, catIndex) => (
          <div
            key={category.name}
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${catIndex * 100}ms` }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, index) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in ${
                    colorClasses[category.color]
                  }`}
                  style={{ animationDelay: `${(catIndex * 100) + (index * 20)}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
