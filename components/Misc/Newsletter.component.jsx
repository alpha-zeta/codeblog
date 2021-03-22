function Newsletter(props) {
  return (
    <div>
      <form>
        <input type="text" className="dark:bg-gray-700" />
        <div className="bg-gray-700 dark:bg-gray-200 text-gray-200 dark:text-gray-700 h-full inline">
          <button className="bg-gray-700 dark:bg-gray-200 text-gray-200 dark:text-gray-700 h-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
