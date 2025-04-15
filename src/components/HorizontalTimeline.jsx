// components/HorizontalTimeline.js
const timelineData = [
  {
    year: "2015 - 2022",
    title: "S1 Informatika",
    subtitle: "Universitas Pembangunan Nasional Veteran Jakarta",
    description: "IPK 3.71 dari 4.00",
  },
  {
    year: "2023 - 2023",
    title: "Bootcamp .NET Developer",
    subtitle: "XSIS Academy",
    description: "Mempelajari .NET dan pembuatan proyek akhir website rumah sakit dengan C# dan Microsoft SQL Server",
  },
  // Tambahkan lebih banyak item jika perlu
];

export default function HorizontalTimeline() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-start gap-12 py-8 relative">
        {/* Garis Horizontal */}
        <div className="absolute top-10 left-0 w-full h-1 bg-blue-200 z-0"></div>

        {timelineData.map((item, index) => (
          <div key={index} className="relative z-10 min-w-[160px]">
            {/* Titik */}
            <div className="size-5 bg-white border-4 border-blue-200 rounded-auto mx-auto mb-4"></div>

            {/* Konten */}
            <div className="text-center">
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
        ))}
      </div>
    </div>
  );
}
