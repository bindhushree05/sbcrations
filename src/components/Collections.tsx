import formalImg from "@/assets/formal-fabric.jpg";
import casualImg from "@/assets/casual-fabric.jpg";
import weddingImg from "@/assets/wedding-fabric.jpg";
import designerImg from "@/assets/designer-fabric.jpg";

const collections = [
  {
    title: "Formal Fabrics",
    desc: "Premium suiting and shirting fabrics for the distinguished professional. Fine wools, crisp cottons, and elegant blends.",
    image: formalImg,
  },
  {
    title: "Casual Fabrics",
    desc: "Comfortable yet stylish fabrics for everyday wear. Soft cottons, breathable linens, and trendy patterns.",
    image: casualImg,
  },
  {
    title: "Wedding & Ethnic",
    desc: "Luxurious silk brocades, rich sherwanis, and traditional fabrics for your most special celebrations.",
    image: weddingImg,
  },
  {
    title: "Premium Designer",
    desc: "Exclusive Italian and international designer fabrics for those who demand nothing but the extraordinary.",
    image: designerImg,
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-20 md:py-28 bg-royal-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Our Range</p>
          <h2 className="font-serif text-3xl md:text-5xl text-secondary-foreground mb-4">
            Explore Our <span className="text-primary">Collections</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From boardroom to celebration, find the perfect fabric for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-royal-black/90 via-royal-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-serif text-xl text-secondary-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
