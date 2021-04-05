import Header from "../Misc/Header.components";
import Image from "next/image";
import CommentForm from "../Forms/commentForm.component";
import Comment from "./Comment.componenet";
function Comments(props) {
  return (
    <div className="block m-auto w-full my-8">
      <Header weight="h3" type="Big">
        Comments
      </Header>
      <CommentForm />
      <div className="overflow-y-scroll h-96 mt-4 pr-2">
        {props.comments.map((obj, i) => {
          return (
            <div key={i}>
              <div className="my-4 mb-8 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden">
                <Comment {...obj} type="comment" />
              </div>
              {obj.replies.length != 0
                ? obj.replies.map((rep, j) => {
                    return (
                      <div
                        key={j}
                        className="my-4 mb-8 ml-12 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden "
                      >
                        <Comment {...rep} type="reply" />
                      </div>
                    );
                  })
                : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
