import heroImage from "@/assets/hero-fabric.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium men's fabric collection"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-black/90 via-royal-black/70 to-royal-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Premium Men's Fabric Collection
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-secondary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          Craft Your Style with
          <br />
          <span className="text-primary">Premium Fabrics</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
          Discover the finest collection of suiting, shirting, and ethnic wear fabrics, curated for the modern gentleman.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <a
            href="#collections"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm rounded hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Explore Collection
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary font-semibold uppercase tracking-wider text-sm rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Visit Store
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
