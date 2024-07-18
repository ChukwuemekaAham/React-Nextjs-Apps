"use client"

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs"

function Header() {
    const { user } = useUser()
  return (
    <div className="flex items-center justify-between P-5">
        {user && (
            <h1>
                {user?.firstName}
                {`'s`} Space
            </h1>
        )}

        {/* Breadcrumbs */}

        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default Header