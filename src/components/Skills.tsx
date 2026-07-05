import { Code2, Database, Cloud, Cpu } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    color: 'primary',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'SAP ABAP', level: 70 },
      { name: 'Python', level: 70 },
      { name: 'JavaScript', level: 40 },
      { name: 'SQL', level: 70 },
      { name: 'MongoDB', level: 60 },
    ],
  },
  {
    icon: Database,
    title: 'Frameworks/libraries',
    color: 'secondary',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'Node.js', level: 60 },
      { name: 'Flask', level: 60 },
      { name: 'Pandas', level: 60 },
       { name: 'NumPy', level: 50 },
      { name: 'OpenCV', level: 50 },
    ],
  },
  {
    icon: Cloud,
    title: 'Tools & Platforms',
    color: 'accent',
    skills: [
      
      { name: 'Git/GitHub', level: 80 },
      { name: 'Postman', level: 80 },
      { name: 'AWS', level: 60 },
      { name: 'GCP', level: 50 },
      { name: 'VS Code', level: 90 },
      { name: 'IntelliJ IDEA', level: 80 },
      // { name: 'Vercel', level: 90 },
    ],
  },
  {
    icon: Cpu,
    title: 'Practices',
    color: 'cyber-green',
    skills: [
      { name: 'OOP', level: 85 },
      { name: 'DBMS', level: 80 },
      // { name: 'Agile', level: 85 },
      { name: 'REST APIs', level: 70 },
      { name: 'CI/CD', level: 70 },
      
      // { name: 'Testing', level: 85 },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 relative" id="skills">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-orbitron tracking-widest text-primary">[ SKILLS MATRIX ]</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-glow mb-4">TECH ARSENAL</h2>
          <p className="text-xl text-muted-foreground">Mastered tools and technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="gaming-border bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-${category.color}/20 to-${category.color}/5`}>
                    <Icon className={`h-8 w-8 text-${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-rajdhani font-semibold">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-orbitron">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            boxShadow: `0 0 10px hsl(var(--primary) / 0.5)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
