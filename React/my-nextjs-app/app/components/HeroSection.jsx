import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [title, setTitle] = useState("Data Scientist");
  const titles = ["Student", "Data Scientist", "Web Developer", "AI Engineer", "Generative-AI Engineer", "Data Analyst"]; // Add more titles if needed
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % titles.length);
    }, 3000); // Change text every 3 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setTitle(titles[index]);
  }, [index]);

  // Function to determine whether the title starts with a vowel
  const startsWithVowel = (word) => {
    const firstLetter = word.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
  };

  // Function to generate the appropriate prefix based on vowel or consonant
  const generatePrefix = (word) => {
    return startsWithVowel(word) ? "an" : "a";
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
      {/* Left column */}
      <div className="sm:col-span-1 lg:col-span-6 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105">Hello, I'm</span> Joel
        </h1>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl mb-6">
          I'm {generatePrefix(title)} <span className="text-gradient bg-gradient-to-r from-black-400 to-blue-600 transition-opacity duration-500">{title}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 w-full sm:w-auto rounded-full border-2 border-purple-400 text-white bg-gradient-to-r from-purple-400 to-black-600 hover:opacity-90 transition-all duration-300 transform hover:scale-105">Hire Me</button>
          <button className="px-6 py-3 w-full sm:w-auto rounded-full border-2 border-purple-400 hover:bg-gray-200 text-purple-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">Download CV</button>
        </div>
      </div>

      {/* Right column */}
      <div className="sm:col-span-1 lg:col-span-6 place-self-center mt-4 sm:mt-0 lg:mt-4 lg:col-span-6">
        <div className="rounded-full border-4 border-purple-400 bg-[#0e0e0e] w-full h-[250px] sm:h-[300px] lg:h-[500px] relative flex justify-center items-center overflow-hidden">
          <Image
            src="/images/profile.png" // Correct the path to your image file
            alt="Profile Picture" // Add alt text for accessibility
            layout="intrinsic" // Maintain aspect ratio
            width={350} // Specify the width of the image
            height={500} // Specify the height of the image
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
