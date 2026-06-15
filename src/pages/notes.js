import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Notes() {
  return (
    <>
      <Head>
        <title>Notes - Melania Yoo</title>
      </Head>

      <Layout>
        <section className="section-padding">
          <div className="container">
            <div className="notes-landing">
              <h1>Notes</h1>
              <p>
                A peek inside my second brain — where I collect new things I learn, connect
                ideas, and document my growth as an engineering student.
              </p>

              <a
                href="https://melaniayoo.github.io/quartz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Open Notes
              </a>
            </div>
          </div>
        </section>
      </Layout>

      <style jsx>{`
        .section-padding {
          padding: 6rem 0 2rem 0;
          min-height: 100vh;
        }

        .notes-landing {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          background: white;
          padding: 3rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
        }

        .notes-landing h1 {
          font-size: 2.5rem;
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        .notes-landing p {
          color: var(--light-text);
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 1.5rem;
          background: var(--secondary-color);
          color: white;
          text-decoration: none;
          border-radius: var(--border-radius);
          font-weight: 600;
          transition: var(--transition);
        }

        .btn:hover {
          background: var(--primary-color);
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }
      `}</style>
    </>
  );
}