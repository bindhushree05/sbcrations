import { Award, IndianRupee, Palette, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality Fabrics",
    desc: "Sourced from the finest mills across India and the world, ensuring superior texture, durability, and finish.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Luxury doesn't have to break the bank. We offer premium fabrics at competitive prices for every budget.",
  },
  {
    icon: Palette,
    title: "Latest Designs",
    desc: "Stay on-trend with our constantly updated collection featuring the latest patterns, colors, and textures.",
  },
  {
    icon: Users,
    title: "Trusted by Customers",
    desc: "Thousands of happy customers trust Royal Weave for their fabric needs. Quality and service that speaks for itself.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-royal-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Our Promise</p>
          <h2 className="font-serif text-3xl md:text-5xl text-royal-black mb-4">
            Why Choose <span className="text-primary">Royal Weave</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-lg bg-background border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-royal-navy text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={32} />
              </div>
              <h3 className="font-serif text-lg text-royal-black mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
