import Head from 'next/head'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Clouds || E-Commerse Makeup Using NextJs</title>
        <meta name='description' content='E-Commerse Makeup Using NextJs' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Krona+One&family=Poppins:wght@200;300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
