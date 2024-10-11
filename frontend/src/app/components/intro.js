"use client";
import Image from "next/image";
import headshot from "../public/headshot.JPG";

const Intro = () => {
    return (
        <div className="font-[family-name:var(--font-geist-mono)]">
            <Image src={headshot} alt="headshot" width={180} height={180} />
            <h1 className="mt-5">Hi there, I am Harshvardhan but you can call me Harsh</h1>
            <p className="text-sm mt-3">
                Intresting fact about my name is that we all know what it means in English but it means but in Sanskrit however "Harsh" means "Happiness", my full name means "Creator of Happiness/Joy" :)
            </p>
        </div>
    );
}

export default Intro;