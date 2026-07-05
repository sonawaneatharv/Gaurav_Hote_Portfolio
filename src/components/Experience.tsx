import { Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    role: 'Associate Application Developer',
    company: 'IBM',
    period: 'June 2026 - Present',
    location: 'Mumbai, Maharashtra',
    achievements: [],
    type: 'work',
  },
  {
    role: ' Trainee Software Engineer',
    company: 'Cognitus an IBM Company',
    period: 'Mar 2026',
    location: 'Mumbai, Maharashtra',
    achievements: [
    ],
    type: 'work',
  }, 
  {
    role: 'Software Intern',
    company: 'bizAmica Software Pvt. Ltd.',
    period: 'Aug 2025 – Dec 2025',
    location: 'Pune, Maharashtra',
    achievements: [
      'Developed and integrated REST APIs with JWT authentication',
      'Built responsive, secure user interfaces with React, Next.js',
      'Optimized database queries improving performance by 20%',
      'UI / UX improvements enhancing user experience',
      'Understanding Business workflows, collaborating with multi-disciplinary teams'
    ],
    type: 'work',
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: 'May 2025',
    location: 'Remote',
    achievements: [
      'Designed responsive website for Namo Dental Care Clinic using React and Tailwind CSS',
      'Increased online appointments by 25%',
      'Reduced booking time by 30%',
    ],
    type: 'work',
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-4 relative" id="experience">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-orbitron tracking-widest text-accent">[ EXPERIENCE LOG ]</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-glow-accent mb-4">CAREER PATH</h2>
          <p className="text-xl text-muted-foreground">Professional journey and milestones</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.role}
                className="relative pl-20 animate-slide-in-right"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-primary border-4 border-background animate-pulse-glow" />

                <div className="gaming-border bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-orbitron font-bold text-primary mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-lg font-rajdhani">
                        <Briefcase className="h-5 w-5 text-secondary" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-orbitron text-muted-foreground mb-1">
                        {exp.period}
                      </div>
                      <div className="text-sm text-accent">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-0.5">▸</span>
                        <span className="text-foreground/90">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
