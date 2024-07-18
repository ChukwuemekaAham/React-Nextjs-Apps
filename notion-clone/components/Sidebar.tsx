import { MenuIcon } from 'lucide-react';
import NewDocumentButton from './NewDocumentButton';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  
function Sidebar() {
    const menuOptions = (
        <>
            <NewDocumentButton />
        </>
    )
  return (
    <div className='p-2 md:p-5 bg-gray-200 relative'>
        
        <Sheet>
            <SheetTrigger>Open</SheetTrigger>
                <MenuIcon className='p-2 hover:opacity-30 rounded-lg' size={40} />
            <SheetContent side="left">
                <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <div>{menuOptions}</div>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
        <div className='hidden md:inline'>{menuOptions}</div>

    </div>
  )
}

export default Sidebar