import Image from 'next/image';

export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="text-center mb-10">
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
            <h3 className="text-3xl font-semibold mb-4">About Me</h3>
            <p className="mb-4">
              I&apos;am studying <span className="font-bold">javaScript, react, next.js, AWS,</span>to be a Web Developer. currently working as Software Engineer in  <span className="font-bold">Hiroshima.Japan</span>
            </p>
            <p>
              <a href="https://github.com/POLARIS0027" className="text-blue-500 underline">Github</a>
            </p>
          </div>

          {/* Skills Section */}
          <div id="skills" className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <h3 className="text-2xl font-semibold mb-2">As a Developer</h3>
            <ul className="list-disc pl-5">
              <li>Developed a feature to restrict screen operations based on call status and a log transmission function for a commercial Android application.</li>
              <li>Created web applications like a bulletin board, Todo list, and gallery using Python and Django, and deployed them with AWS S3, EC2, and Lightsail.</li>
              <li>Developed a Chrome extension for work assistance using JavaScript.</li>
              <li>Common knowledge of HTML, CSS, JavaScript and Java.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-4 mb-2">As a QA Tester</h3>
            <ul className="list-disc pl-5">
              <li>Planned and executed functional, composite, reinforcement, and pre-release tests for payment terminals.</li>
              <li>Planned, created, and executed reinforcement tests for payment applications.</li>
              <li>Analyzed product quality based on test results.</li>
              <li>Performed manual testing on software products.</li>
              <li>Conducted network testing on LAN/WAN equipment devices, including Android phones and payment devices.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-4 mb-2">Network and System Knowledge</h3>
            <ul className="list-disc pl-5">
              <li>Knowledgeable in OSI network model, TCP/IP, and Layer 2/3 switching and routing.</li>
              <li>Experienced in capturing and analyzing network packets using Wireshark.</li>
              <li>Implemented and configured wireless technologies.</li>
              <li>Worked with CentOS.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-4 mb-2">Other Skills</h3>
            <ul className="list-disc pl-5">
              <li>Developed a tool to aggregate test results using VBA for compiling and organizing test data.</li>
              <li>Managed project progress and schedules with business partners to ensure smooth project flow.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-4 mb-2">Language Skills</h3>
            <ul className="list-disc pl-5">
              <li>Language skills: Korean (Native)</li>
              <li>Japanese (Fluent, N1 full score)</li>
              <li>English (Business, TOEIC 935)</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-4 mb-2">VISA Status</h3>
            <ul className="list-disc pl-5">
              <li>Visa status: Japan - Working visa for 5 years.</li>
            </ul>
          </div>

          {/* Career 섹션 */}
          <div id="career">
            <h2 className="text-3xl font-bold mb-4">Career</h2>
            <p>2023.04 ~ Current    NTT DATA SBC Mobile Division</p>
          </div>
        </div>
      </div>
    </div>
  );
}
