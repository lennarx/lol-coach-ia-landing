import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    quote: "Subí de Gold IV a Plat II en 3 semanas. Los tips en vivo son una locura.",
    author: "Matías",
    location: "Buenos Aires",
    progress: "Gold → Platinum"
  },
  {
    quote: "El análisis de champ select me cambió la forma de draftear. Ahora entiendo los matchups de verdad.",
    author: "Valentina",
    location: "Santiago",
    progress: "Silver → Gold"
  },
  {
    quote: "Juego en LAS y por fin tengo un coach que habla en español y entiende el servidor.",
    author: "Diego",
    location: "Lima",
    progress: "Platinum → Diamond"
  }
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 text-gradient-gold">
            Testimonios
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 md:p-8 h-full hover:border-primary/50 transition-all duration-300">
                <div className="mb-6">
                  <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-foreground/10 pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}, {testimonial.location}
                  </p>
                  <p className="text-sm text-success font-medium mt-1">
                    {testimonial.progress}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
