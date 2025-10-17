import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Impressum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1>Impressum</h1>
      <p>Angaben gemäß § 5 TMG</p>

      <p>
        <strong>Brendan Mannion</strong><br />
        Sonnenallee 12, 12047 Neukolln, Berlin, Germany<br />
        Email: <a href="mailto:bman3210@gmail.com">bman3210@gmail.com</a><br />
        LUCID-ID: DE3649740821843<br />
        Steuernummer: Pending – will be updated upon receipt<br />
        Mitglied der IHK Berlin
      </p>

      <p>Verantwortlich für den Inhalt: Brendan Mannion, Sonnenallee 12, 12047 Neukolln, Berlin, Germany</p>

      </main>

      <Footer />
    </div>
  )
}
