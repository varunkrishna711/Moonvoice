import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import frontImage from "./images/front_image.jpg"
import microsoft from "./images/microsoft.png"
import dropbox from "./images/dropbox.png"
import amazon from "./images/amazon.png"
import shopify from "./images/shopify.png"
import Card from './components/Navbar/subCard'
import { faNewspaper, faFile, faFileAlt, faMoneyBillWave  } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
          <Navbar />
          {/* Starting Section */}
          <div className='flex flex-col p-4 lg:flex-row lg:items-center lg:justify-center'>
            <div className='flex flex-col justify-center items-center gap-16 lg:w-1/2 lg:items-start'>
              <h1 className='w-full md:w-1/2 text-5xl lg:text-7xl font-bold leading-tight'>Invoices help your business quickly</h1>
              <p className='w-full md:w-1/2 text-lg lg:text-lg text-gray-500'>Invoices are very important because they record all transactions of your company</p>
              <div className="flex flex-col justify-center items-center lg:flex-row gap-4 lg:w-3/4 lg:justify-start">
                <input type="text" class="bg-custom-light-green5 rounded-full py-2 px-4 outline-none focus:bg-custom-light-green2 transition duration-300 ease-in-out h-16 w-full md:w-96" placeholder='Enter email:' />
                <button className="px-4 py-2 bg-custom-dark-green text-custom-light-green2 w-32 h-14 rounded-full hover:bg-green-600 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out">Get Started</button>
              </div>
            </div>
            <div className='mt-4'>
              <Image src={frontImage} width={800} height={1000}/>
            </div>
          </div>

          {/* Trusted by */}

          <div className='hidden md:flex flex-col items-center justify-center mt-16 bg-gray-100 gap-8 pt-4 pb-4'>
            <h2 className='text-gray-500 text-2xl'>Trusted by millions of startups and business...</h2>
            <div className='flex items-center gap-32'>
                <Image src={microsoft} width={200} height={100}/>
                <Image src={amazon} width={200} height={100}/>
                <Image src={dropbox} width={200} height={100}/>
                <Image src={shopify} width={200} height={100}/>
            </div>
          </div>

          {/* Importance of Invoice */}

          <div className='mt-28'>
            <h1 className='flex font-bold text-2xl p-4 md:p-0 md:text-4xl items-center justify-center mb-16'>Unlock Your Revenue Potential: Empower Your Business with Invoicing Excellence!</h1>

            <div className='flex flex-col items-center justify-center mx-0 p-4  md:grid grid-cols-2 gap-16 md:mx-96'>
              <Card 
                icon = {faNewspaper}
                title="As proof if something goes wrong"
                content="This invoice is used for checking the shipping goods and the amount of the bill given"
              />
              <Card 
                icon= {faFile}
                title="As proof if something goes wrong"
                content="This invoice is used for checking the shipping goods and the amount of the bill given"
              />
              <Card 
                icon= {faFileAlt}
                title="As proof if something goes wrong"
                content="This invoice is used for checking the shipping goods and the amount of the bill given"
              />
              <Card 
                icon = {faMoneyBillWave}
                title="As proof if something goes wrong"
                content="This invoice is used for checking the shipping goods and the amount of the bill given"
              />
            </div>
          </div>

          
      </div>
  )
}
