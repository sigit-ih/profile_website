export default function Timeline({ data }) {
  return (
    <div className="timeline-wrapper h-full p-2 sm:p-4 lg:px-0 mx-auto">
      {/* Mobile: vertical */}
      <div className="timeline-vertical lg:hidden h-full overflow-y-auto scroll-smooth p-2">
        <div className="vertical-content space-y-5 sm:space-y-10 border-l-4 pl-5 border-blue-200 dark:border-orange-200 ">
          {data.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-8 top-1 w-5 h-5 rounded bg-white dark:bg-gray-900 border-4 border-blue-200 dark:border-orange-200 z-10"></div>
              <h3 dir="ltr" className="text-md sm:text-lg text-[#4169E1] dark:text-orange-400 font-semibold">
                {item.year}
              </h3>
              <h4 className="text-md sm:text-lg font-bold text-[#003153] dark:text-gray-200">{item.title}</h4>
              <p className="text-xs sm:text-sm text-gray-500">{item.subtitle}</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: horizontal */}
      <div
        dir="rtl"
        className="timeline-horizontal hidden lg:block overflow-x-auto scroll-smooth"
      >
        <div className="flex flex-nowrap gap-8 py-6 relative w-fit px-4">
          <div className="absolute top-8 left-0 w-full h-1 bg-blue-200 dark:bg-orange-200"></div>
          {data.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center w-64"
            >
              <div className="w-5 h-5 rounded bg-white dark:bg-gray-900 border-4 border-blue-200 dark:border-orange-200 z-10"></div>
              <div className="p-2 text-center w-full">
                <h3 dir="ltr" className="text-[#4169E1] dark:text-orange-400 font-semibold text-sm sm:text-md">
                  {item.year}
                </h3>
                <h4 className="text-sm sm:text-md font-bold text-[#003153] dark:text-gray-200">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">{item.subtitle}</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-500 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
