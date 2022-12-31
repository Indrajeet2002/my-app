import React from'react';
import './index.css';
import "./About.css";
import Navbar from './Navbar';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function About() {

  return (

    <section class="bg-gray-800">
    <Navbar/>
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Welcome to Our Web App Movie Manager! This Web App allows you to find any movie you desire! You can think of it as Spotify for movies.</p>
          <h3 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h3>
          
      </div> 
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://avatars.githubusercontent.com/u/56321852?v=4" alt="Bonnie Avatar"/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="https://github.com/janiljohn">Joel Anil John</a>
              </h3>
              
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="https://www.linkedin.com/in/joelaniljohn/" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <AiFillLinkedin class="text-gray-500 dark:text-gray-400"/>
                      </a>
                  </li>
                  
                  <li>
                      <a href="https://github.com/janiljohn" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                      <AiFillGithub class="text-gray-500 dark:text-gray-400"/>
                      </a>
                  </li>
                  
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://avatars.githubusercontent.com/u/115384875?v=4" alt="Helene Avatar"/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="https://github.com/falshami2002">Firas Alshami</a>
              </h3>
              
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                      <AiFillLinkedin class="text-gray-500 dark:text-gray-400"/>
                      </a>
                  </li>
                  
                  <li>
                      <a href="https://github.com/falshami2002" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                      <AiFillGithub class="text-gray-500 dark:text-gray-400"/>
                      </a>
                  </li>
                  
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://media.licdn.com/dms/image/C5603AQH4QsI474FlyA/profile-displayphoto-shrink_400_400/0/1632255673129?e=1677715200&v=beta&t=CVeRkisX5BTYgyipfu36pPWZy-tJV7bqWU1M7AS22x0" alt="Jese Avatar"/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="https://github.com/danyalnemati8">Danyal Nemati</a>
              </h3>
              
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="https://www.linkedin.com/in/danyal-nemati-01b673221/" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                      <AiFillLinkedin class="text-gray-500 dark:text-gray-400"/>
                      </a>
                  </li>
                  
                  <li>
                      <a href="https://github.com/danyalnemati8" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                      <AiFillGithub class="text-gray-500 dark:text-gray-400"/>
                      </a>
                  </li>
                  
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://media.licdn.com/dms/image/C4E03AQH3_NBhzh9tkw/profile-displayphoto-shrink_800_800/0/1632256979687?e=1677715200&v=beta&t=IiEhex48k7JMgf5f43fZlbe8GRwv1qe_Wznw2_I7q3g" alt="Joseph Avatar"/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="https://github.com/Indrajeet2002">Indrajeet Patwardhan</a>
              </h3>
              <p>Worked on Log-In page</p>
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="https://www.linkedin.com/in/indrajeet-patwardhan-163b08211/" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                      <AiFillLinkedin class="text-gray-500 dark:text-gray-400"/>
                      </a>
                  </li>
                  
                  <li>
                      <a href="https://github.com/Indrajeet2002" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                      <AiFillGithub class="text-gray-500 dark:text-gray-400"/>
                      </a>
                  </li>
                  
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://avatars.githubusercontent.com/u/77473114?v=4" alt="Sofia Avatar"/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="https://github.com/andy-gale">Andy Gale</a>
              </h3>
              <p>Worked on Sign-Up page</p>
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="https://www.linkedin.com/in/andrew-gale-225b02259/" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                      <AiFillLinkedin class="text-gray-500 dark:text-gray-400"/>
                      </a>
                  </li>
                  
                  <li>
                      <a href="https://github.com/andy-gale" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                      <AiFillGithub class="text-gray-500 dark:text-gray-400"/>
                      </a>
                  </li>
                  
              </ul>
          </div>
      </div>  
  </div>
</section>
  
  );
}



export default About;
