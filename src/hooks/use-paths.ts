"use client"
import { usePathname } from "next/navigation"

export const usePaths=()=>{
    const path=usePathname()
const pathname=path.split("/")
const page=pathname[pathname.length-1]
return {page,path}

}