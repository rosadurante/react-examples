import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <div className="max-w-5xl w-full h-full mb-32">
        <div class="p-3 mx-10 min-h-xl rounded-md bg-white text-black text-center">
          Selected color 
        </div>
      </div>

      <div className="mb-32 mx-auto grid rounded-md max-w-5xl w-full mb-0 grid-cols-4">
        <button className="group px-6 py-4 mx-10 border border-transparent rounded-lg bg-sky-900 text-sky-400 transition-colors ease-in durantion-5000 hover:bg-black hover:text-white hover:border-neutral-600" type="submit">
          Sky Blue
        </button>
        <button className="group px-6 py-4 mx-10 border border-transparent rounded-lg bg-emerald-900 text-emerald-400 hover:bg-black hover:text-white hover:border-neutral-600" type="submit">
          Emerald Green
        </button>
        <button className="group px-6 py-4 mx-10 border border-transparent rounded-lg bg-red-900 text-red-400 hover:bg-black hover:text-white hover:border-neutral-600" type="submit">
          Basic Red
        </button>
        <button className="group px-6 py-4 mx-10 border border-transparent rounded-lg bg-yellow-900 text-yellow-400 hover:bg-black hover:text-white hover:border-neutral-600" type="submit">
          Basic Yellow
        </button>
      </div>

    </main>
  )
}
