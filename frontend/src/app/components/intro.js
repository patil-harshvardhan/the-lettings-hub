"use client";
import Image from "next/image";
import headshot from "../public/headshot.JPG";

const Intro = () => {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] flex flex-col items-center sm:items-start text-center sm:text-left">
      {/* Headshot Image with fade-in and zoom-in animation */}
      <Image
        src={headshot}
        alt="headshot"
        width={180}
        height={180}
        className="rounded-full object-cover shadow-lg animate-fade-in-image"
      />

      {/* Introduction Text with fade-in and slide-up animation */}
      <h1 className="mt-5 text-2xl sm:text-3xl font-semibold animate-fade-in-slide-up">
        Hi there, I am Harshvardhan, but you can call me Harsh!
      </h1>
      <p className="mt-3 text-base sm:text-lg leading-relaxed max-w-2xl animate-fade-in-slide-up">
        An interesting fact about my name is that while "Harsh" may mean 
        something else in English, in Sanskrit it means "Happiness." 
        My full name translates to "Creator of Happiness/Joy"!
        <br />
        <br />
        You must be curious about who you're hiring! Feel free to click 
        on the links below to learn more about what I enjoy doing outside 
        of work and some key achievements from my past. Enjoy!
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
        <a
          className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 shadow-lg hover:shadow-xl animate-fade-in-slide-up"
          href="/likes"
        >
          What I Like
        </a>
        <a
          className="rounded-full border border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 shadow-lg hover:shadow-xl animate-fade-in-slide-up"
          href="/achievements"
        >
          My Achievements
        </a>
      </div>
    </div>
  );
};

export default Intro;
