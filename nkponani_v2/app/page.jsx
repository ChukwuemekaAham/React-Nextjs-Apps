import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function Home() {
  
  return (
    <section>
    <Navbar />
    <main className="flex min-h-screen flex-col mt-10 sm:mt-20">
      <section className='grid gap-y-6 gap-x-6 px-10 sm:px-20'>
        <div className=''>
          <h1 className="uppercase pb-2 font-bold text-3xl sm:text-5xl md:text-6xl text-dark dark:text-white">
          nkponani limited
            
          </h1>
          <p className="text-xl">The {' '} <span className="inline-block text-blue-700 font-semibold">Nobus Cloud </span>{' '} Company</p>

          <div className='grid grid-cols-1 sm:flex sm:grid-cols-none pt-3'>
            <div>
            <Image
              src="/people.png"
              layout='column'
              width={150}
              height={36}
              objectFit="contain"
              objectPosition='left'
              priority
            />
            </div>
            <div>
            <h2 className={`md:mb-3 text-sm font-semibold sm:pl-2 pt-2`}>
              Servicing{' '}
              <span className="inline-block text-blue-700">
               100+ 
              </span>
              {' '}
              businesses worldwide.
            </h2>
            </div>
                  
          </div>

        </div>
        <div className='relative h-96 w-full'>
          <Image
              src="/banner.png"
              layout="fill"
              objectFit="cover"
              className='hidden sm:block'
              priority
            />
            <Image
              src="/info.png"
              layout="fill"
              objectFit="cover"
              className='sm:hidden'
              priority
            />
        </div>
      </section>

      <section className='grid grid-cols-1 gap-x-6 justify-items-center py-20'>
        <div className='text-center px-10'>
          <h1 className="text-2xl text-dark dark:text-white">
          Enabling services for{' '} <span className="inline-block font-semibold text-blue-700">local </span> {' '}and 
          <br />
          {' '}<span className="inline-block font-semibold text-blue-700">global consumption </span>
            
          </h1>
        </div>

        <div className='flex relative h-96 w-full my-0 sm:my-10 justify-center'>
          <Image
              src="/map2.png"
              width={1000}
              height={1000}
              priority
            />
        </div>

        <div className='text-center justify-items-center px-10 md:px-20' >
          <h1 className="text-2xl text-dark dark:text-white">
          We are the{' '} <span className="inline-block font-semibold text-blue-700">Nobus Cloud Company </span> 
          </h1>
          <p className="">
          Accelerate your entire workflow, no matter the size of your infrastructure, Nobus cloud services is available to facilitate your infrastructure with a 
          {' '} <span className="inline-block text-blue-700">server uptime of 99.982%, </span> {' '} 
          we are ready to kick start your cloud adoption and scale to any level. 
          </p>
        </div>

        <div className='mt-8'>
        <Link
            href="https://nobus.io"
            className="text-sm font-medium rounded-3xl py-3 px-4 border border-dark bg-transparent text-dark dark:border-light dark:text-light"
          >
            Visit Nobus Cloud
          </Link>
        </div>
        
        
      </section>

      <section className='hidden md:grid md:grid-cols-2 md:text-left sm:pl-20 py-20' 
          style={{
            backgroundImage: "url('/wm.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
          
        <div className='text-dark'>
          <h1 className="capitalize font-bold text-5xl pb-3">
          Contact Us
          </h1>

          <h1 className="font-bold text-2xl">
          Mailing address:
          </h1>
          <p className='pb-3'>Victoria Island, Lagos State, Nigeria</p>

          <h1 className="capitalize font-bold text-2xl">
          Send an email:
          </h1>
          <p>support@nobus.io</p>
          <p>info@nkponani.com</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 pt-4'>
          <div>
            <h1 className="capitalize font-bold text-2xl">
            Call Us
            </h1>
            <p>
            +2347057721442
            </p>
          </div>

          <div>
          <div className='pt-3'>
          <Link
            href="/contact"
            className="text-sm font-medium rounded-3xl py-3 px-4 border border-dark bg-transparent text-dark"
          >
            Send us a message
          </Link>
          </div>
          </div>
          
          
          </div>
        </div>
        
        
      </section>

      <section className='grid grid-cols-1 md:hidden pl-10 sm:pl-20 py-20' 
          style={{
            backgroundImage: "url('/w.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
          
        <div className='text-dark'>
          <h1 className="capitalize font-bold text-3xl pb-5">
          Contact Us
          </h1>

          <h1 className="font-bold text-xl">
          Mailing address:
          </h1>
          <p className='pb-3'>Victoria Island, Lagos State, Nigeria</p>

          <h1 className="capitalize font-bold text-xl">
          Send an email:
          </h1>
          <p>support@nobus.io</p>
          <p className='pb-3'>info@nkponani.com</p>

          <div className='grid grid-cols-1 md:grid-cols-1 gap-y-6 gap-x-6'>
          <div>
            <h1 className="capitalize font-bold text-xl">
            Call Us
            </h1>
            <p>
            +2347057721442
            </p>
          </div>

          <div>
          <div className='pt-3'>
          <Link
            href="/contact"
            className="text-sm font-medium rounded-3xl py-3 px-4 border border-dark bg-transparent text-dark"
          >
            Send us a message
          </Link>
          </div>
          </div>
          
          
          </div>
        </div>
        
        
      </section>
     

    </main>
    <Footer />
    </section>
  )
}
