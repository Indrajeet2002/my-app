import "./index.css";
import {Link} from "react-router-dom";
import Test from "./Test";

const Landing = () => {
  return (
    <section className="relative bg-[url(./LandingPageImg.png)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-lime-700 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Bring your cinematic interests
              <strong class="block font-extrabold text-[#1DB954]">
                To One Place
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Create and curate your movie tastes with the help of Movify!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/Register"
                class="block w-full rounded bg-[#1DB954] px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-[#1DB954] sm:w-auto"
              >
                Sign Up
              </a>

              <a
                href="/About"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#1DB954] shadow hover:text-zinc-900 focus:outline-none focus:ring active:text-[#1DB954] sm:w-auto"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Landing;