const NoData = () => {
  return (
    <div className="text-center max-w-[500px] bg-slate-300 mt-36 mx-auto  p-5 rounded-2xl">
      <svg
        className="mx-auto h-16 w-16 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
        ></path>
      </svg>
      <h1 className="mt-2 text-3xl font-bold text-gray-700">
        No Data Available
      </h1>
      <p className="mt-1 text-gray-500">
        Sorry, there is no data available at the moment.
      </p>
    </div>
  );
};

export default NoData;
