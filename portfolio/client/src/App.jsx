import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Education />

        <Certifications />

        {/* Contact */}
        <section
          id="contact"
          className="bg-black px-6 py-32"
        >
          <div className="max-w-6xl mx-auto">

            <p className="text-cyan-400 font-mono mb-3">
              CONTACT
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Build Something{" "}
              <span className="text-cyan-400">
                Great
              </span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl text-lg">
              Have an idea, project or collaboration in mind?
              Let's connect and build something meaningful.
            </p>

            <a
              href="mailto:rajajayamurugan@gmail.com"
              className="inline-block mt-8 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition"
            >
              Contact Me
            </a>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;