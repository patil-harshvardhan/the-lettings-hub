"use client";
import Image from "next/image";
import headshot from "../public/headshot.JPG";

const Intro = () => {
  return (
    <div className="font-[family-name:var(--font-geist-mono)]">
      <Image src={headshot} alt="headshot" width={180} height={180} />
      <h1 className="mt-5">
        Hi there, I am Harshvardhan but you can call me Harsh and this is how I look like!
      </h1>
      <p className="mt-3">
        Intresting fact about my name is that we all know what it means in
        English, but in Sanskrit however "Harsh" means "Happiness", my full name
        means "Creator of Happiness/Joy" :)

        <br />
        You must really what to know who you are hiring, you can find more about me by clicking on the links below which has some info about what I like to do apart from work and some key achivements of my past. Enjoy!
      </p>

      <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/likes"
        >
          What I like
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="/achievements"
        >
            My Achievements
        </a>
      </div>
    </div>
  );
};

export default Intro;
