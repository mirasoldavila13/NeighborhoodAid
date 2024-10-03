import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";


interface FeedItem {
  id: number;
  content: string;
  likes: number;
  createdAt: string;
  User: {
    email: string; // Email of the user who posted the feed
  };
  comments: CommentItem[];
}

interface CommentItem {
  id: number;
  content: string;
  User: {
    email: string;
  };
}


const Dashboard = () => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [newFeedContent, setNewFeedContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [editingFeedId, setEditingFeedId] = useState<number | null>(null); // For edit mode
  const [editContent, setEditContent] = useState<string>(''); // For editing post content
  const [newComment, setNewComment] = useState<string>(''); // For comments

  // Fetch feeds
  const fetchFeeds = async () => {
    try {
      const response: AxiosResponse<FeedItem[]> = await axios.get('/api/feed');
      setFeedItems(response.data);
    } catch (err) {
      console.error('Error fetching feeds:', err);
      setError('Error fetching feeds');
    }
  };
  

  // Create a feed
  const createFeed = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeedContent.trim()) return;

    try {
      const token = localStorage.getItem('token');
      const response: AxiosResponse<FeedItem> = await axios.post(
        '/api/feed',
        { content: newFeedContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFeedItems([response.data, ...feedItems]);
      setNewFeedContent('');
    } catch (err) {
      setError('Error creating feed');
    }
  };

  // Update a feed
  const updateFeed = async (feedId: number) => {
    try {
      const token = localStorage.getItem('token');
      const response: AxiosResponse<FeedItem> = await axios.put(
        `/api/feed/${feedId}`,
        { content: editContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFeedItems(feedItems.map(feed => (feed.id === feedId ? response.data : feed)));
      setEditingFeedId(null);
    } catch (err) {
      setError('Error updating feed');
    }
  };

  // Delete a feed
  const deleteFeed = async (feedId: number) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/feed/${feedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFeedItems(feedItems.filter(feed => feed.id !== feedId));
    } catch (err) {
      setError('Error deleting feed');
    }
  };

  // Like a feed
  const likeFeed = async (feedId: number) => {
    try {
      const token = localStorage.getItem('token');
      const response: AxiosResponse<FeedItem> = await axios.post(
        `/api/feed/${feedId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFeedItems(feedItems.map(feed => (feed.id === feedId ? response.data : feed)));
    } catch (err) {
      setError('Error liking feed');
    }
  };

  // Comment on a feed
  const commentOnFeed = async (feedId: number) => {
    if (!newComment.trim()) return;

    try {
      const token = localStorage.getItem('token');
      const response: AxiosResponse<CommentItem> = await axios.post(
        `/api/feed/${feedId}/comment`,
        { content: newComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFeedItems(feedItems.map(feed => (feed.id === feedId ? { ...feed, comments: [...feed.comments, response.data] } : feed)));
      setNewComment('');
    } catch (err) {
      setError('Error commenting on feed');
    }
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-4">Community Feed</h1>
      </main>

      


       {/* Form to create a new feed */}
       <form onSubmit={createFeed}>
        <textarea
          className="w-full p-2 border rounded"
          value={newFeedContent}
          onChange={(e) => setNewFeedContent(e.target.value)}
          placeholder="Write a post..."
        />
        <button type="submit">Post</button>
      </form>

      {error && <p>{error}</p>}

      {/* Display feeds */}
      <div className="feed-list">
        {feedItems.map(feed => (
          <div key={feed.id} className="feed-item">
            <p>{feed.content}</p>
            <p>Posted by: {feed.User.email}</p>
            <p>Likes: {feed.likes}</p>
            <button onClick={() => likeFeed(feed.id)}>Like</button>

            {/* Only show edit/delete buttons if the logged-in user owns the post */}
            {feed.User.email === localStorage.getItem('userEmail') && (
              <>
                <button onClick={() => setEditingFeedId(feed.id)}>Edit</button>
                <button onClick={() => deleteFeed(feed.id)}>Delete</button>
              </>
            )}

            {/* Comments */}
            <div>
              {feed.comments.map(comment => (
                <div key={comment.id}>
                  <p>{comment.content}</p>
                  <p>Commented by: {comment.User.email}</p>
                </div>
              ))}

              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
              />
              <button onClick={() => commentOnFeed(feed.id)}>Comment</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
