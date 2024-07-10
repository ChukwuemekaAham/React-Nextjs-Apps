"use client"

import { ThemeProvider, useTheme } from "next-themes"
import { useState, useEffect } from "react"

function Providers({children}) {

    const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider attribute='class'>
        {children}
    </ThemeProvider>
  )
}

export default Providers