import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
} from 'react-router-dom';

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面
      </p>
      <Logout />
    </>
  );
};
const Logout = () => {
  let navigate = useNavigate();

  return (
    <>
      <button type="button" onClick={e => navigate('/login')}>登出</button>
    </>
  )
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Posts = () => {
  return (
    <>
      <h3> Posts 頁面</h3>
      <Outlet />
    </>
  )
}
const PostDetail = () => {

  let params = useParams();
  return (
    <>
      <h3> Posts ID: {params.postId} </h3>

    </>
  )
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/posts/post-123456">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" />
          <Route path="/todo" element={<Todo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />}>
            <Route path=":postId" element={<PostDetail />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
