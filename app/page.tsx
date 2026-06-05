export default function Home() {
return ( <main className="min-h-screen bg-white text-gray-900">

```
  {/* Hero */}
  <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white">
    <div className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Distrito Inteligente
      </h1>

      <h2 className="text-3xl font-semibold mb-4">
        Sua empresa funcionando 24 horas por dia.
      </h2>

      <p className="text-xl max-w-3xl mx-auto mb-8">
        Automação e IA para empresas que querem crescer.
        Transforme o atendimento da sua empresa com
        inteligência artificial e automações inteligentes.
      </p>

      <a
        href="https://wa.me/5561982893385"
        target="_blank"
        className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition"
      >
        Solicitar Demonstração
      </a>
    </div>
  </section>

  {/* Benefícios */}
  <section className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-4xl font-bold text-center mb-12">
      Como podemos ajudar
    </h2>

    <div className="grid md:grid-cols-4 gap-6">
      <div className="shadow-lg rounded-2xl p-6">
        <h3 className="font-bold text-xl mb-3">
          Atendimento 24h
        </h3>
        <p>
          Nunca mais perca clientes por falta de resposta.
        </p>
      </div>

      <div className="shadow-lg rounded-2xl p-6">
        <h3 className="font-bold text-xl mb-3">
          Agendamento Inteligente
        </h3>
        <p>
          Automatize marcações e confirmações.
        </p>
      </div>

      <div className="shadow-lg rounded-2xl p-6">
        <h3 className="font-bold text-xl mb-3">
          Captação de Leads
        </h3>
        <p>
          Capture oportunidades automaticamente.
        </p>
      </div>

      <div className="shadow-lg rounded-2xl p-6">
        <h3 className="font-bold text-xl mb-3">
          Automações
        </h3>
        <p>
          Elimine tarefas repetitivas do dia a dia.
        </p>
      </div>
    </div>
  </section>

  {/* Nichos */}
  <section className="bg-gray-100 py-20">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Soluções para empresas
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Clínicas Odontológicas
          </h3>

          <ul className="space-y-2">
            <li>✓ Agendamento automático</li>
            <li>✓ Confirmação de consultas</li>
            <li>✓ Atendimento 24 horas</li>
            <li>✓ Captação de pacientes</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Imobiliárias
          </h3>

          <ul className="space-y-2">
            <li>✓ Qualificação de leads</li>
            <li>✓ Atendimento imediato</li>
            <li>✓ Agendamento de visitas</li>
            <li>✓ Encaminhamento para corretores</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="bg-blue-900 text-white py-20">
    <div className="max-w-4xl mx-auto text-center px-6">
      <h2 className="text-4xl font-bold mb-6">
        Pronto para automatizar sua empresa?
      </h2>

      <p className="text-xl mb-8">
        Solicite uma demonstração gratuita e veja a IA funcionando
        na prática.
      </p>

      <a
        href="https://wa.me/55SEUNUMERO"
        target="_blank"
        className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg"
      >
        Falar no WhatsApp
      </a>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black text-white py-8 text-center">
    <p>
      © 2026 Distrito Inteligente - Automação e IA para empresas que querem crescer.
    </p>
  </footer>

</main>

);
}
