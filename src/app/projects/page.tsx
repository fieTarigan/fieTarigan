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

  return (
    <div className="px-10 grid grid-cols-1 md:grid-cols-2 md:px-4 gap-16">
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
