import Button from "./Button";

const Footer = () => {
  const bgColor="text-gray-700"
  return (
    <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-gray-900 text-white">
      <div className="absolute  rotate-180 inset-x-0 top-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className={`w-full -mb-1 ${bgColor}`}

          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
        </svg>
      </div>

      <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 className="font-bold mb-6 text-3xl xl:text-4xl leading-snug">
          Need a better way to track issues?
          <br />
          Start your free trial today.
        </h2>
        <Button path="/register" onClick={() => null}>
          Get started
        </Button>

        <div className="mt-8">
          <nav className="flex flex-wrap justify-center text-lg font-medium">
            <div className="px-5 py-2">
              <a href="#">Contact</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">Pricing</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">Privacy</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">GitHub</a>
            </div>
            <div className="px-5 py-2">
              <a href="#">Linked in</a>
            </div>
          </nav>
          <p className="mt-7 text-base">© 2025 Abdulbasit Abdulghani</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
