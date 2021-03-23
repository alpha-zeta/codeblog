function Newsletter(props) {
  const handleNews = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative">
      <h2 className="inline-block w-full sm:w-3/6 text-sm sm:text-xl">
        Sign up to our newsletter for weekly updates
      </h2>
      <div className="bg-gray-700 dark:bg-gray-200 inline-block w-full sm:w-3/6 mt-4 sm:mt-0">
        <form>
          <input
            type="email"
            className="bg-gray-200 dark:bg-gray-800 w-4/6 sm:w-5/6"
            placeholder="Enter your email here..."
          />
          <div className="bg-gray-700 dark:bg-gray-200 text-gray-200 dark:text-gray-700 h-full inline-flex w-2/6 sm:w-1/6">
            <button
              onClick={handleNews}
              className="bg-transparent h-full m-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
