// components/Timeline.js
const timelineData = [
  {
    year: "2015 - 2022",
    title: "S1 Informatika",
    subtitle: "Universitas Pembangunan Nasional Veteran Jakarta",
    description: "IPK 3.71 dari 4.00",
  },
  {
    year: "2022",
    title: "Pelatihan Analitik Data Google",
    subtitle: "Digitalent dan Google",
    description: "Mempelajari Data Analisis dengan Python, R dan Tableau",
  },
  {
    year: "2023",
    title: "Pelatihan Intro to Front-end Development",
    subtitle: "Digitalent dan Progate",
    description:
      "Mempelajari Frontend Development dengan HTML, CSS, Javascript, SASS, dan React",
  },
  {
    year: "2023",
    title: "Tes TOEFL",
    subtitle: "Brighten English",
    description: "Mengikuti tes bahasa inggris TOEFL dengan hasil skor 603",
  },
  {
    year: "2023 - 2023",
    title: "Bootcamp .NET Developer",
    subtitle: "XSIS Academy",
    description:
      "Mempelajari .NET dan pembuatan proyek akhir website rumah sakit dengan C# dan Microsoft SQL Server",
  },
  {
    year: "2023 - 2024",
    title: "Database Engineer",
    subtitle: "PT Mandiri Utama Finance",
    description:
      "Melakukan koreksi data nasabah, objek dan transaksi pada database menggunakan Oracle dan PostgreSQL",
  },
  // Tambahkan lebih banyak item jika perlu
];

export default function Timeline() {
  return (
    <div className="timeline-wrapper w-full h-full m-auto py-8">
      {/* Mobile: vertical */}
      <div className="timeline-vertical lg:hidden space-y-10 border-l-2 border-blue-400 pl-4">
        {timelineData.map((item, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-3 top-1 w-4 h-4 bg-blue-500 rounded-full"></div>
            <h3 className="text-blue-700 font-semibold">{item.year}</h3>
            <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal */}
      {/* <div className="hidden lg:flex flex-col items-center mt-20">
          <div className="relative w-full flex justify-between items-center border-t-2 border-blue-400 mt-20">
            {timelineData.map((item, i) => {
              const isTop = i % 2 === 0;
              return (
                <div key={i} className="relative z-10 text-center min-w-48">
                  Titik
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
                  </div>
  
                  Konten
                  <div
                    className={`absolute w-full ${
                      isTop ? "-top-48" : "top-8"
                    } transform -translate-x-1/2 left-1/2`}
                  >
                    <h3 className="text-blue-700 font-semibold">{item.year}</h3>
                    <h4 className="text-base font-bold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

      <div className="relative hidden lg:flex w-full h-full gap-6 py-4 items-center">
        {/* Garis Horizontal */}
        <div className="absolute top-64 left-0 w-full h-1 bg-blue-200 z-0"></div>
        {timelineData.map((item, index) => {
          const isTop = index % 2 === 0;
          return (
            <div key={index} className="relative z-10 min-w-44">
              {/* Titik */}
              <div className="size-5 bg-white border-4 border-blue-200 mx-auto mb-4"></div>
              {/* Konten */}
              <div
                className={`absolute w-full ${
                  isTop ? "-top-48" : "top-10"
                } transform -translate-x-1/2 left-1/2 text-center`}
              >
                <h3 className="text-xs font-semibold text-blue-700">
                  {item.year}
                </h3>
                <h4 className="text-md font-bold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
                <p className="text-xs mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="timeline-horizontal flex justify-center w-fit">
          <div className="horizontal-line relative bg-blue-200 h-3 border-r-4">
            <div className="vertical-line"></div>
            <ol className="list-none flex justify-center p-0">
              {timelineData.map((item, index) => {
                const isTop = index % 2 === 0;
                return (
                  <li className="event">
                    <h3
                      className={`year relative text-center ${
                        isTop ? "-top-10" : "top-6"
                      }`}
                    >
                      {item.year}
                    </h3>
                    <div className="panel relative">
                      <div
                        className={`content relative w-[250px] p-2 border-r-4 ${
                          isTop ? "top-2" : "-top-28"
                        } text-center bg-blue-200 text-black break-words hyphens-auto whitespace-normal`}
                      >
                        {item.description}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div> */}

      {/* <li className="event">
          <h3 className="date">08/31/2020</h3>
          <div className="panel">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
              dolor sit amet
            </div>
          </div>
        </li>
        <li className="event">
          <h3 className="date">09/22/2020</h3>
          <div className="panel">
            <div className="content">Lorem ipsum dolor sit amet</div>
          </div>
        </li>
        <li className="event">
          <h3 className="date">10/05/2020</h3>
          <div className="panel">
            <div className="content">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </div>
          </div>
        </li>
        <li className="event">
          <h3 className="date">11/27/2020</h3>
          <div className="panel">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
              dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
        </li> */}
    </div>
  );
}