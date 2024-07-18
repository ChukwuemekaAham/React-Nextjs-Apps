import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import InfoCard from '../components/InfoCard'
import { format } from 'date-fns';
import Map from '../components/Map'
import searchResult from '../data/searchResult'

const searchResults = searchResult()

function Search() {
  const router = useRouter()
  // ES6 destructuring 
  const { location, startDate, endDate, noOfGuests } = router.query
  console.log(location, startDate)
   
  const formattedStartDate = startDate ? format(new Date(startDate), 'dd MMMM yy') : ""
  const formattedEndDate = endDate ? format(new Date(endDate), 'dd MMMM yy') : ""
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div
            className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 
            lg:inline-flex"
          >
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map((item) => (
              <InfoCard
                key={item.id}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults}/>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search


// export default function Search({ searchResults }) {
//   return (
//     <div className=""></div>
//   )
// }

// export async function getServerSideProps() {
//   try {
//     const searchResults = await fetch('http://jsonkeeper.com/b/5NPS').then(
//       (res) => res.json()
//     )

//     return {
//       props: {
//         searchResults,
//       },
//       }
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
