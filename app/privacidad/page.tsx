export default function PoliticasPrivacidad() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Políticas y Privacidad</h1>
        <p className="mb-4">Este sitio web utiliza la información proporcionada por los usuarios únicamente para fines funcionales y de contacto. No compartimos datos personales con terceros y respetamos la privacidad de nuestros visitantes.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Política de Privacidad</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>No recopilamos información personal sensible.</li>
          <li>Los datos de contacto se usan solo para responder consultas.</li>
          <li>No enviamos correos no solicitados ni compartimos información con terceros.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Términos de Uso</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>El contenido del sitio es solo informativo y funcional.</li>
          <li>El usuario acepta estas políticas al navegar en el sitio.</li>
        </ul>
        <p className="mt-8 text-muted-foreground">Para más información, contáctenos a través del formulario de contacto.</p>
      </div>
    </section>
  )
}
