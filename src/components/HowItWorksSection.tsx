import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Descargá la app y abrí League of Legends normalmente",
  },
  {
    number: "02",
    title: "Jugá — el coach detecta tu cuenta y tu partida automáticamente via el cliente de LoL (LCU)",
  },
  {
    number: "03",
    title: "Recibí coaching — análisis pre-game en champ select, tips en vivo durante la partida, y análisis post-game al terminar",
  }
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 text-gradient-gold">
            ¿Cómo funciona?
          </h2>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="text-7xl md:text-8xl font-bold text-primary leading-none">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-4">
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                  {step.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
