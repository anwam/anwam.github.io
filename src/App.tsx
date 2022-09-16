import { useState } from "react";

function NavBar() {
  return (
    <nav className="w-full bg-slate-500 p-4">
      <ul className="flex flex-row justify-around">
        <li>Logo</li>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-600">
      <div className="container mx-auto p-4">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col w-full justify-center items-center">
            <ul>
              <li>footer 1-1</li>
              <li>footer 1-2</li>
              <li>footer 1-3</li>
            </ul>
          </div>
          <div className="flex flex-col w-full justify-center items-center ">
            <ul>
              <li>footer 2-1</li>
              <li>footer 2-2</li>
              <li>footer 2-3</li>
            </ul>
          </div>
          <div className="flex flex-col w-full justify-center items-center ">
            <ul>
              <li>footer 3-1</li>
              <li>footer 3-2</li>
              <li>footer 3-3</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <main className="relative container mx-auto h-full bg-slate-800">
        <h1>anuwong profile</h1>
        <p className="text-2xl">this area should contain details</p>
        <p className="text-xl">also details but smaller</p>
        <div className="my-4">
          <h2>action zone</h2>
          <div className="block w-fit">
            <p className="bg-slate-700 p-4 rounded my-4">Count: {count}</p>
            <button
              className="bg-fuchsia-900 rounded-lg ring-fuchsia-600 ring-4 shadow-lg shadow-fuchsia-600 p-2 transition hover:scale-105"
              onClick={() => setCount((c) => c + 1)}
            >
              Click Me!
            </button>
          </div>
        </div>
        <p>some badges or cool logos</p>
      </main>
      <Footer />
    </>
  );
}

export default App;