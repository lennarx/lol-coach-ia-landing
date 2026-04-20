# Planning Guide

Landing page profesional de LoL Coach IA — una aplicación de coaching de League of Legends potenciada por IA, dirigida al mercado LATAM con español rioplatense.

**Experience Qualities**:
1. **Premium Gaming** - La experiencia debe sentirse como una herramienta profesional de eSports, no un sitio web genérico
2. **Aspiracional** - Cada sección debe motivar al usuario a mejorar su gameplay y subir de elo
3. **Technically Credible** - El diseño debe transmitir sofisticación técnica y confianza en la tecnología de IA

**Complexity Level**: Content Showcase (information-focused)
Una landing page informativa de una sola vista con múltiples secciones que presentan las características del producto, testimonios y CTAs. No requiere estado complejo ni múltiples vistas.

## Essential Features

**Hero Section con CTA Principal**
- Functionality: Presentar la propuesta de valor y capturar atención inmediatamente
- Purpose: Convertir visitantes en descargas
- Trigger: Carga inicial de la página
- Progression: Usuario llega → Lee título aspiracional → Ve beneficios → Click en CTA dorado
- Success criteria: CTA visualmente dominante, mensaje claro en menos de 3 segundos de lectura

**Sección de Features Principales (3 Fases de Coaching)**
- Functionality: Explicar las tres fases del coaching (pre-game, in-game, post-game)
- Purpose: Demostrar valor funcional completo del producto
- Trigger: Scroll hacia abajo desde hero
- Progression: Scroll → Animación fade-in de cards → Lectura de features detallados → Comprensión del flujo
- Success criteria: Grid de 3 columnas responsive, íconos claros, texto conciso pero informativo

**Sección de Features Extras (4 características adicionales)**
- Functionality: Mostrar funcionalidades complementarias que agregan valor
- Purpose: Diferenciar el producto de competidores
- Trigger: Scroll continuo
- Progression: Visualización → Lectura de features específicos → Valoración de funcionalidad completa
- Success criteria: Grid 2x2 responsive, presentación clara y escaneable

**Sección "¿Cómo funciona?" (3 pasos)**
- Functionality: Simplificar el proceso de adopción
- Purpose: Reducir fricción percibida y mostrar facilidad de uso
- Trigger: Scroll
- Progression: Lectura de pasos numerados → Comprensión de simplicidad → Reducción de objeciones
- Success criteria: Números grandes dorados visibles, copy ultra-simple, flujo de 1-2-3 obvio

**Testimonials Section (Reseñas de Usuarios)**
- Functionality: Proveer social proof y resultados específicos
- Purpose: Generar confianza y mostrar resultados reales
- Trigger: Scroll
- Progression: Lectura de testimonios → Identificación con jugadores LATAM → Visualización de progreso propio
- Success criteria: 3 testimonios con nombres, ciudades y progresión de elo visible

**CTA Final + Footer**
- Functionality: Última oportunidad de conversión y links informativos
- Purpose: Capturar usuarios convencidos y proveer información legal/contacto
- Trigger: Scroll hasta el final
- Progression: Lectura de CTA final → Click en descarga O navegación a links sociales/legales
- Success criteria: CTA prominente, footer con disclaimer de Riot Games

