import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Home() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText("m3yoo@uwaterloo.ca");
    alert("Email copied to clipboard.");
  };

  return (
    <>
      <Head>
        <title>Melania Yoo - Portfolio</title>
        <meta name="description" content="Personal portfolio of Melania Yoo" />
      </Head>

      <Layout>
        <section className="home">
          <div className="container">
            <main className="home-content">
              <p className="eyebrow">Waterloo Engineering</p>

              <h1>Melania Yoo</h1>

              <div className="contact-links" aria-label="Contact links">
                <a
                  href="https://github.com/melaniayoo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/melaniayoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <button type="button" onClick={copyEmail}>
                  Email
                </button>
              </div>

              <p className="tagline">
                A small archive of things I build, study, and think about.
              </p>
            </main>
          </div>
        </section>
      </Layout>

      <style jsx>{`
        .home {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: var(--background-color);
          padding-top: 7rem;
        }

        .home-content {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .eyebrow {
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--light-text);
          margin-bottom: 1.2rem;
          font-weight: 600;
        }

        h1 {
          font-size: clamp(3.5rem, 10vw, 7.5rem);
          line-height: 0.9;
          letter-spacing: -0.07em;
          color: var(--primary-color);
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .contact-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2.25rem;
          flex-wrap: wrap;
        }

        .contact-links a,
        .contact-links button {
          color: var(--text-color);
          background: none;
          border: none;
          font: inherit;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          transition: var(--transition);
        }

        .contact-links a::after,
        .contact-links button::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 1px;
          background: var(--primary-color);
          transition: var(--transition);
        }

        .contact-links a:hover,
        .contact-links button:hover {
          color: var(--primary-color);
        }

        .contact-links a:hover::after,
        .contact-links button:hover::after {
          width: 100%;
        }

        .tagline {
          color: var(--light-text);
          font-size: 1rem;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .home {
            padding-top: 7rem;
          }

          .contact-links {
            gap: 1.3rem;
          }

          .tagline {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
}