import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="glass-card p-6 md:p-8 h-full hover:border-primary/50 transition-all duration-300">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary uppercase">
          {title}
        </h3>
        <p className="text-foreground/80 leading-relaxed">
          {description}
        </p>
      </Card>
    </motion.div>
  )
}

export function MainFeaturesSection() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 text-gradient-gold">
            ¿Qué hace LoL Coach IA?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon="🎯"
            title="Análisis Pre-Game y Champ Select"
            description="Se conecta al cliente de LoL automáticamente. Cuando entrás a champ select, analiza matchups, te sugiere counter-picks cruzando tu pool de campeones con el meta de OP.GG, te muestra el draft score en tiempo real, y te arma el build óptimo (ítems, runas, hechizos, skill order)."
            index={0}
          />
          <FeatureCard
            icon="🔴"
            title="Coaching en Vivo (In-Game)"
            description="Tips cada ~35 segundos adaptados al estado real de la partida: CS differential, oro, objetivos, composición enemiga. Se adapta a tu elo: en Gold te habla simple, en Diamond te habla de wave management y rotaciones. Incluye countdown de objetivos (Dragón, Barón, Heraldo, Voidgrubs) y scouting de los 10 jugadores."
            index={1}
          />
          <FeatureCard
            icon="📊"
            title="Análisis Post-Game y Progresión"
            description="Análisis completo de cada partida con IA: early/mid/late game desglosado, errores clave, y plan de acción. Dashboard de progresión con gráficos de tendencia, percentiles por elo, y línea de 'Coaching Started' para que veas tu mejora desde que empezaste."
            index={2}
          />
        </div>
      </div>
    </section>
  )
}
