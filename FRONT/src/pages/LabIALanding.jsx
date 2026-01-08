import React from "react";
import Header from "../components/Header";
import HomeHeader from "../components/HomeHeader";
import {
  Import,
  Brain,
  FilePlusCorner,
  File,
  Keyboard,
  Eye,
  Headphones,
  Accessibility,
  Lock,
  Shield 
} from "lucide-react";

export default function LabIALanding() {
  return (
    <div className="min-h-screen bg-raspberry-700 text-gray-800">
      {/* Skip link
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-1 rounded"
      >
        Skip to main content
      </a> */}
      <HomeHeader />
      {/* Header */}
      {/* <header className="flex items-center justify-between px-6 py-4 border-b">
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
      </header> */}

      {/* Hero */}
      <main id="main" className="bg-raspberry-50">
        <section className="mx-auto mt-12 px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Comprendre vos résultats médicaux plus facilement avec Lab'IA
            </h1>
            <p className="mb-6 text-gray-600">
              Lab'IA utilise l'intelligence artificielle pour traduire les
              rapports médicaux complexes en explications simples et
              compréhensibles. Aucun diplôme médical n'est nécessaire.
            </p>

            <div className="mt-4 text-base text-green-600 flex gap-1">
              <span>✔ Sécurisé et conforme au RGPD</span>
              <span>✔ Complétement accessible</span>
              <span>✔ Gratuit et simple d'utilisation</span>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-raspberry-600 px-6 py-3 rounded mt-6">
                <a href="/analysis">Commencer</a>
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
            <div className="flex flex-col border rounded-xl p-6 text-center items-center">
              {
                <Import
                  size={48}
                  className="text-raspberry-700 bg-raspberry-300 rounded-2xl m-4 p-2"
                />
              }
              <h3 className="font-semibold mb-2">Upload vos résultats</h3>
              <p className="text-sm text-gray-600">
                Upload your medical test results as a PDF or enter values
                manually. Your data is encrypted and secure.
              </p>
            </div>
            <div className="flex flex-col border rounded-xl p-6 text-center items-center">
              {
                <Brain
                  size={48}
                  className="text-green-800 bg-green-300 rounded-2xl m-4 p-2"
                />
              }
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-sm text-gray-600">
                Our AI analyzes your results and compares them to reference
                ranges.
              </p>
            </div>
            <div className="flex flex-col border rounded-xl p-6 text-center items-center">
              {
                <FilePlusCorner
                  size={48}
                  className="text-blue-800 bg-blue-300 rounded-2xl m-4 p-2"
                />
              }
              <h3 className="font-semibold mb-2">Get Clear Explanations</h3>
              <p className="text-sm text-gray-600">
                Receive simple explanations in plain language, with visuals and
                audio options.
              </p>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section id="accessibility" className="bg-gray-50 py-16">
          <h2 className="text-center text-2xl font-bold mb-6">
            Built for Everyone
          </h2>
          <p className="text-center mb-6">
            Designed following WCAG 2.2 AA and RGAA accessibility standards
          </p>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
            <div className="flex flex-col border rounded-xl p-6 text-center bg-white items-center">
              {
                <Eye
                  size={48}
                  className="text-raspberry-800 bg-raspberry-300 rounded-2xl m-4 p-2"
                />
              }
              <h3 className="font-semibold">Visual Accessibility</h3>
              <p className="text-sm text-gray-600 mt-2">
                WCAG 2.2 compliant accessibility features.
              </p>
            </div>
            <div className="flex flex-col border rounded-xl p-6 text-center bg-white items-center">
              {
                <Headphones
                  size={48}
                  className="text-orange-800 bg-orange-300 rounded-2xl m-4 p-2"
                />
              }
              <h3 className="font-semibold">Audio Support</h3>
              <p className="text-sm text-gray-600 mt-2">
                WCAG 2.2 compliant accessibility features.
              </p>
            </div>
            <div className="flex flex-col border rounded-xl p-6 text-center bg-white items-center">
              {
                <Keyboard
                  size={48}
                  className="text-blue-800 bg-blue-300 rounded-2xl m-4 p-2"
                />
              }
              <h3 className="font-semibold">Keyboard Navigation</h3>
              <p className="text-sm text-gray-600 mt-2">
                WCAG 2.2 compliant accessibility features.
              </p>
            </div>
            <div className="flex flex-col border rounded-xl p-6 text-center bg-white items-center">
              {
                <Accessibility
                  size={48}
                  className="text-green-800 bg-green-300 rounded-2xl m-4 p-2"
                />
              }
              <h3 className="font-semibold">Inclusive Design</h3>
              <p className="text-sm text-gray-600 mt-2">
                WCAG 2.2 compliant accessibility features.
              </p>
            </div>
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
              <ul className="flex flex-col text-sm text-gray-600">
                <li className="flex items-center">
                  {
                    <Shield
                      size={40}
                      className="text-green-800 bg-green-300 rounded-2xl m-4 p-2"
                    />
                  }
                  <p> GDPR Compliant</p>
                </li>
                <li className="flex items-center">
                  {
                    <Lock
                      size={40}
                      className="text-blue-800 bg-blue-300 rounded-2xl m-4 p-2"
                    />
                  }
                  <p>End-to-End Encryption</p>
                </li>
                <li className="flex items-center">
                  {
                    <File
                      size={40}
                      className="text-purple-800 bg-purple-300 rounded-2xl m-4 p-2"
                    />
                  }
                  <p> Full Data Control</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-raspberry-500 text-white py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to understand your health better?
          </h2>
          <p className="mb-6">Join thousands of users who trust Lab'IA.</p>
          <button className="bg-white text-black px-6 py-3 rounded">
            <a href="/analysis">Commencer</a>
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
