import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 text-gradient-gold">
            ¿Listo para subir de elo?
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-10">
            Descargá Rift Coach gratis y empezá a mejorar hoy.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 glow-gold transition-all duration-300"
            >
              <a href="#download">Descargar para Windows</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-foreground/10">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a 
              href="#github" 
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="#discord" 
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Discord
            </a>
            <a 
              href="#contacto" 
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-foreground/60 text-sm">
              © 2026 Rift Coach — TigerForge Labs
            </p>
          </div>
        </div>

        <Separator className="my-6" />

        <p className="text-foreground/40 text-sm text-center">
          Rift Coach no está avalado por Riot Games ni por ninguna de sus filiales.
        </p>
      </div>
    </footer>
  )
}
