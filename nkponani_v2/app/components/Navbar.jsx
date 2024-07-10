"use client"

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [toggleDropdown, setToggleDropdown] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
      <nav className="sticky top-0 z-50 grid grid-cols-2 py-5 px-10 sm:px-20 bg-gradient-to-b from-white to-blue-100 dark:from-blue-900 dark:to-dark">
        <div className="relative my-auto flex h-10 cursor-pointer items-center ">
          {theme === "dark" ? (
            <Link href="/">
              <Image
              src="/nkpo-dark.png"
              alt="logo"
              width={150}
              height={100}
              objectFit="contain"
              objectPosition="left"
              priority
            />
            </Link>
          ) : (
            <Link href="/">
            <Image
              src="/nkpo-light.png"
              alt="logo"
              width={150}
              height={100}
              objectFit="contain"
              objectPosition="left"
              priority
            />
            </Link>
          )

          }
          
          
        </div>

      {/* Desktop Navigation */}
      
      <div className="hidden lg:flex lg:flex-1 items-center justify-end space-x-4 text-gray-500">
        <div className="items-center justify-end space-x-6">
          <Link
            href="https://nobus.io"
            className="text-sm font-medium underline text-gray-700 dark:text-white hover:text-gray-800"
          >
            Visit Nobus Cloud
          </Link>
         
          <Link
            href="/contact"
            className="text-sm font-medium rounded-3xl py-3 px-4 border border-dark text-dark dark:border-white dark:text-white "
          >
            Send us a message
          </Link>
        </div>
        
        {theme === "dark" ? (
              <div className="group flex relative rounded-full shadow-xl bg-blue-900 p-2">
                <SunIcon className="cursor-pointer h-6 text-white " onClick={() => setTheme("light")} />
                <span class="group-hover:opacity-100 min-w-max transition-opacity bg-white px-2 text-sm text-dark rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Light mode</span>
              
              </div>
             
        
            
        ) : (
          <div className="group flex relative rounded-full shadow-xl  bg-blue-100 p-2">
            <MoonIcon className="cursor-pointer h-6" onClick={() => setTheme("dark")}/>
            <span class="group-hover:opacity-100 min-w-max transition-opacity bg-dark px-2 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Dark mode</span>
              
          </div>
        )

        }
      </div>
      
   

        {/* Mobile Navigation */}
        <div className='lg:hidden flex relative justify-end'>
          <div className="my-2">

            {theme === "dark" ? (
                  
              <div className="group flex relative rounded-full shadow-lg bg-blue-900 p-2">
                <SunIcon className="cursor-pointer h-6 text-white " onClick={() => setTheme("light")} />
              
                <span class="group-hover:opacity-100 min-w-max transition-opacity bg-white px-2 text-sm text-dark rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-6 mx-auto">Light mode</span>

              </div>
           
              ) : (
                <div className="group flex relative rounded-full shadow-lg  bg-blue-100 p-2">
                  <MoonIcon className="cursor-pointer h-6" onClick={() => setTheme("dark")}/>
                  <span class="group-hover:opacity-100 min-w-max transition-opacity bg-dark px-2 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-6 mx-auto">Dark mode</span>
             
                </div>
              )

            }
          </div>
          <div className="my-3 ml-2">
          {!toggleDropdown && (
              <Bars3Icon 
    
              className='cursor-pointer h-8 font-bold text-dark dark:text-white'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            )}
          {toggleDropdown && <XMarkIcon 
    
              className='cursor-pointer h-8 font-bold text-dark dark:text-white'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />}
          
          </div>
         
          {toggleDropdown && (
            <div className='dropdown'>
              <Link
                href="https://nobus.io"
                onClick={() => setToggleDropdown(false)}
                className="dropdown_link text-sm font-medium underline text-gray-700 dark:text-white hover:text-gray-800"
              >
                Visit Nobus Cloud
              </Link>
              
              <Link
                href="/contact"
                onClick={() => setToggleDropdown(false)}
                className="dropdown_link text-sm font-medium rounded-3xl mt-2 py-3 px-4 border border-dark text-dark dark:border-white dark:text-white"
              >
                Send us a message
              </Link>

             
            </div>
          )}
        </div>
          
      </nav>
   
  )
}

export default Navbar