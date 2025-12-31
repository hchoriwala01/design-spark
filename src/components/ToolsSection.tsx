import { ScrollReveal } from './ScrollReveal';

const tools = [
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Adobe XD', color: '#FF61F6' },
  { name: 'Photoshop', color: '#31A8FF' },
  { name: 'Illustrator', color: '#FF9A00' },
  { name: 'After Effects', color: '#9999FF' },
  { name: 'Sketch', color: '#F7B500' },
  { name: 'Framer', color: '#0055FF' },
  { name: 'Webflow', color: '#4353FF' },
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
                {/* Icon Placeholder */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: `${tool.color}20`, color: tool.color }}
                >
                  {tool.name.charAt(0)}
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
