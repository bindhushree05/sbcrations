import { Scissors, Gem, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-royal-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Our Story</p>
          <h2 className="font-serif text-3xl md:text-5xl text-royal-black mb-6">
            About <span className="text-primary">SB Creations</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At Royal Weave, we believe that every gentleman deserves the finest fabrics. With years of expertise in sourcing
            premium textiles from around the world, we bring you an unparalleled collection of suiting, shirting, and ethnic
            wear fabrics that blend tradition with contemporary style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Gem,
              title: "Premium Quality",
              desc: "We handpick only the finest fabrics — from luxurious Italian wools to premium Indian silks, ensuring every piece meets our exacting standards.",
            },
            {
              icon: TrendingUp,
              title: "Latest Trends",
              desc: "Stay ahead of the curve with our curated selection that follows global fashion trends while honoring timeless craftsmanship.",
            },
            {
              icon: Scissors,
              title: "Customer First",
              desc: "Your satisfaction is our priority. Our expert staff helps you choose the perfect fabric for every occasion, ensuring a tailored experience.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-lg bg-background border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <item.icon size={28} />
              </div>
              <h3 className="font-serif text-xl text-royal-black mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
