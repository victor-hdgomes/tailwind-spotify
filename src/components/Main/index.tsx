import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Main() {
    return (
        <main className="flex-1 p-6">
            <div className='flex items-center gap-3'>
                <button className='rounded-full bg-black/40 p-1'><ChevronLeft /></button>
                <button className='rounded-full bg-black/40 p-1'><ChevronRight /></button>
            </div>

            <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

            <div className='grid grid-cols-3 gap-4 mt-4'>
                <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/album-1.jpg" width={80} height={80} alt="Capa do Album" />
                    <strong>Album name</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
                </a>
                <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/album-2.jpg" width={80} height={80} alt="Capa do Album" />
                    <strong>Album name</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
                </a>
                <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/album-3.jpg" width={80} height={80} alt="Capa do Album" />
                    <strong>Album name</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
                </a>
                <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/album-4.jpg" width={80} height={80} alt="Capa do Album" />
                    <strong>Album name</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
                </a>
                <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/album-5.jpg" width={80} height={80} alt="Capa do Album" />
                    <strong>Album name</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
                </a>
                <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/album-6.jpg" width={80} height={80} alt="Capa do Album" />
                    <strong>Album name</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
                </a>
            </div>

            <h2 className='font-semibold text-2xl mt-10'>Made for Victor Hugo</h2>

            <div className='grid grid-cols-5 gap-4 mt-4'>
                <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
                    <Image src="/album-1.jpg" className='w-full' width={120} height={120} alt="Capa do Album" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
                </a>
                <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
                    <Image src="/album-2.jpg" className='w-full' width={120} height={120} alt="Capa do Album" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
                </a>
                <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
                    <Image src="/album-3.jpg" className='w-full' width={120} height={120} alt="Capa do Album" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
                </a>
                <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
                    <Image src="/album-4.jpg" className='w-full' width={120} height={120} alt="Capa do Album" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
                </a>
                <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
                    <Image src="/album-5.jpg" className='w-full' width={120} height={120} alt="Capa do Album" />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
                </a>
            </div>
        </main>
    )
}