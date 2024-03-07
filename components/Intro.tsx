'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'


const Intro = () => {
  return (
    <section 
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div>
            <Image
              src="/assets/images/profile-sergio.png"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>

          <span
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </span>
        </div>
      </div>
      <h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I&apos;m Sergio.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">+5 years</span> of expertise in crafting.{" "}
        building <span className="italic">innovative digital solutions</span> tailored to{" "}
        <span className="underline">meet your business objectives.</span>
      </h1>

      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex hover:bg-gray-600 active:bg-gray-700 items-center gap-2 rounded-full outline-none focus:ring focus:scale-110 active:scale-105 transition focus:ring-gray-300"
          onClick={() => {}}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 cursor-pointer borderBlack dark:bg-white/10"
          href="/sergios-resume.pdf " download
        >
          Download CV{" "}
          <HiDownload className="opacity-60" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/sergioestebantorres/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/myplancash"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div>

    </section>
  )
}

export default Intro