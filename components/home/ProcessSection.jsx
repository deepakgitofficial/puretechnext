import React from 'react';
import { ClipboardList, PenTool, Code2, Bug, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      title: "Requirement",
      desc: "Understanding your business goals, target audience, and project requirements.",
      icon: <ClipboardList className="w-8 h-8 text-primary" />
    },
    {
      title: "Design",
      desc: "Creating visually stunning UI/UX layouts and prototypes for your approval.",
      icon: <PenTool className="w-8 h-8 text-accent" />
    },
    {
      title: "Development",
      desc: "Building the website using modern frameworks like Next.js and Tailwind CSS.",
      icon: <Code2 className="w-8 h-8 text-pink-500" />
    },
    {
      title: "Testing",
      desc: "Rigorous quality assurance, performance testing, and bug fixing.",
      icon: <Bug className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Delivery",
      desc: "Deploying the final product and providing continuous support.",
      icon: <Rocket className="w-8 h-8 text-yellow-500" />
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-secondary dark:text-primary tracking-wider font-bold text-sm uppercase mb-3">Our Workflow</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
            How We Execute Your Project
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A proven, agile methodology ensuring your project is delivered on time, within budget, and above expectations.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                
                <div className="w-24 h-24 mx-auto bg-gray-50 dark:bg-[#111111] rounded-2xl flex items-center justify-center border-2 border-gray-100 dark:border-gray-800 shadow-sm relative z-10 group-hover:border-primary group-hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
                
                <h4 className="text-xl font-bold mt-6 mb-3 text-foreground font-heading">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
