import { useState } from "react";

const useCommentTree = (initialComments) => {
  const [comments, setComments] = useState(initialComments);

  const insertNode = (tree, commentId, content) => {
    return tree.map((node) => {
      if (node.id === commentId) {
        return {
          ...node,
          replies: [...node.replies, content],
        };
      } else if (node.replies && node.replies.length > 0) {
        return {
          ...node,
          replies: insertNode(node.replies, commentId, content),
        };
      }
      return node;
    });
  };

  const insertComment = (commentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      votes: 3,
      timestamp: new Date().toISOString(),
      replies: [],
    };
    if (commentId) setComments((pvs) => insertNode(pvs, commentId, newComment));
    else setComments((pvs) => [...pvs, newComment]);
  };

  const deleteNode = (tree, commentId) => {
    return tree
      .filter((comment) => comment.id !== commentId)
      .map((comment) => {
        return { ...comment, replies: deleteNode(comment.replies, commentId) };
      });
  };

  const deleteComment = (commentId) => {
    setComments((pvs) => deleteNode(pvs, commentId));
  };

  const editNode = (tree, commentId, contentVal) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          content: contentVal,
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: editNode(comment.replies, commentId, contentVal),
        };
      }
      return comment;
    });
  };

  const editComment = (commentId, content) => {
    return setComments((pvs) => editNode(pvs, commentId, content));
  };

  return { comments, insertComment, deleteComment, editComment };
};

export default useCommentTree;
