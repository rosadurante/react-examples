import Image from 'next/image'

export function ColorButton(color) {

    const buttonClassName = `transition ease-in durantion-500 group px-6 py-4 mx-10 border border-transparent rounded-lg bg-${ color.code }-900 text-${ color.code }-400 hover:bg-black hover:text-white hover:border-neutral-600`

    return (
      <button className={buttonClassName}
        type='Submit'>
          {color.label}
        </button>
    );
}

export default function Home() {
  const colors = [
    {code:'sky', label:'Sky Blue'},
    {code:'emerald', label:'Emerald Green'},
    {code:'red', label:'Basic red'},
    {code:'yellow', label:'Basic yellow'}
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <div className="max-w-5xl w-full h-full mb-32">
        <div class="p-3 mx-10 min-h-xl rounded-md bg-white text-black text-center">
          Selected color 
        </div>
      </div>

      <div className="mb-32 mx-auto grid rounded-md max-w-5xl w-full mb-0 grid-cols-4">

        {colors.map(ColorButton, this)}

      </div>

    </main>
  )
}
