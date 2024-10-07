import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import DashboardNav from "../components/DashboardNav";
import Weather from "../components/Weather";
import Footer from "../components/Footer";
import authService from "../services/authService";
import { useParams, Navigate } from "react-router-dom";

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
  const { userId } = useParams<{ userId: string }>(); // Get the user ID from the URL
  const authLoggedIn = authService.loggedIn(); // Check if the user is logged in
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]); // State to store feed items
  const [newFeedContent, setNewFeedContent] = useState<string>(""); // State for new feed content
  const [error, setError] = useState<string | null>(null); // State for error messages
  const [editingFeedId, setEditingFeedId] = useState<number | null>(null); // For edit mode
  const [editContent, setEditContent] = useState<string>(""); // For editing post content
  const [newComment, setNewComment] = useState<string>(""); // For comments

  // Fetch feeds
  const fetchFeeds = async () => {
    try {
      const token = localStorage.getItem("jwtToken"); // Get the token from local storage
      const response: AxiosResponse<FeedItem[]> = await axios.get(
        `/api/feed/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        },
      );
      setFeedItems(response.data); // Update state with fetched feed items
    } catch (err) {
      console.error("Error fetching feeds:", err);
      setError("Error fetching feeds"); // Set error state if there's an issue
    }
  };

  // Create a feed
  const createFeed = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeedContent.trim()) return; // Prevent submission if the input is empty

    try {
      const token = localStorage.getItem("jwtToken"); // Get the token from local storage
      const response: AxiosResponse<FeedItem> = await axios.post(
        "/api/feed",
        { content: newFeedContent },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        },
      );
      setFeedItems([response.data, ...feedItems]); // Add new feed to the state
      setNewFeedContent(""); // Clear the input field
    } catch (err) {
      console.error("Error creating feed:", err);
      setError("Error creating feed"); // Set error state if there's an issue
    }
  };

  // Like a feed
  const likeFeed = async (feedId: number) => {
    try {
      const token = localStorage.getItem("jwtToken"); // Get the token from local storage
      const response: AxiosResponse<FeedItem> = await axios.post(
        `/api/feed/${feedId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        },
      );
      setFeedItems(
        feedItems.map((feed) => (feed.id === feedId ? response.data : feed)), // Update the feed with new likes
      );
    } catch (err) {
      console.error("Error liking feed:", err);
      setError("Error liking feed"); // Set error state if there's an issue
    }
  };

  // Delete a feed
  const deleteFeed = async (feedId: number) => {
    try {
      const token = localStorage.getItem("jwtToken"); // Get the token from local storage
      await axios.delete(`/api/feed/${feedId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request
        },
      });
      setFeedItems(feedItems.filter((feed) => feed.id !== feedId)); // Remove the deleted feed from state
    } catch (err) {
      console.error("Error deleting feed:", err);
      setError("Error deleting feed"); // Set error state if there's an issue
    }
  };

  // Update a feed
  const updateFeed = async (feedId: number) => {
    try {
      const token = localStorage.getItem("jwtToken"); // Get the token from local storage
      const response: AxiosResponse<FeedItem> = await axios.put(
        `/api/feed/${feedId}`,
        { content: editContent },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        },
      );
      setFeedItems(
        feedItems.map((feed) => (feed.id === feedId ? response.data : feed)), // Update the feed with new content
      );
      setEditingFeedId(null); // Exit edit mode
      setEditContent(""); // Clear the edit content
    } catch (err) {
      console.error("Error updating feed:", err);
      setError("Error updating feed"); // Set error state if there's an issue
    }
  };

  // Comment on a feed
  const commentOnFeed = async (feedId: number, commentContent: string) => {
    if (!commentContent.trim()) return; // Prevent submission if the input is empty

    try {
      const token = localStorage.getItem("jwtToken"); // Get the token from local storage
      const response: AxiosResponse<CommentItem> = await axios.post(
        `/api/feed/${feedId}/comment`,
        { content: commentContent },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        },
      );
      setFeedItems(
        feedItems.map((feed) =>
          feed.id === feedId
            ? { ...feed, comments: [...feed.comments, response.data] } // Add new comment to the feed
            : feed,
        ),
      );
      setNewComment(""); // Clear the new comment input
    } catch (err) {
      console.error("Error commenting on feed:", err);
      setError("Error commenting on feed"); // Set error state if there's an issue
    }
  };

  useEffect(() => {
    fetchFeeds(); // Fetch feeds when component mounts
  }, [userId]); // Dependency on userId to refetch if it changes

  return (
    <>
      {!authLoggedIn ? ( // If not logged in, redirect to home
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto">
              {/* Flexbox layout for weather and feed */}
              <div className="flex space-x-4">
                {/* Weather widget */}
                <div className="w-1/4">
                  <Weather />
                </div>

                {/* Feed section */}
                <div className="w-3/4">
                  <h1 className="text-3xl font-bold mb-4">Community Feed</h1>
                  {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
                  {/* Display error if any */}
                  {/* Form to create a new feed */}
                  <form onSubmit={createFeed} className="mb-6">
                    <textarea
                      className="w-full p-2 border rounded mb-2"
                      value={newFeedContent}
                      onChange={(e) => setNewFeedContent(e.target.value)}
                      placeholder="Write a post..."
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Post
                    </button>
                  </form>
                  {/* Display feeds */}
                  <div className="feed-list space-y-4">
                    {feedItems.length > 0 ? (
                      feedItems.map((feed) => (
                        <div
                          key={feed.id}
                          className="feed-item p-4 border rounded shadow"
                        >
                          <p className="mb-2">{feed.content}</p>
                          <p className="text-sm text-gray-600 mb-2">
                            Posted by: {feed.User.email}
                          </p>
                          <p className="text-sm text-gray-600 mb-2">
                            Likes: {feed.likes}
                          </p>
                          <div className="flex space-x-2 mb-2">
                            <button
                              onClick={() => likeFeed(feed.id)}
                              className="bg-green-500 text-white px-3 py-1 rounded"
                            >
                              Like
                            </button>
                            {feed.User.email ===
                              localStorage.getItem("userEmail") && (
                              <>
                                <button
                                  onClick={() => {
                                    setEditingFeedId(feed.id);
                                    setEditContent(feed.content);
                                  }}
                                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => deleteFeed(feed.id)}
                                  className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                  Delete
                                </button>
                              </>
                            )}
                          </div>
                          {/* Edit Form */}
                          {editingFeedId === feed.id && (
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                updateFeed(feed.id);
                              }}
                              className="mb-4"
                            >
                              <textarea
                                className="w-full p-2 border rounded mb-2"
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                                placeholder="Edit your post..."
                              />
                              <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                              >
                                Update
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingFeedId(null)}
                                className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                              >
                                Cancel
                              </button>
                            </form>
                          )}
                          {/* Comments */}
                          <div className="comments-section mt-4">
                            <h4 className="text-lg font-semibold mb-2">
                              Comments
                            </h4>
                            {feed.comments.length > 0 ? (
                              feed.comments.map((comment) => (
                                <div
                                  key={comment.id}
                                  className="comment p-2 border rounded mb-2"
                                >
                                  <p className="mb-1">{comment.content}</p>
                                  <p className="text-sm text-gray-600">
                                    Commented by: {comment.User.email}
                                  </p>
                                </div>
                              ))
                            ) : (
                              <p className="text-sm text-gray-600 mb-2">
                                No comments yet.
                              </p>
                            )}
                            {/* Form to add a new comment */}
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                commentOnFeed(feed.id, newComment);
                              }}
                              className="flex flex-col"
                            >
                              <textarea
                                className="w-full p-2 border rounded mb-2"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Write a comment..."
                              />
                              <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                              >
                                Comment
                              </button>
                            </form>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600">
                        No posts yet. Be the first to post!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Dashboard;
