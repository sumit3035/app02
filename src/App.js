import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css"


// 3️⃣ Router singleton created
const router = createBrowserRouter([
  { path: "/", Component: Home }, // 🆕
  { path: "*", Component: Root },
  {
    // Lifted blog splat route
    path: "/blog/*",
    children: [
      // New blog index route
      { index: true, Component: () => <h1>Blog Index</h1> },
      // Blog subapp splat route added for /blog/posts matching
      { path: "*", Component: BlogApp },
    ],
  },
]);

// 4️⃣ RouterProvider added
export default function App() {
  return <RouterProvider router={router} />;
}




function Root() {
  return (

    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/blog/*" element={<BlogApp />} /> */}
      <Route path="/users/*" element={<UserApp />} />
    </Routes>

  );
}

function Home() {
  return (
      <div className="App">
        <h1>Welcome!</h1>
        <p>
          Check out the <Link to="/blog">blog</Link> or the{" "}
          <Link to="users">users</Link> section
        </p>
      </div>
  );
}

function BlogApp() {
  return (
    <Routes>
      {/* <Route index element={<h1>Blog Index</h1>} /> */}
      <Route path="posts" element={<h1>Blog Posts</h1>} />
    </Routes>
  );
}

function UserApp() {
  return (
    <Routes>
      <Route index element={<h1>Users Index</h1>} />
    </Routes>
  );
}