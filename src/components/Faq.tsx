export function Faq() {
  return (
    <section className="py-10 bg-gray-800 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Helpful Information
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
            Get answers to some common queries
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">
                How to get started?
              </p>
              <p className="mt-4 text-base text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed euismod auctor arcu, a luctus velit volutpat.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">
                What are the benefits?
              </p>
              <p className="mt-4 text-base text-gray-400">
                Curabitur dictum est eget felis consectetur, vitae posuere metus
                condimentum. Vivamus vehicula quam sit amet lacinia ullamcorper.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">
                Is there a free trial?
              </p>
              <p className="mt-4 text-base text-gray-400">
                Phasellus lobortis est eget purus lobortis, vel fringilla enim
                luctus. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">
                How to reach out for help?
              </p>
              <p className="mt-4 text-base text-gray-400">
                Quisque auctor arcu vitae porttitor mattis. Sed sit amet enim
                auctor, sodales dolor nec, ultricies arcu.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-20">
          <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
            <p className="text-gray-50">
              Still have questions?{" "}
              <a
                href="#"
                title=""
                className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
              >
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
