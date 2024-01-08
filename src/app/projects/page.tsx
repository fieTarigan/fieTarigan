export default function Projects() {
  const toolsSChatApp = [
    "ExpressJs",
    "ReactJs",
    "Socket.io",
    "Postgres",
    "Sequelize",
  ];
  const toolsBookshelf = ["NodeJs", "Hapi", "REST Api", "Postman"];
  const toolsNovel = ["ExpressJs", "EJS", "Postgres", "Sequelize", "Tailwind"];
  const toolsOnlineCourse = ["ExpressJs", "ReactJs", "Postgres", "Sequelize"];
  const toolsAzuraVoyage = [
    "NextJs",
    "Vercel Postgres",
    "Prisma",
    "Tailwind",
    "Flutter",
  ];
  const toolsTuneAuto = [
    "PHP",
    "Laravel",
    "My Sql",
    "Tailwind",
  ];

  return (
    <div className="px-10 grid grid-cols-1 md:grid-cols-2 md:px-4 gap-16">
      <a
        href="https://tuneautomotive.co.id/"
        target="_blank"
        className="w-[100%] flex flex-col hover:bg-gray-600 hover:scale-110 duration-200"
      >
        <div className="text-xl font-bold tracking-wider pt-1">
          Tune Automotive
        </div>
        <div className="flex flex-col justify-between h-[100%]">
          <div className="py-2 text-lg">
            A paid project for develop an automotive website application.
          </div>
          <div className="flex gap-2 flex-wrap">
            {toolsTuneAuto.map((value, idx) => (
              <span key={idx} className="bg-gray-600 px-3 pt-2 pb-1 rounded-lg">
                {value}
              </span>
            ))}
          </div>
        </div>
      </a>

      <a
        href="https://github.com/Team2-CapstoneProject/BE-CMS-Next"
        target="_blank"
        className="w-[100%] flex flex-col hover:bg-gray-600 hover:scale-110 duration-200"
      >
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider pt-1">
            Azura Voyage
          </div>
          <div className="flex gap-2 flex-wrap">
            <a
              href="https://appetize.io/app/4lfpfjeopnmnpy4mbj2wyoqrvu?device=pixel6&osVersion=12.0"
              target="_blank"
              className="bg-gray-700 px-3 pt-2 pb-1 rounded-lg hover:bg-gray-950 duration-150"
            >
              Mobile App
            </a>
            <a
              href="https://fullstak-vila-reservation.vercel.app/"
              target="_blank"
              className="bg-gray-700 px-3 pt-2 pb-1 rounded-lg hover:bg-gray-950 duration-150"
            >
              Web App
            </a>
            <a
              href="https://fietarigan.github.io/villa-reservation-api-doc/"
              target="_blank"
              className="bg-gray-700 px-3 pt-2 pb-1 rounded-lg hover:bg-gray-950 duration-150"
            >
              Api-Docs
            </a>
          </div>
        </div>
        <div className="text-xl font-bold tracking-wider pt-1"></div>
        <div className="flex flex-col justify-between h-[100%]">
          <div className="py-2 text-lg">
            Azura Voyage is an mobile and web apps for villa reservation. This
            project is a collaboration project.
          </div>
          <div className="flex gap-2 flex-wrap">
            {toolsAzuraVoyage.map((value, idx) => (
              <span key={idx} className="bg-gray-600 px-3 pt-2 pb-1 rounded-lg">
                {value}
              </span>
            ))}
          </div>
        </div>
      </a>

      <a
        href="https://github.com/fieTarigan/online-course-project"
        target="_blank"
        className="w-[100%] flex flex-col hover:bg-gray-600 hover:scale-110 duration-200"
      >
        <div className="text-xl font-bold tracking-wider pt-1">
          Online Course
        </div>
        <div className="flex flex-col justify-between h-[100%]">
          <div className="py-2 text-lg">
            An online course web app which has a user&apos;s dashboard. Students
            can choose courses, while teachers can choose and create courses.
          </div>
          <div className="flex gap-2 flex-wrap">
            {toolsOnlineCourse.map((value, idx) => (
              <span key={idx} className="bg-gray-600 px-3 pt-2 pb-1 rounded-lg">
                {value}
              </span>
            ))}
          </div>
        </div>
      </a>

      <a
        href="https://github.com/fieTarigan/novel-writer"
        target="_blank"
        className="w-[100%] flex flex-col hover:bg-gray-600 hover:scale-110 duration-200"
      >
        <div className="text-xl font-bold tracking-wider pt-1">
          Novel & Writer
        </div>
        <div className="flex flex-col justify-between h-[100%]">
          <div className="py-2 text-lg">
            A full stack project which contains a list of novels and their
            authors with many-to-many relationship.
          </div>
          <div className="flex gap-2 flex-wrap">
            {toolsNovel.map((value, idx) => (
              <span key={idx} className="bg-gray-600 px-3 pt-2 pb-1 rounded-lg">
                {value}
              </span>
            ))}
          </div>
        </div>
      </a>

      <a
        href="https://github.com/fieTarigan/bookshelf_dicoding_JS"
        target="_blank"
        className="w-[100%] flex flex-col hover:bg-gray-600 hover:scale-110 duration-200"
      >
        <div className="text-xl font-bold tracking-wider pt-1">
          Bookshelf REST API
        </div>
        <div className="flex flex-col justify-between h-[100%]">
          <div className="py-2 text-lg">
            Build a RESTful API for a bookshelf using https://hapi.dev/.
          </div>
          <div className="flex gap-2 flex-wrap">
            {toolsBookshelf.map((value, idx) => (
              <span key={idx} className="bg-gray-600 px-3 pt-2 pb-1 rounded-lg">
                {value}
              </span>
            ))}
          </div>
        </div>
      </a>

      <a
        href="https://github.com/fieTarigan/simple-chat-app"
        target="_blank"
        className="w-[100%] flex flex-col hover:bg-gray-600 hover:scale-110 duration-200"
      >
        <div className="text-xl font-bold tracking-wider pt-1">
          Simple Chat App
        </div>
        <div className="flex flex-col justify-between h-[100%]">
          <div className="py-2 text-lg">
            Building a simple real-time chat app with limited amount of room
            using Socket.io and store the chat data in Postgres using Sequelize
            ORM.
          </div>
          <div className="flex gap-2 flex-wrap">
            {toolsSChatApp.map((value, idx) => (
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
