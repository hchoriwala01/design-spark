import { ScrollReveal } from './ScrollReveal';

const tools = [
  { name: 'Figma', color: '#F24E1E', file: 'Figma.svg' },
  { name: 'Adobe XD', color: '#FF61F6', file: 'AdobeXD.svg' },
  { name: 'Photoshop', color: '#31A8FF', file: 'Photoshop.svg' },
  { name: 'Illustrator', color: '#FF9A00', file: 'Illustrator.svg' },
  { name: 'After Effects', color: '#9999FF', file: 'AfterEffects.svg' },
  { name: 'Sketch', color: '#F7B500', file: 'Sketch.svg' },
  { name: 'Framer', color: '#0055FF', file: 'Framer.svg' },
  { name: 'Webflow', color: '#4353FF', file: 'Webflow.svg' },
];

export const ToolsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-card/30">
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Tools I Use</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-4">
              Design{' '}
              <span className="gradient-text">Arsenal</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group glass-card-hover px-8 py-4 flex items-center gap-3"
              >
                {/* Original Icon */}
                <div className="flex items-center justify-center w-6 h-6">
                  <img
                    src={`${import.meta.env.BASE_URL}icons/${tool.file}`}
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