## Edge Case Handling
- **Usuario en mobile**: Layout responsive con grid que colapsa a 1 columna, manteniendo jerarquía visual
- **Navegadores sin backdrop-filter**: Fallback a background sólido con opacidad para glassmorphism
- **Scroll performance**: Usar intersection observer para animaciones, evitar re-renders innecesarios
- **Links placeholder**: Todos los links (#download, GitHub, Discord) funcionan pero no navegan a destinos reales

## Design Direction
El diseño debe evocar la sensación de una herramienta profesional de eSports — oscura, elegante, con acentos dorados que transmiten valor premium. Debe sentirse como la interfaz de un torneo de League of Legends: tecnológica, precisa, aspiracional. Los usuarios deben sentir que están accediendo a tecnología de nivel competitivo.

## Color Selection

**Primary Color**: `#ffd700` (Dorado/Gold) — Representa victoria, elo alto, valor premium. Este es el color de los CTAs y elementos de acción principales.

**Hover State**: `#ffe44d` (Dorado claro) — Versión más brillante para estados hover que mantiene el carácter premium.

**Background**: `#0a0a0f` (Negro profundo) — Background principal que crea el ambiente oscuro característico de gaming/eSports.

**Success Color**: `#4ade80` (Verde) — Para indicadores positivos, stats de victoria, mejoras.

**Danger Color**: `#f87171` (Rojo) — Para warnings, derrotas, o alertas.

**Warning Color**: `#fbbf24` (Amarillo/Ámbar) — Para información importante o estados intermedios.

**Foreground/Background Pairings**:
- Background Primary (`#0a0a0f`): White text(`#ffffff`) - Ratio 19.8:1 ✓
- Accent/CTA (`#ffd700`): Dark text(`#0a0a0f`) - Ratio 12.6:1 ✓
- Card Glass (rgba(255,255,255,0.05)): White text(`#ffffff`) - Ratio 18.5:1 ✓
- Success (`#4ade80`): Dark text(`#0a0a0f`) - Ratio 11.2:1 ✓

## Font Selection
Las tipografías deben crear contraste dramático: Bebas Neue para títulos grandes y aspiracionales (evoca pósters de eSports), DM Sans para cuerpo legible y moderno (profesional sin ser corporativo).

**Typographic Hierarchy**:
- H1 (Hero Title): Bebas Neue Bold/56-72px/tight letter spacing/uppercase
- H2 (Section Titles): Bebas Neue Bold/40-48px/tight letter spacing/uppercase
- H3 (Feature Titles): Bebas Neue Regular/28-32px/normal letter spacing
- Body Large (Hero Subtitle): DM Sans Regular/18-20px/1.6 line-height
- Body (Features, descriptions): DM Sans Regular/16px/1.7 line-height
- Small (Badges, footer): DM Sans Medium/14px/1.5 line-height

## Animations
Las animaciones deben ser sutiles pero presentes — fade-in y slide-up al scrollear para cada sección, hover effects en botones con scale ligero (1.02-1.05) y glow dorado, transiciones suaves (200-300ms) en todos los estados interactivos. El objetivo es crear sensación de "app premium" sin distraer del contenido.

## Component Selection

**Components**:
- **Button** (shadcn): Para CTAs principales con customización dorada y hover glow
- **Card** (shadcn): Para feature cards con glassmorphism overlay
- **Badge** (shadcn): Para pills como "Gratis durante la beta" y tech stack
- **Separator** (shadcn): Para divisiones sutiles entre secciones

**Customizations**:
- Custom scrollbar (4px thin) con thumb en neutral-700
- Glassmorphism cards: background rgba con backdrop-filter blur
- Custom gradient backgrounds para hero section
- Números grandes dorados customizados para sección "Cómo funciona"

**States**:
- Buttons: Default (dorado sólido) → Hover (dorado claro + scale 1.05 + box-shadow glow) → Active (scale 0.98)
- Cards: Default (glass sutil) → Hover (border dorado sutil + lift con shadow)
- Links: Default (texto blanco) → Hover (texto dorado)

**Icon Selection**:
- Usar emojis para features principales (🎯 🔴 📊) por su tamaño y reconocimiento inmediato
- Phosphor icons para elementos UI menores (chevrons, external links en footer)

**Spacing**:
- Container max-width: 1280px (xl)
- Section padding vertical: py-16 md:py-24
- Card padding: p-6 md:p-8
- Gap entre cards: gap-6 md:gap-8
- Button padding: px-8 py-4

**Mobile**:
- Hero: Stack vertical, título reduce a 40px, CTA full-width en mobile
- Feature grids: 3 columnas → 1 columna en mobile
- Testimonials: 3 columnas → scroll horizontal con snap en mobile
- Tech badges: Wrap natural en mobile
- Padding general reducido en mobile (px-4 vs px-8)
