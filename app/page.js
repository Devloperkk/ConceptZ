import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>Home
    
    <UserButton afterSignOutUrl="/"/></div> 
  )
}
