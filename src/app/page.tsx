export default function Home() {
  return (
    <main className="h-screen p-2">
      <div className="flex h-full flex-col items-center justify-between p-8 rounded-3xl" style={{ backgroundColor: '#FF99C8' }}>

        <div />

        <div className="flex flex-col items-center">
          <h1 className="font-bold text-black	text-7xl text-center font-nunito">Quieeeeeeeetly.</h1>

          <br /><br />

          <button className="bg-black px-7 py-3 rounded-3xl font-bold	text-sm font-nunito">
            get quietly ✌️
          </button>
        </div>

        <nav className="text-xs">
          <span className="px-2 py-3 text-gray-500">@{new Date().getFullYear()}</span>
          <span className="px-2 py-3 text-gray-500">hello@quietly.space</span>
          <button>
            <span className="text-gray-600 px-2 py-3">Terms</span>
          </button>
          <button>
            <span className="text-gray-600 px-2 py-3">Privacy</span>
          </button>
        </nav>

      </div>
    </main>
  );
}
