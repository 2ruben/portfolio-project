import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import code from "../public/code.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import javascript from "../public/javascript.svg";
import react from "../public/react.svg";
import next from "../public/next.svg";
import wordpress from "../public/wordpress.svg";
import tailwind from "../public/tailwindcss.svg";
import divi from "../public/divi.png";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ruben Guarin Frontend Dev</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl">RDGR</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-br from-green-600 to-teal-900 text- text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
          <Banner/>
        </section>
        <section>
          <div>
            <h3 className="font-bold text-3xl py-1 dark:text-white " id="skills">Skills</h3>
          </div>
          <div className="lg:flex gap-5">
          <div className="text-center shadow-lg p-5 rounded-xl mb-5 dark:text-white flex-1">
              <Image src={javascript} width={70} height={70} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Javascript
              </h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl mb-5 dark:text-white flex-1">
              <Image src={react} width={70} height={70} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                React
              </h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl mb-5 dark:text-white flex-1">
              <Image src={next} width={70} height={70} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Next
              </h3>
            </div>
          </div>
          <div className="lg:flex gap-5">
          <div className="text-center shadow-lg p-5 rounded-xl mb-5 dark:text-white flex-1">
              <Image src={tailwind} width={70} height={70} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Tailwind
              </h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl mb-5 dark:text-white flex-1">
              <Image src={wordpress} width={70} height={70} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Wordpress
              </h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl mb-5 dark:text-white flex-1">
              <Image src={divi} width={70} height={70} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Divi
              </h3>
            </div>
          </div>

        </section>
        <section className="py-10">
          <div>
            <h3 className="font-bold text-3xl py-1 dark:text-white " id="projects">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for agencies
              consulted for startups
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 mb-4 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
    <div className="flex-1">
      <div className="text-center shadow-lg rounded-xl dark:bg-gray-100">
        <Image
          className="rounded-t-lg object-cover"
          width={"100"}
          height={"80"}
          layout="responsive"
          src={web1}
        />
        <h3 className="font-bold text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-900">Nike E-commerce</h3>
        <p className="text-center text-md pb-4 text-gray-800 dark:text-gray-600">E-commerce based on Nike brand</p>
      </div>
    </div>
    <div className="flex-1">
      <div className="text-center shadow-lg rounded-xl dark:bg-gray-100">
        <Image
          className="rounded-t-lg object-cover"
          width={"100"}
          height={"80"}
          layout="responsive"
          src={web2}
        />
        <h3 className="font-bold text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-900">Nails Services</h3>
        <p className="text-center text-md pb-4 text-gray-800 dark:text-gray-600">Contact to professional people to have the best nail service</p>
      </div>
    </div>
    <div className="flex-1">
    <div className="text-center shadow-lg rounded-xl dark:bg-gray-100">
        <Image
          className="rounded-t-lg object-cover"
          width={"100"}
          height={"80"}
          layout="responsive"
          src={web3}
        />
        <h3 className="font-bold text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-900">Developer Structure</h3>
        <p className="text-center text-md pb-4 text-gray-800 dark:text-gray-600">Document your projects as a Pro using a unique system</p>
      </div>
    </div>
    
    <div className="flex-1">
    <div className="text-center shadow-lg rounded-xl dark:bg-gray-100">
        <Image
          className="rounded-t-lg object-cover"
          width={"100"}
          height={"80"}
          layout="responsive"
          src={web4}
        />
        <h3 className="font-bold text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-900">Smart Boutique</h3>
        <p className="text-center text-md pb-4 text-gray-800 dark:text-gray-600">Skin care Boutique Shop</p>
      </div>
    </div>
    <div className="flex-1">
    <div className="text-center shadow-lg rounded-xl dark:bg-gray-100">
        <Image
          className="rounded-t-lg object-cover"
          width={"100"}
          height={"80"}
          layout="responsive"
          src={web5}
        />
        <h3 className="font-bold text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-900">Aimm</h3>
        <p className="text-center text-md pb-4 text-gray-800 dark:text-gray-600">Create UX/UI Components with AI</p>
      </div>
    </div>
    <div className="flex-1">
    <div className="text-center shadow-lg rounded-xl dark:bg-gray-100">
        <Image
          className="rounded-t-lg object-cover"
          width={"100"}
          height={"80"}
          layout="responsive"
          src={web6}
        />
        <h3 className="font-bold text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-900">Nunito</h3>
        <p className="text-center text-md pb-4 text-gray-800 dark:text-gray-600">Develop your design system</p>
      </div>
    </div>
  </div>

        </section>
      </main>

<Footer/>
</div>
  )
}