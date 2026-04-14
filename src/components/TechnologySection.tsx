import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const techStack = [
  "Electron + Next.js",
  "Conectado al cliente de LoL (LCU)",
  "Riot Games API v5",
  "Datos reales de OP.GG y LoLalytics",
  "IA: Gemini 2.5 Flash + Grok 4.1",
  "Supabase (persistencia)",
  "TypeScript"
]

export function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 text-foreground/60">
            Tecnología
          </h2>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="border-primary/50 text-foreground/80 px-4 py-2 text-sm hover:border-primary hover:bg-primary/10 transition-colors"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
