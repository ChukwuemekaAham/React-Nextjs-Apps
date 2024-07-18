import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import Spinner from '../components/Spinner'
import cardData from '../data/cardData'
import exploreData from '../data/exploreData'

const card = cardData()
const explore = exploreData()

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          {explore && explore.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {explore.map((item) => (
                <SmallCard
                  key={item.img}
                  img={item.img}
                  distance={item.distance}
                  location={item.location}
                />
              ))}
            </div>
          ) : (
            <div> <Spinner /> Loading... </div>
          )}
        </section>
        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          {card && card.length > 0 ? (
          <div className="-ml-3 flex space-x-3 overflow-x-scroll p-3 scrollbar-hide">
            {card?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
          ) : (
            <div> <Spinner /> Loading... </div>
          )}
        </section>
        <LargeCard
          img="/4cj.jpeg"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  )
}

// export default function Home({ exploreData, cardData }) {
//   return (
//     <div className=""></div>
//   )
// }

// export async function getServerSideProps() {
//   try {
//     const exploreDataRes = await fetch('http://jsonkeeper.com/b/4G1G')
//     const exploreData = await exploreDataRes.json()

//     const cardDataRes = await fetch('http://jsonkeeper.com/b/VHHT')
//     const cardData = await cardDataRes.json()

//     return {
//       props: {
//         exploreData,
//         cardData,
//       },
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     return {
//       props: {
//         exploreData: [],
//         cardData: [],
//       },
//     }
//   }
// }