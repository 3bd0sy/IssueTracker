import CRUD from "../../assets/Crud.jpg";

const GuestComponent = () => {
  return (
    <>
      <div className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 bg-gray-300 text-gray-600 ring-1 ring-inset ring-white/50 hover:ring-gray-900/20">
              <span className="hidden  md:inline">IssueTracker is here!</span>
              <a
                href="#"
                target="_blank"
                className="font-semibold text-lime-600"
              >
                <span className="absolute inset-0"></span> Stay updated
                <span>→</span>
              </a>
            </p>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Effortless Issue Tracking
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Track and manage issues seamlessly with our powerful and intuitive platform. Keep your projects on track, ensure transparency, and resolve issues faster than ever.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-lime-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
              >
                Check out the demo
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-200"
              >
                Learn more
                <span>→</span>
              </a>
            </div>
          </div>
          <div className="mt-10 flow-root sm:mt-20">
            <div className="-m-2 rounded-xl bg-gray-200/5 p-2 ring-1 ring-inset ring-gray-900/50 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src={CRUD}
                width="2432"
                height="1442"
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestComponent;
