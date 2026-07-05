const certifications = [
  'IBM DevOps and Software Engineering',
  'Web Development Fundamentals by IBM SkillsBuild',
  'Data Fundamentals by IBM SkillsBuild',
  'Finding the Leader in You — CMI New Jersey USA',
  'Google Cloud Fundamentals from coursera',
  'Data Science Orientation from coursera',
  'Fundamentals of Deep Learning from nvidia',
  'Simple Staistics for User Experience Projects from Linkedin Learning',
  'Building Generative AI Skills for Developers by LinkedIn Learning',
  'Prompt Engineering Skills by LinkedIn Learning',
  'MongoDB Node.js Developer',
  'Digital Application Fundamentals (STEM) by Future Skills Prime',
];

export const Certifications = () => {
  return (
    <section className="py-20 px-4 relative" id="certifications">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-orbitron tracking-widest text-accent">[ CERTIFICATIONS ]</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-glow-accent mb-4">CREDENTIALS</h2>
          <p className="text-xl text-muted-foreground">Professional certifications and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={cert}
              className="relative animate-slide-in-right"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="gaming-border bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-sm font-bold text-background">{idx + 1}</span>
                  </div>
                  <p className="text-lg font-rajdhani text-foreground/90">{cert}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
