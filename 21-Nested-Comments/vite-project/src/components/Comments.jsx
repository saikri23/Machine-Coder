import React, { useState } from "react";
import "./Styles.css";

const Comments = ({ comment, handleReply, handleEdit, handleDelete }) => {
  const [expand, setExpand] = useState(false);
  const [reply, setReply] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editVal, setEditVal] = useState(comment.content);
  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleSubmit = () => {
    handleReply(comment.id, reply);
  };

  const handleEditChange = (e) => {
    setEditVal(e.target.value);
  };

  const handleEditSubmit = () => {
    handleEdit(comment.id, editVal);
    setEditMode(false);
  };

  return (
    <div className="comment-cont">
      <div className="comment-card">
        {!editMode ? (
          <div className="comment">
            <p className="comment-info">{comment.content}</p>
            <p className="comment-votes">Votes: {comment.votes}</p>
            <p className="comment-time">
              {new Date(comment.timestamp).toLocaleString()}
            </p>
          </div>
        ) : (
          <div className="comment-head">
            <textarea
              className="comment-input"
              value={editVal}
              onChange={handleEditChange}
              placeholder="type your reply here..."
              rows={2}
            ></textarea>
            <button className="comment-submit" onClick={handleEditSubmit}>
              Update
            </button>
          </div>
        )}
        <div>
          <button onClick={() => setExpand(!expand)} className="comment-button">
            {expand ? "hide replies" : "replies"}
          </button>
          <button
            className="comment-button"
            onClick={() => setEditMode(!editMode)}
          >
            Edit
          </button>
          <button
            className="comment-button"
            onClick={() => handleDelete(comment.id)}
          >
            Delete
          </button>
        </div>
      </div>

      {expand && (
        <div className="comment-replies">
          <div className="comment-head">
            <textarea
              className="comment-input"
              value={reply}
              onChange={handleReplyChange}
              placeholder="type your reply here..."
              rows={2}
            ></textarea>
            <button className="comment-submit" onClick={handleSubmit}>
              Reply
            </button>
          </div>
          {comment.replies &&
            comment.replies.map((comment) => {
              return (
                <Comments
                  comment={comment}
                  handleReply={handleReply}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Comments;
