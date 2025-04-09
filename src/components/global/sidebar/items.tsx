import { SIDEBAR_MENU } from '@/constants/menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
type Props={
    page:string,
    slug:string
}

const Items = ({page,slug}:Props) => {
  console.log(page)
    return (
    <>
    {SIDEBAR_MENU.map((item)=>(
    <Link href={`/dashboard/${slug}/${item.label==="home"?"/":item.label}`} 
    key={item.id} className={cn(
        'flex gap-2 mt-4 cursor-pointer p-2 rounded-2xl',
        page===item.label && 'bg-slate-500',
        page===slug && item.label==='home'?"bg-slate-600":""
    )}>
<span>{item.icon}</span>
<p className='capitalize'>{item.label}</p>
    </Link>
))

}
    </>
  )    
}

export default Items;
