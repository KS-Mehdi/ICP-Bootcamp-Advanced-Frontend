import { useState } from "react";
import { createActor, canisterId } from "../../declarations/backend";

function App() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const backend = createActor(canisterId);
    backend.greet(name).then((greeting: any) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img src="/logo2.svg" alt="DFINITY logo" className="mb-6" />
      <form
        action="#"
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <label htmlFor="name" className="block text-xl font-semibold mb-2">
          Enter your name:
        </label>
        <input
          id="name"
          alt="Name"
          type="text"
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-400 via-blue-500 to-orange-500 text-white font-bold py-2 px-4 rounded hover:opacity-75 transition duration-300"
        >
          Click Me!
        </button>
      </form>
      <section
        id="greeting"
        className="mt-6 p-4 bg-white rounded-lg shadow-md text-center w-full max-w-md"
      >
        {greeting}
      </section>
      <h1 className="mt-6 text-3xl font-bold underline text-center">
        Hello world in Tailwind!
      </h1>
    </main>
  );
}

export default App;
