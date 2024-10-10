import { useState} from "react";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import Weather from "../components/Weather";


interface Task {
  id: number;
  content: string;
  completed: boolean;
}

interface FeedItem {
  id: number;
  content: string;
}

const Dashboard: React.FC = () => {
  // Task management states
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskContent, setNewTaskContent] = useState<string>("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editContent, setEditContent] = useState<string>("");

  // Community feed management states
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [newFeedContent, setNewFeedContent] = useState<string>("");
  const [editingFeedId, setEditingFeedId] = useState<number | null>(null);
  const [editFeedContent, setEditFeedContent] = useState<string>("");
 



  // Task management functions
  const addTask = () => {
    if (!newTaskContent.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      content: newTaskContent,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskContent("");
  };

<<<<<<< HEAD
const Dashboard = () => {
  const { userId } = useParams<{ userId: string }>();
  const authLoggedIn = authService.loggedIn();
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [newFeedContent, setNewFeedContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [editingFeedId, setEditingFeedId] = useState<number | null>(null);
  const [editContent, setEditContent] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  const fetchFeeds = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response: AxiosResponse<FeedItem[]> = await axios.get(
        `/api/feed/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setFeedItems(response.data);
    } catch (err) {
      console.error("Error fetching feeds:", err);
      setError("Error fetching feeds");
    }
  };

  const createFeed = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeedContent.trim()) return;

    try {
      const token = localStorage.getItem("jwtToken");
      const response: AxiosResponse<FeedItem> = await axios.post(
        "/api/feed",
        { content: newFeedContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setFeedItems([response.data, ...feedItems]);
      setNewFeedContent("");
    } catch (err) {
      console.error("Error creating feed:", err);
      setError("Error creating feed");
    }
  };

  const likeFeed = async (feedId: number) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response: AxiosResponse<FeedItem> = await axios.post(
        `/api/feed/${feedId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setFeedItems(
        feedItems.map((feed) => (feed.id === feedId ? response.data : feed)),
      );
    } catch (err) {
      console.error("Error liking feed:", err);
      setError("Error liking feed");
    }
  };

  const deleteFeed = async (feedId: number) => {
    try {
      const token = localStorage.getItem("jwtToken");
      await axios.delete(`/api/feed/${feedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFeedItems(feedItems.filter((feed) => feed.id !== feedId));
    } catch (err) {
      console.error("Error deleting feed:", err);
      setError("Error deleting feed");
    }
  };

  const updateFeed = async (feedId: number) => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response: AxiosResponse<FeedItem> = await axios.put(
        `/api/feed/${feedId}`,
        { content: editContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setFeedItems(
        feedItems.map((feed) => (feed.id === feedId ? response.data : feed)),
      );
      setEditingFeedId(null);
      setEditContent("");
    } catch (err) {
      console.error("Error updating feed:", err);
      setError("Error updating feed");
    }
  };

  const commentOnFeed = async (feedId: number, commentContent: string) => {
    if (!commentContent.trim()) return;

    try {
      const token = localStorage.getItem("jwtToken");
      const response: AxiosResponse<CommentItem> = await axios.post(
        `/api/feed/${feedId}/comment`,
        { content: commentContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setFeedItems(
        feedItems.map((feed) =>
          feed.id === feedId
            ? { ...feed, comments: [...feed.comments, response.data] }
            : feed,
        ),
      );
      setNewComment("");
    } catch (err) {
      console.error("Error commenting on feed:", err);
      setError("Error commenting on feed");
    }
  };

  useEffect(() => {
    fetchFeeds();
  }, [userId]);

  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto">
              <div className="flex space-x-4">
                <div className="w-1/4">
                  <Weather />
                </div>
                <div className="w-3/4">
                  <h1 className="text-3xl font-bold mb-4">Community Feed</h1>
                  {error && <p className="text-red-500 mb-4">{error}</p>}
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
=======
  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const editTask = (id: number) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setEditingTaskId(id);
      setEditContent(task.content);
    }
  };

  const updateTask = () => {
    if (editingTaskId === null || !editContent.trim()) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTaskId ? { ...task, content: editContent } : task
      )
    );
    setEditingTaskId(null);
    setEditContent("");
  };

  const completeTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Community feed functions
  const addFeed = () => {
    if (!newFeedContent.trim()) return;
    const newFeed: FeedItem = {
      id: Date.now(),
      content: newFeedContent,
    };
    setFeedItems([newFeed, ...feedItems]);
    setNewFeedContent("");
  };

  const deleteFeed = (id: number) => {
    const updatedFeeds = feedItems.filter((feed) => feed.id !== id);
    setFeedItems(updatedFeeds);
  };

  const editFeed = (id: number) => {
    const feed = feedItems.find((feed) => feed.id === id);
    if (feed) {
      setEditingFeedId(id);
      setEditFeedContent(feed.content);
    }
  };

  const updateFeed = () => {
    if (editingFeedId === null || !editFeedContent.trim()) return;

    setFeedItems((prevFeeds) =>
      prevFeeds.map((feed) =>
        feed.id === editingFeedId ? { ...feed, content: editFeedContent } : feed
      )
    );
    setEditingFeedId(null);
    setEditFeedContent("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />
      <main className="flex-grow p-6">
        <div className="container mx-auto">
          <div className="flex space-x-4">
            <div className="w-1/4">
              <Weather />
            </div>
            <div className="w-3/4">
              {/* Task Manager */}
              <div className="bg-white shadow-md rounded p-4 border mb-6">
                <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
                <input
                  type="text"
                  value={newTaskContent}
                  onChange={(e) => setNewTaskContent(e.target.value)}
                  placeholder="Add a new task..."
                  className="w-full p-2 border rounded mb-2"
                />
                <button
                  onClick={addTask}
                  className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                >
                  Add Task
                </button>
                <div className="space-y-2">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-2 border rounded bg-gray-50"
                    >
                      {editingTaskId === task.id ? (
                        <div className="flex items-center space-x-2 w-full">
                          <input
                            type="text"
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            className="w-full p-2 border rounded"
                          />
                          <button
                            onClick={updateTask}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingTaskId(null)}
                            className="bg-gray-500 text-white px-3 py-1 rounded"
                          >
                            Cancel
                          </button>
>>>>>>> release/v2.0
                        </div>
                      ) : (
                        <>
                          <span
                            className={`flex-grow ${
                              task.completed ? "line-through text-gray-500" : ""
                            }`}
                          >
                            {task.content}
                          </span>
                          <button
                            onClick={() => completeTask(task.id)}
                            className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                          >
                            {task.completed ? "Undo" : "Complete"}
                          </button>
                          <button
                            onClick={() => editTask(task.id)}
                            className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="bg-red text-white px-3 py-1 rounded"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Feed */}
              <div className="bg-white shadow-md rounded p-4 border">
                <h2 className="text-2xl font-bold mb-4">Community Feed</h2>
                <div className="mb-4">
                  <textarea
                    value={newFeedContent}
                    onChange={(e) => setNewFeedContent(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <button
                    onClick={addFeed}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Post
                  </button>
                </div>
                <div className="space-y-4">
                  {feedItems.length > 0 ? (
                    feedItems.map((feed) => (
                      <div
                        key={feed.id}
                        className="feed-item p-4 border rounded bg-gray-50"
                      >
                        {editingFeedId === feed.id ? (
                          <>
                            <textarea
                              value={editFeedContent}
                              onChange={(e) => setEditFeedContent(e.target.value)}
                              className="w-full p-2 border rounded mb-2"
                            />
                            <button
                              onClick={updateFeed}
                              className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingFeedId(null)}
                              className="bg-gray-500 text-white px-3 py-1 rounded"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <p className="mb-2">{feed.content}</p>
                            <button
                              onClick={() => editFeed(feed.id)}
                              className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteFeed(feed.id)}
                              className="bg-red text-white px-3 py-1 rounded"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">No posts yet. Be the first to post!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
