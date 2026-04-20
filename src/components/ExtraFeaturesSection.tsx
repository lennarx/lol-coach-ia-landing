import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const extraFeatures = [
  {
    icon: "🏆",
    title: "Champion Pool Builder",
    description: "Construye tu pool ideal cruzando tier list real (OP.GG) + tu maestría + algoritmo de scoring"
  },
  {
    icon: "🗡️",
    title: "Matchup 1v1",
    description: "Análisis detallado de cada enfrentamiento con WR real, power spikes, y tips específicos"
  },
  {
    icon: "💬",
    title: "Estratega (Chat libre)",
    description: "Chateá con el coach de IA sobre estrategia, builds, meta — tiene acceso en vivo a datos de OP.GG, LoLalytics y DDragon via tool-calling"
  },
  {
    icon: "🔍",
    title: "Player Scouting",
    description: "En la pantalla de carga ves el perfil de los 10 jugadores: rango, WR en el campeón, keystone, spells"
  },
  {
    icon: "🧠",
    title: "Chat con el Coach",
    description: "Después de cada partida, chateá con el coach sobre lo que pasó. Preguntá por qué muriste en ese teamfight, qué ítem debías haber comprado, o cómo podías haber cerrado el juego antes. Solo Premium."
  }
]

export function ExtraFeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {extraFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={extraFeatures.length % 2 !== 0 && index === extraFeatures.length - 1 ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto md:w-full" : ""}
            >
              <Card className="glass-card p-6 md:p-8 h-full hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
