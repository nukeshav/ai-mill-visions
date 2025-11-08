import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  // Duplicate testimonials to create seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative">
      <div className="relative overflow-hidden py-4">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -100 * testimonials.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.author}-${index}`}
              className="flex-shrink-0 w-[400px] bg-white rounded-2xl shadow-lg p-6 border border-border"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-base text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                {testimonial.quote}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-accent to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-accent to-transparent pointer-events-none" />
      </div>

      {/* Navigation Arrows */}
      
    </div>
  );
};

export default TestimonialCarousel;

