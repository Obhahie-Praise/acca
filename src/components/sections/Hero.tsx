import { ArrowDown } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='mt-50 text-center'>
        <h1 className="py-2 text-5xl font-semibold capitalize bg-linear-to-b from-[#5D51FF] to-blue-400 bg-clip-text text-transparent">The hub for every event you dont want to miss</h1>
        <p className="text-zinc-500 font-medium">Create and manage events faster — from event registration to ticket sales.</p>

        <div className="mt-6 flex items-center justify-center">
            <Link href="#events" className="flex items-center gap-2 px-6 py-2 bg-linear-to-r from-[#5D51FF] to-blue-500 rounded-lg text-white hover:from-blue-500 hover:to-[#5D51FF] transition-colors duration-300">
                <p className="font-medium">Explore Events</p>
                <ArrowDown width={20} height={20} />
            </Link>
        </div>
    </div>
  )
}

export default Hero