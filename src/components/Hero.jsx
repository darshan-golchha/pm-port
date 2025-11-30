import { personalInfo, socialLinks } from '../data/portfolioData';
import { Button, EmailIcon, LinkedInIcon, GitHubIcon } from './common';

const Hero = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'email':
        return <EmailIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'github':
        return <GitHubIcon />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="opacity-0 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">
            {personalInfo.pronouns}
          </p>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            {personalInfo.title}
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {personalInfo.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <Button
                key={link.name}
                href={link.url}
                variant={index === 0 ? 'primary' : 'secondary'}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {getIcon(link.icon)}
                {link.name}
              </Button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <p className="flex items-center gap-2">
              <span className="font-semibold">{personalInfo.university}</span>
            </p>
            <p>{personalInfo.location}</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-bounce" style={{ animationDelay: '800ms' }}>
          <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
