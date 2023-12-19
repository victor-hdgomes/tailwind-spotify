import { Home as HomeIcon, Search, Library } from 'lucide-react'

export default function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
                <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-red-500 rounded-full' />
                    <div className='w-3 h-3 bg-yellow-500 rounded-full' />
                    <div className='w-3 h-3 bg-green-500 rounded-full' />
                </div>

                <nav className='space-y-5 mt-10'>
                    <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'><HomeIcon /> Home</a>
                    <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'><Search /> Search</a>
                    <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'><Library /> Your Library</a>
                </nav>

                <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
                    <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Summer Vibes</a>
                    <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Chill Beats</a>
                    <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Late Night Jams</a>
                    <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Feel Good Tunes</a>
                    <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Epic Soundscapes</a>
                    <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Road Trip Mix</a>
                    <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Dance Party Anthems</a>
                    <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Acoustic Bliss</a>
                    <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Throwback Hits</a>
                    <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Electronic Odyssey</a>
                </nav>
            </aside>
    )
}