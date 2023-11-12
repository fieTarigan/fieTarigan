export default function Experiences() {
  const toolsCodeId = [
    "ExpressJs",
    "ReactJs",
    "JavaScript",
    "TypeScript",
    "Flutter",
  ];
  const toolsDole = ["CodeIgniter", "PHP", "Flutter", "Go"];

  return (
    <div className="px-10 grid grid-cols-1 md:grid-cols-2 md:px-4 gap-16">
      <a
        href="https://doletion.com/"
        target="_blank"
        className="w-[100%] flex flex-col hover:bg-gray-600 hover:scale-110 duration-200"
      >
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider pt-1">Dole</div>
          <div className="border-t-2 border-b-2 pt-1">Internship</div>
        </div>
        <div className="text-lg text-white/50">
          Fullstack Web and Mobile Developer
        </div>
        <div className="text-sm text-white/40">September 2023 - Present</div>
        <div className="flex flex-col justify-between h-[100%]">
          <div className="py-2 text-lg">
            Worked with the UI team to develop and maintain Dole&apos;s social
            media features, especially the blog, connection, and profile page.
          </div>
          <div className="flex gap-2 flex-wrap">
            {toolsDole.map((value, idx) => (
              <span key={idx} className="bg-gray-600 px-3 pt-2 pb-1 rounded-lg">
                {value}
              </span>
            ))}
          </div>
        </div>
      </a>

      <a
        href="https://www.code.id/"
        target="_blank"
        className="w-[100%] flex flex-col hover:bg-gray-600 hover:scale-110 duration-200"
      >
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider pt-1">Code.id</div>
          <div className="border-t-2 border-b-2 pt-1">Bootcamp</div>
        </div>
        <div className="text-lg text-white/50">
          Fullstack Web and Mobile Developer
        </div>
        <div className="text-sm text-white/40">August 2023 - November 2023</div>
        <div className="flex flex-col justify-between h-[100%]">
          <div className="py-2 text-lg">
            Learn and practice all stuff of javascript for building frontend and
            backend of a web app. Moreover, learn and practice to create a
            mobile app integrated with a javascript backend.
          </div>
          <div className="flex gap-2 flex-wrap">
            {toolsCodeId.map((value, idx) => (
              <span key={idx} className="bg-gray-600 px-3 pt-2 pb-1 rounded-lg">
                {value}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
