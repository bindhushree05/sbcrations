import { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    const encodedMsg = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919844069675?text=${encodedMsg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp..." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-royal-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Get In Touch</p>
          <h2 className="font-serif text-3xl md:text-5xl text-secondary-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-serif text-lg text-secondary-foreground mb-1">Visit Our Store</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    5, Biligiri Nilaya, Near Vinayaka School,
                    <br />
                    Anjananagar, Magadi Main Rd,
                    <br />
                    Vishwaneedom Post, Bengaluru,
                    <br />
                    Karnataka 560091
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-4">
                <Phone className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-serif text-lg text-secondary-foreground mb-1">Call Us</h4>
                  <div className="space-y-2">
                    {["9844069675", "9036764201", "7026965555"].map((num) => (
                      <a
                        key={num}
                        href={`tel:+91${num}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        📞 +91 {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-primary/20 h-[300px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.51!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzAnMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal Weave Store Location"
            />
          </div>

          {/* Form */}
          <div className="bg-royal-navy/50 rounded-lg p-6 md:p-8 border border-primary/20">
            <h4 className="font-serif text-xl text-secondary-foreground mb-6">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="bg-royal-black/50 border-primary/20 text-secondary-foreground placeholder:text-muted-foreground"
              />
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={15}
                className="bg-royal-black/50 border-primary/20 text-secondary-foreground placeholder:text-muted-foreground"
              />
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={4}
                className="bg-royal-black/50 border-primary/20 text-secondary-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold"
              >
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
