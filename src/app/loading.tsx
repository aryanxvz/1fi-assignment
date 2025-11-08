export default function Loading() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto">
      <div className="px-6 lg:px-8 py-[60px]">
        <div className="text-center mb-12">
          <div className="h-10 bg-gray-200 rounded-lg w-2/3 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-1/2 mx-auto animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-64 bg-gray-200 animate-pulse"></div>
              <div className="p-6 space-y-3">
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
