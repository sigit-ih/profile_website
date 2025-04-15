export default function SkillPage() {
  return (
    <div className="Skill bg-indigo-100 flex h-full items-center text-center p-20">
      <div className="skill-left w-1/2">
        <section id="skills" className="mb-6">
          <ul className="flex flex-wrap gap-2 text-sm items-center justify-center">
            <li className="bg-gray-200 px-3 py-1 rounded">HTML</li>
            <li className="bg-gray-200 px-3 py-1 rounded">CSS</li>
            <li className="bg-gray-200 px-3 py-1 rounded">PHP</li>
            <li className="bg-gray-200 px-3 py-1 rounded">SASS</li>
            <li className="bg-gray-200 px-3 py-1 rounded">React</li>
            <li className="bg-gray-200 px-3 py-1 rounded">JavaScript</li>
            <li className="bg-gray-200 px-3 py-1 rounded">Git</li>
            <li className="bg-gray-200 px-3 py-1 rounded">Flutter</li>
            <li className="bg-gray-200 px-3 py-1 rounded">Python</li>
            <li className="bg-gray-200 px-3 py-1 rounded">MySQL</li>
            <li className="bg-gray-200 px-3 py-1 rounded">PostgreSQL</li>
          </ul>
        </section>
        <section id="certificate">
          <h2 className="text-xl font-semibold mb-2">Certificate</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-md p-1">01</div>
            <div className="bg-white rounded-md p-1">02</div>
            <div className="bg-white rounded-md p-1">03</div>
            <div className="bg-white rounded-md p-1">04</div>
            <div className="bg-white rounded-md p-1">05</div>
            <div className="bg-white rounded-md p-1">06</div>
            <div className="bg-white rounded-md p-1">07</div>
            <div className="bg-white rounded-md p-1">08</div>
            <div className="bg-white rounded-md p-1">09</div>
          </div>
        </section>
      </div>
      <div className="skill-right w-1/2">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold underline underline-offset-8 text-orange-400">Skills</h2>
      </div>
    </div>
  );
}
