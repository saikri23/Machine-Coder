import React, { useState } from "react";
import Comments from "./Comments";
import "./Styles.css";
import useCommentTree from "../hooks/use-comment-tree";

const NestedComments = ({ commentsData }) => {
  const [comment, setComment] = useState("");

  const { comments, insertComment, deleteComment, editComment } =
    useCommentTree(commentsData);

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleReply = (commentId, content) => {
    insertComment(commentId, content);
  };

  const handleSubmit = () => {
    handleReply(undefined, comment);
    setComment("");
    console.log("sai");
  };

  const handleEdit = (contentId, content) => {
    console.log(contentId, content, "Sai");
    editComment(contentId, content);
  };

  const handleDelete = (commentId) => {
    deleteComment(commentId);
  };

  return (
    <div>
      <div className="comment-head">
        <textarea
          className="comment-input"
          value={comment}
          onChange={handleChange}
          placeholder="type your reply here..."
        ></textarea>
        <button onClick={handleSubmit} className="comment-submit">
          Submit
        </button>
      </div>
      {comments &&
        comments.map((comment) => {
          return (
            <Comments
              key={comment.id}
              comment={comment}
              handleReply={handleReply}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
    </div>
  );
};

export default NestedComments;
