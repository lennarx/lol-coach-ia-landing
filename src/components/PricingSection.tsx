import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const plans = [
  {
    name: "Mensual",
    price: "$7",
    period: "/mes",
    popular: false,
    savings: null,
  },
  {
    name: "Trimestral",
    price: "$17.99",
    period: "/3 meses",
    popular: true,
    savings: "Ahorrás ~14%",
  },
  {
    name: "Anual",
    price: "$60",
    period: "/año",
    popular: false,
    savings: "Ahorrás ~29%",
  },
]

interface FreemiumRow {
  feature: string
  tier: "gratis" | "limitado" | "premium"
  limit?: string
}

const freemiumRows: FreemiumRow[] = [
  { feature: "Dashboard, historial y progresión", tier: "gratis" },
  { feature: "Champion Pool Builder", tier: "gratis" },
  { feature: "Champ Select (counter-picks, matchup, draft score, builds)", tier: "gratis" },
  { feature: "Análisis de partida", tier: "limitado", limit: "3/mes" },
  { feature: "Estratega (chat libre)", tier: "limitado", limit: "3/mes" },
  { feature: "Live Coaching", tier: "limitado", limit: "3/semana" },
  { feature: "Todo ilimitado + Chat con el Coach", tier: "premium" },
]

export function PricingSection() {
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
            Planes
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Rift Coach es gratis para empezar. Pasate a Premium para coaching ilimitado y acceso completo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-bold uppercase tracking-wide">
                    Más Popular
                  </Badge>
                </div>
              )}
              <Card
                className={`glass-card p-6 md:p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "border-primary/50 glow-gold"
                    : "hover:border-primary/30"
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold uppercase text-foreground/90 mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gradient-gold">{plan.price}</span>
                    <span className="text-foreground/60 text-lg">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <p className="text-success text-sm mt-2 font-medium">{plan.savings}</p>
                  )}
                </div>
                <div className="flex-1" />
                <Button
                  asChild
                  size="lg"
                  className={`w-full text-base uppercase font-bold tracking-wide transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
                      : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
                  }`}
                >
                  <a href="#download">Empezar</a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="glass-card p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-primary mb-6 text-center">
              ¿Qué incluye cada plan?
            </h3>
            <div className="space-y-1">
              {freemiumRows.map((row) => (
                <div
                  key={row.feature}
                  className="flex items-center justify-between gap-4 py-2.5 border-b border-foreground/5 last:border-0"
                >
                  <span className="text-foreground/80 text-sm">{row.feature}</span>
                  <span
                    className={`text-sm font-semibold whitespace-nowrap shrink-0 ${
                      row.tier === "gratis"
                        ? "text-success"
                        : row.tier === "limitado"
                        ? "text-primary"
                        : "text-foreground/50"
                    }`}
                  >
                    {row.tier === "gratis" && `✓ Gratis`}
                    {row.tier === "limitado" && `⚡ ${row.limit}`}
                    {row.tier === "premium" && `★ Premium`}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-foreground/40 text-xs text-center mt-6">
              El plan gratuito no requiere tarjeta de crédito.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
