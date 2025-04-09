import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';
import Sidebar from '../sidebar';
import { Button } from '@/components/ui/button';
import CreateAutomation from '../create-automation';

type Props={
    slug:string
}

const Infobar = ({slug}:Props) => {
  return (
    <div>
        <div className='p-5'>
        <CreateAutomation/>
        </div>
        <div className='lg:hidden'>
        <Sheet >
  <SheetTrigger><Menu/></SheetTrigger>
  <SheetContent  side='left' className='w-[300px] bg-black'>
    <div className='px-2 text-white h-full'>
    <Sidebar slug={slug}/>
    </div>
<SheetFooter className='absolute top-0 right-0'>
<SheetClose asChild>
                <Button className='cursor-pointer z-10 text-white'>X</Button>
              </SheetClose>
</SheetFooter>
  </SheetContent>
</Sheet>
        </div>

    </div>
  );
}

export default Infobar;
