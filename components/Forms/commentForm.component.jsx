import SendIcon from "@material-ui/icons/Send";
function CommentForm(props) {
  const handleComment = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex mt-4 bg-gray-600 relative">
      <input
        type="text"
        className="dark:bg-gray-800 w-5/6"
        placeholder="Comment here...."
      />
      <button
        className="m-auto bg-transparent focus:outline-none text-gray-200"
        onClick={handleComment}
      >
        <SendIcon />
      </button>
    </div>
  );
}

export default CommentForm;
