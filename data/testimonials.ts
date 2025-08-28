export interface Testimonial {
  id: string
  name: string
  title: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Chowy Fernandez",
    title: "Guitarrista - Barro",
    quote:
      "El producto cumple con las especificaciones técnicas indicadas. Calidad funcional y entrega correcta.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Rod Zamora",
    title: "Guitarrista - Los Turkos",
    quote:
      "La compra se realizó de manera sencilla y rápida. El instrumento funciona según lo esperado.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Juani de Abreu",
    title: "Guitarrista - Plan 4",
    quote:
      "El servicio fue correcto y el producto recibido es funcional. Satisfecho con la experiencia general.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "4",
    name: "Facundo Gatelett",
    title: "Bajista - Jaque Reina",
    quote:
      "Mi bajo JDA 5 tiene un sonido único que destaca en cualquier mezcla. La construcción es sólida y el instrumento es increíblemente cómodo de tocar durante horas.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "5",
    name: "Brian Spindola",
    title: "Guitarrista - Del Infierno",
    quote:
      "El proceso de diseñar mi guitarra personalizada fue una experiencia increíble. El equipo entendió exactamente lo que buscaba y el resultado superó todas mis expectativas.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "6",
    name: "German Bielnerkorn",
    title: "Guitarrista - Taenia",
    quote:
      "Mi Fenix 7 Custom es simplemente perfecta. El sonido, la construcción, el acabado... todo está a un nivel superior. Es el instrumento que siempre soñé tener.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]
