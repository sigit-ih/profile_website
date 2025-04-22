export default function Timeline({ data }) {
  return (
    <div className="timeline-wrapper w-full h-auto m-auto py-8">
      {/* Mobile: vertical */}
      <div className="timeline-vertical lg:hidden space-y-10 border-r-4 border-blue-200 pr-5">
        {data.map((item, i) => (
          <div key={i} className="relative">
            <div className="absolute -right-8 top-0 w-5 h-5 bg-white border-4 border-blue-200 z-10"></div>
            <h3 dir="ltr" className="text-blue-700 font-semibold">{item.year}</h3>
            <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal */}
      <div dir="rtl" className="hidden lg:block overflow-x-auto scroll-smooth">
        <div className="flex flex-nowrap gap-8 py-6 relative min-w-max px-4">
          <div className="absolute top-8 left-0 w-full h-1 bg-blue-200"></div>
          {data.map((item, i) => (
            <div key={i} className="flex flex-col items-center min-w-[150px] max-w-[300px]">
              <div className="w-5 h-5 bg-white border-4 border-blue-200 z-10"></div>
              <div className="p-2 text-center w-full">
                <h3 dir="ltr" className="text-orange-400 font-semibold text-md">{item.year}</h3>
                <h4 className="text-md font-bold text-gray">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.subtitle}</p>
                <p className="text-sm text-gray-700 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
