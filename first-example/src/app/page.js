'use client';


function getGradients(rgb) {
    var setBackgroundColor = (rgb) => {
      console.log("onclick: " + rgb);
    }

    var bgColor = 'rgb('+rgb+','+rgb+','+rgb+')';

    return (
      <button
        onClick={() => setBackgroundColor(bgColor)} 
        className="flex min-w-10 min-h-10 px-10 py-4 m-3"
        style={{backgroundColor: bgColor}}
      >
      </button>
    )
}


export default function Home() {

  let values = [];
  for (var i=0; i<256; i++) values.push(i);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <div className="max-w-5xl w-full h-full mb-32">
        <div className="p-3 mx-10 min-h-xl rounded-md bg-white text-black text-center">
          Selected color 
        </div>
      </div>

      <div className="mb-32 mx-auto grid rounded-md max-w-5xl w-full mb-0 grid-cols-8">

        {values.map(getGradients, this)}

      </div>

    </main>
  )
}
