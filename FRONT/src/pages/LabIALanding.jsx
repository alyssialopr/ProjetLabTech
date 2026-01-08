import React from "react";
import LabResultsPage from "./LabResultsPage";

export default function LabIALanding() {
  return (
    <div className="min-h-screen bg-raspberry-700 text-gray-800">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-1 rounded"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <span className="bg-raspberry-200 text-white rounded-full w-8 h-8 flex items-center justify-center">
            logo
          </span>
          Lab'IA
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#how">How it Works</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#security">Security</a>
        </nav>
      </header>

      {/* Hero */}
      <main id="main" className="bg-raspberry-50">
        <section className="mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Comprendre vos résultats médicaux plus facilement avec Lab'IA
            </h1>
            <p className="mb-6 text-gray-600">
              Lab'IA utilise l'intelligence artificielle pour traduire les
              rapports médicaux complexes en explications simples et
              compréhensibles. Aucun diplôme médical n'est nécessaire.
            </p>
            {/* <div className="flex gap-4">
              <button className="bg-pink-600 text-white px-6 py-3 rounded">Create Account</button>
              <button className="border px-6 py-3 rounded">Login</button>
            </div> */}
            <div className="mt-4 text-base text-green-600 flex gap-1">
              <span>✔ Sécurisé et conforme au RGPD</span>
              <span>✔ Complétement accessible</span>
              <span>✔ Gratuit et simple d'utilisation</span>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-raspberry-600 px-6 py-3 rounded mt-6">
                <a href="/results">Commencer</a>
              </button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Laboratory"
            className="rounded-lg shadow"
          />
        </section>

        {/* How it works */}
        <section id="how" className="bg-white py-16">
          <h2 className="text-center text-2xl font-bold mb-10">
            How Lab'IA Works
          </h2>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Upload Your Results",
                text: "Upload your medical test results as a PDF or enter values manually. Your data is encrypted and secure.",
                // icon: Camera,
              },
              {
                title: "AI Analysis",
                text: "Our AI analyzes your results and compares them to reference ranges.",
                // icon: Zap,
              },
              {
                title: "Get Clear Explanations",
                text: "Receive simple explanations in plain language, with visuals and audio options.",
                // icon: Headphones,
              },
            ].map((item, i) => (
              <div key={i} className="border rounded-xl p-6 text-center">
                {/* <Camera color="red" size={48} /> */}
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accessibility */}
        <section id="accessibility" className="bg-gray-50 py-16">
          <h2 className="text-center text-2xl font-bold mb-10">
            Built for Everyone
          </h2>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
            {[
              "Visual Accessibility",
              "Audio Support",
              "Keyboard Navigation",
              "Inclusive Design",
            ].map((title, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 text-center bg-white"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  WCAG 2.2 compliant accessibility features.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section id="security" className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Medical data security"
              className="rounded-lg"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Your Health Data is Protected
              </h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>✔ GDPR Compliant</li>
                <li>✔ End-to-End Encryption</li>
                <li>✔ Full Data Control</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-16">
          <h2 className="text-center text-2xl font-bold mb-10">
            What Our Users Say
          </h2>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {[
              "Clear and reassuring explanations.",
              "Very accessible interface.",
              "Helped me prepare for my doctor visit.",
            ].map((text, i) => (
              <div key={i} className="bg-white border rounded-xl p-6 text-sm">
                <p className="mb-2">★★★★★</p>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-raspberry-500 text-white py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to understand your health better?
          </h2>
          <p className="mb-6">Join thousands of users who trust Lab'IA.</p>
          <button className="bg-white text-black px-6 py-3 rounded">
            <a href="/results">Commencer</a>
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-sm py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-white">Lab'IA</h4>
            <p>Making medical results understandable for everyone.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Legal</h4>
            <ul className="space-y-1">
              <li>
                <a className="text-raspberry-700" href="">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Compliance</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">GDPR Compliance</a>
              </li>
              <li>
                <a href="#">Accessibility Statement</a>
              </li>
              <li>
                <a href="#">Legal Disclaimer</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Contact</h4>
            <p>contact@labia.com</p>
          </div>
        </div>
        <p className="text-center mt-8 text-xs">
          © 2025 Lab'IA. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
