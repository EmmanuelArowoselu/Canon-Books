import Head from 'next/head'
import Navbar from '../components/Navbar'
import Categories from '../components/categories'
import Genres from '../components/genres'
import Description from '../components/description'
import Footer from '../components/footer'

export default function Home() {
  return (
    
    <div>
      
      <Head>
        <title>Great Books</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100&display=swap');</style>
      </Head>
      <Navbar/>
      <Description/>
      <Categories/>
      <Genres/>
      <Footer/>
    </div>
    
  )
}
