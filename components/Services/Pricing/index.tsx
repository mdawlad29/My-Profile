export const Pricing = () => {
  return (
    <section className="mb-24">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Transparent{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Pricing
          </span>
        </h2>

        <p className="mb-8 max-w-2xl text-lg text-gray-400">
          Choose the perfect plan that fits your project needs and budget
        </p>

        <div className="flex items-center rounded-full border border-gray-700 p-1">
          <button className="rounded-full px-4 py-2 text-sm font-medium transition bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            Monthly
          </button>

          <button className="rounded-full px-4 py-2 text-sm font-medium transition text-gray-400">
            Annual (20% off)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="overflow-hidden rounded-3xl border border-gray-700/50 group relative overflow-hidden rounded-3xl border border-purple-500/50 shadow-lg shadow-purple-500/10 group relative">
          <div className="flex h-full flex-col p-6 md:p-8">
            <h3 className="mb-2 text-2xl font-bold text-white">Starter</h3>

            <p className="mb-6 text-sm text-gray-400">
              Perfect for small projects and individuals
            </p>

            <div className="mb-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="mb-1 ml-2 text-gray-400">/month</span>
              </div>
            </div>

            <div className="mb-8 border-t border-gray-700/50 pt-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mr-3 flex flex-shrink-0 items-center justify-center">
                    icon
                  </div>

                  <span className="text-sm text-gray-400">1 project</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <button className="w-full rounded-xl py-3 font-medium transition-all bg-gray-700/50 text-white hover:bg-gray-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
