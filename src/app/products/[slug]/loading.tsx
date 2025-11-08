export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="h-6 bg-gray-200 rounded w-32 mb-6 animate-pulse"></div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            <div className="h-96 bg-gray-200 rounded-xl animate-pulse"></div>

            <div className="flex flex-col space-y-4">
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              
              <div className="space-y-2 mt-6">
                <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="flex gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex-1 h-20 bg-gray-200 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              </div>

              <div className="h-24 bg-gray-200 rounded-lg animate-pulse mt-4"></div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="h-8 bg-gray-200 rounded w-64 mb-4 animate-pulse"></div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-gray-200 rounded-xl animate-pulse"></div>
              ))}
            </div>
            <div className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
