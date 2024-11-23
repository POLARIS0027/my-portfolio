"use client";

import { useState } from 'react';
import Image from 'next/image';
import content from './content'; // content.js 파일에서 content를 import

export default function Home() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="text-center mb-10">
        <div className="flex justify-end">
          <div className="inline-flex border rounded mb-4">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('jp')}
              className={`px-2 py-1 ${language === 'jp' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
            >
              日本語
            </button>
            <button
              onClick={() => setLanguage('ko')}
              className={`px-2 py-1 ${language === 'ko' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
            >
              한국어
            </button>
          </div>
        </div>
        <h1 className="text-4xl font-bold">About Me</h1>
        <nav className="mt-4">
          <a href="#about" className="text-blue-500 mx-2">About Me</a>
          <a href="#skills" className="text-blue-500 mx-2">Skills</a>
          <a href="#career" className="text-blue-500 mx-2">Career</a>
        </nav>
      </header>

      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* 왼쪽 프로필 사진과 이름 */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <Image
            src="/photo.jpg"
            alt="프로필 사진"
            width={160} // w-40은 40 * 4 = 160px
            height={160} // h-40은 40 * 4 = 160px
            className="rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold">Shin Jinwoo</h2>
          <p className="text-gray-500">Working on Web Development<br />Currently in Hiroshima.Japan</p>
        </div>

        {/* 오른쪽 소개 글과 Skills, Career */}
        <div className="flex-1">
          <div id="about" className="mb-10">
            <h3 className="text-3xl font-semibold mb-4">{content[language].introTitle}</h3>
            <div className="mb-4">{content[language].introContent}</div>
            <p>
              <a href="https://github.com/POLARIS0027" className="text-blue-500 underline">Github</a>
            </p>
          </div>

          {/* Skills Section */}
          <div id="skills" className="mb-10">
            <h2 className="text-3xl font-bold mb-4">{content[language].skillsTitle}</h2>
            <div>{content[language].skillsContent}</div>
          </div>

          {/* Career 섹션 */}
          <div id="career">
            <h2 className="text-3xl font-bold mb-4">{content[language].careerTitle}</h2>
            <p>{content[language].careerContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
