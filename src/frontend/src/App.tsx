import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@nfid/identitykit/react/styles.css";
import { IdentityKitProvider } from "@nfid/identitykit/react";
import { IdentityKitAuthType } from "@nfid/identitykit";
import { createActor, canisterId } from "../../declarations/backend.js";
import LoginPage from "./components/LoginPage.js";
import ProtectedPage from "./components/ProtectedPage.js";
import Header from "./components/Header.js";

const App: React.FC = () => {
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
    <IdentityKitProvider
      authType={IdentityKitAuthType.DELEGATION}
      signerClientOptions={{
        targets: ["rrkah-fqaaa-aaaaa-aaaaq-cai"],
      }}
    >
      <Router>
        <div className="flex flex-col min-h-screen relative overflow-hidden">
          <div className="fixed inset-0 bg-gradient-to-r from-purple-400 via-blue-500 to-orange-500 z-0"></div>

          <div className="relative z-10 flex-grow">
            <Header />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/protected" element={<ProtectedPage />} />
              <Route
                path="/"
                element={
                  <div className="flex flex-col items-center justify-center min-h-screen p-8">
                    <img
                      src="/logo2.svg"
                      alt="DFINITY logo"
                      className="mb-8 h-24"
                    />
                    <h1 className="mt-8 text-4xl font-bold underline text-center text-white mb-12">
                      Hello world in Tailwind!
                    </h1>
                    <form
                      onSubmit={handleSubmit}
                      className="bg-white/10 backdrop-blur-lg p-10 rounded-xl shadow-xl w-full max-w-xl border border-white/20"
                    >
                      <label
                        htmlFor="name"
                        className="block text-2xl font-semibold mb-4 text-white"
                      >
                        Enter your name:
                      </label>
                      <input
                        id="name"
                        alt="Name"
                        type="text"
                        className="w-full border border-white/30 rounded-lg py-3 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/10 text-white backdrop-blur-lg text-lg"
                      />
                      <button
                        type="submit"
                        className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
                      >
                        Click Me!
                      </button>
                    </form>
                    <section
                      id="greeting"
                      className="mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl text-center w-full max-w-xl text-white border border-white/20 text-xl"
                    >
                      {greeting}
                    </section>
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </IdentityKitProvider>
  );
};

export default App;
