import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { TodoList } from './pages/todolist/todoList';
import { SignIn } from './pages/signin/signin';
import { SignUp } from './pages/signup/signup';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {

  return (
    <div>
      <HashRouter>
        <ToastContainer />
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<SignIn />} />
          <Route path={process.env.PUBLIC_URL + "/signin"} element={<SignIn />} />
          <Route path={process.env.PUBLIC_URL + "/signup"} element={<SignUp />} />
          <Route path={process.env.PUBLIC_URL + "/todolist"} element={<TodoList />} />
          <Route path={process.env.PUBLIC_URL + "/*"} element={
            <main className='wrongRoute'>
              <p>There's nothing here, Please check the url!</p>
            </main>
          } />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;


// import React, { Component } from 'react';
// import { HashRouter, Routes, Route, Link } from "react-router-dom";

// class App extends Component {
//   render() {
//     return (
//       <HashRouter basename="/">
//         <div>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//           </ul>
//           <hr />
//           <Routes>
//             <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
//             <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
//           </Routes>
//         </div>
//       </HashRouter>
//     );
//   }
// }

// const Home = () => <div><h2>Home</h2></div>
// const About = () => <div><h2>About</h2></div>

// export default App;