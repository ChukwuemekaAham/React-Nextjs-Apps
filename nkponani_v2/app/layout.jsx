import "./globals.css";
import { Ubuntu } from 'next/font/google'
import Providers from './Providers'

const ubuntu = Ubuntu({ 
          weight: ["300", "400", "500", "700"],   
          display: "swap",  
          subsets: ['latin'] 
})

export const metadata = {
  title: 'Nkponani Limited',
  description: 'Beyond your horizon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={ubuntu.className}>
        <Providers>
        <div className='bg-clip-content bg-gradient-to-t from-white to-blue-100 dark:from-blue-800 dark:to-dark'>
        
        {children}
        
        </div>
        </Providers>
      </body>
    </html>
  )
}
