import { about } from '../../data/portfolioData';
import { Section } from '../common';

const About = () => {
  return (
    <Section id="about" title="About Me" className="bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg dark:prose-invert max-w-none opacity-0 animate-fade-in-up">
          {about.description.split('\n\n').map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
