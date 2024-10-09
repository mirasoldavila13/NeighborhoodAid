import { useState } from 'react';
import axios from 'axios';

interface Comment {
  id: number;
  content: string;
  User: {
    email: string;
  };
}

interface CommentsProps {
  feedId: number;
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ feedId, comments }) => {
  const [newComment, setNewComment] = useState<string>('');
  const [commentList, setCommentList] = useState<Comment[]>(comments);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const response = await axios.post(`/api/feed/${feedId}/comment`, { content: newComment });
      setCommentList([...commentList, response.data]);
      setNewComment('');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  return (
    <div className="mt-4">
      <h4 className="font-bold">Comments</h4>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border rounded mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Comment
        </button>
      </form>
      {commentList.length > 0 ? (
        commentList.map((comment) => (
          <div key={comment.id} className="p-2 border rounded mb-2">
            <p className="mb-1">{comment.content}</p>
            <p className="text-sm text-gray-600">Commented by: {comment.User.email}</p>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-600">No comments yet.</p>
      )}
    </div>
  );
};

export default Comments;
