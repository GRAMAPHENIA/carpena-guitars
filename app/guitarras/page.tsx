import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Guitarras | Modelos Fenix, Det Guitar, Valkiria y Divell",
  description:
    "Explora nuestra colección de guitarras personalizadas de alta calidad. Modelos de 6, 7 y 8 cuerdas con diseños únicos y sonidos excepcionales.",
}

export default function GuitarrasPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Guitarras</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Guitarras únicas, hechas para vos.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-14
        lg:mb-8">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="fenix">Fenix</TabsTrigger>
          <TabsTrigger value="det-guitar">Det Guitar</TabsTrigger>
          <TabsTrigger value="valkiria">Valkiria</TabsTrigger>
          <TabsTrigger value="divell">Divell</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-12">
          <GuitarCategory
            title="Fenix"
            description="Versátil y cómoda. Sonido profesional."
            image="/placeholder.svg?height=600&width=1200"
            href="/guitarras/fenix"
          />

          <GuitarCategory
            title="Det Guitar"
            description="Ergonómicas y potentes. Para estilos modernos."
            image="/placeholder.svg?height=600&width=1200"
            href="/guitarras/det-guitar"
          />

          <GuitarCategory
            title="Valkiria"
            description="Elegantes y claras. Gran presencia."
            image="/placeholder.svg?height=600&width=1200"
            href="/guitarras/valkiria"
          />

          <GuitarCategory
            title="Divell"
            description="Agresivas y definidas. Para metal."
            image="/placeholder.svg?height=600&width=1200"
            href="/guitarras/divell"
          />

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">¿Quieres algo especial?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Personaliza tu guitarra con nosotros.
            </p>
            <Button asChild size="lg">
              <Link href="/guitarras/custom">Guitarra Custom</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="fenix">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
                <h2 className="text-3xl font-bold mb-4">Fenix Series</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Versatilidad y comodidad. Sonido profesional.
                </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Neck-through, gran sustain</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Pastillas de alta ganancia</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Hardware estable</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Acabados a elección</span>
                </li>
              </ul>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link className="text-xs" href="/guitarras/fenix/6-cuerdas">6 Cuerdas</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link className="text-xs" href="/guitarras/fenix/7-cuerdas">7 Cuerdas</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link className="text-xs" href="/guitarras/fenix/8-cuerdas">8 Cuerdas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Guitarra Fenix" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <GuitarCard
              name="Fenix 6 Custom"
              image="/placeholder.svg?height=600&width=400"
              description="6 cuerdas. Versátil y cómoda."
              href="/guitarras/fenix/6-cuerdas"
              strings="6"
            />
            <GuitarCard
              name="Fenix 7 Custom"
              image="/placeholder.svg?height=600&width=400"
              description="7 cuerdas. Rango extendido."
              href="/guitarras/fenix/7-cuerdas"
              strings="7"
            />
            <GuitarCard
              name="Fenix 8 Custom"
              image="/placeholder.svg?height=600&width=400"
              description="8 cuerdas. Para explorar más sonidos."
              href="/guitarras/fenix/8-cuerdas"
              strings="8"
              isNew={true}
            />
          </div>
        </TabsContent>

        <TabsContent value="det-guitar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
                <h2 className="text-3xl font-bold mb-4">Det Guitar Series</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Ergonómicas y potentes. Para estilos modernos.
                </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Escala extendida</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Pastillas modernas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Set-neck, cómoda</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Diapasón cómodo</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <Link className="text-xs" href="/guitarras/det-guitar/6-cuerdas">6 Cuerdas</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link className="text-xs" href="/guitarras/det-guitar/7-cuerdas">7 Cuerdas</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link className="text-xs" href="/guitarras/det-guitar/8-cuerdas">8 Cuerdas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Guitarra Det Guitar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <GuitarCard
              name="Det Guitar 6"
              image="/placeholder.svg?height=600&width=400"
              description="6 cuerdas. Ergonómica y potente."
              href="/guitarras/det-guitar/6-cuerdas"
              strings="6"
            />
            <GuitarCard
              name="Det Guitar 7"
              image="/placeholder.svg?height=600&width=400"
              description="7 cuerdas. Escala extendida."
              href="/guitarras/det-guitar/7-cuerdas"
              strings="7"
            />
            <GuitarCard
              name="Det Guitar 8"
              image="/placeholder.svg?height=600&width=400"
              description="8 cuerdas. Para estilos extremos."
              href="/guitarras/det-guitar/8-cuerdas"
              strings="8"
            />
          </div>
        </TabsContent>

        <TabsContent value="valkiria">
          {/* Contenido similar para Valkiria */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
                <h2 className="text-3xl font-bold mb-4">Valkiria Series</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Elegantes y claras. Gran presencia.
                </p>
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <Link className="text-xs" href="/guitarras/valkiria/6-cuerdas">6 Cuerdas</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link className="text-xs" href="/guitarras/valkiria/7-cuerdas">7 Cuerdas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Guitarra Valkiria"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <GuitarCard
              name="Valkiria 6"
              image="/placeholder.svg?height=600&width=400"
              description="6 cuerdas. Elegante y clara."
              href="/guitarras/valkiria/6-cuerdas"
              strings="6"
            />
            <GuitarCard
              name="Valkiria 7"
              image="/placeholder.svg?height=600&width=400"
              description="7 cuerdas. Rango extendido."
              href="/guitarras/valkiria/7-cuerdas"
              strings="7"
            />
          </div>
        </TabsContent>

        <TabsContent value="divell">
          {/* Contenido similar para Divell */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
                <h2 className="text-3xl font-bold mb-4">Divell Series</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Agresivas y definidas. Para metal.
                </p>
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <Link className="text-xs" href="/guitarras/divell/6-cuerdas">6 Cuerdas</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link className="text-xs" href="/guitarras/divell/7-cuerdas">7 Cuerdas</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Guitarra Divell" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <GuitarCard
              name="Divell 6"
              image="/placeholder.svg?height=600&width=400"
              description="6 cuerdas. Agresiva y definida."
              href="/guitarras/divell/6-cuerdas"
              strings="6"
            />
            <GuitarCard
              name="Divell 7"
              image="/placeholder.svg?height=600&width=400"
              description="7 cuerdas. Para estilos extremos."
              href="/guitarras/divell/7-cuerdas"
              strings="7"
            />
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-24 bg-muted rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Guitarras Personalizadas</h2>
            <p className="text-lg mb-6">
              Creamos instrumentos únicos, adaptados a ti.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">Más Información</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=800" alt="Guitarra Custom" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}

function GuitarCategory({
  title,
  description,
  image,
  href,
}: {
  title: string
  description: string
  image: string
  href: string
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-3xl font-bold mb-4">{title} Series</h2>
        <p className="text-lg text-muted-foreground mb-6">{description}</p>
        <Button asChild>
          <Link href={href} className="flex items-center">
            Ver Modelos <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="relative h-[300px] rounded-lg overflow-hidden order-1 md:order-2">
        <Image src={image || "/placeholder.svg"} alt={`Guitarras ${title}`} fill className="object-cover" />
      </div>
    </div>
  )
}

function GuitarCard({
  name,
  image,
  description,
  href,
  strings,
  isNew,
}: {
  name: string
  image: string
  description: string
  href: string
  strings: string
  isNew?: boolean
}) {
  return (
    <Link href={href} className="group">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {isNew && (
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-sm font-medium px-2 py-1 rounded">
              Nuevo
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-muted-foreground line-clamp-2 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <span className="font-medium">Cuerdas:</span> {strings}
            </div>
            <div className="text-primary font-medium flex items-center">
              Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
