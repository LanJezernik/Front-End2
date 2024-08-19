import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {UserDto} from "./classes/user.dto";
import axios from "axios";
import Wrapper from "./components/Wrapper";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Me from "./pages/Me";
import Profile from "./pages/Profile";
import Logout from "./components/Logout";
import Card from "./components/Card";
import EditPost from "./pages/EditPost";




function App() {
  const [user,setUser] = useState<UserDto>(new UserDto(0,'','',''));

  const currentUser = async () => {
    try {
      const res = await axios.get('http://localhost:8080/users/profile',
          {withCredentials: true});

      if (res.status == 200) {
        console.log(res.data);
        setUser(res.data);
      }
    }
    catch (e) {

    }
  }

  useEffect(() => {
    currentUser();
  },[]);


  return (
      <Wrapper>

          <Routes>
            <Route path={'/Home'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/create'} element={<CreatePost />} />
            <Route path={'/me'} element={<Me user={user}/>} />
            <Route path={'/logout'} element={<Logout/>} />
            <Route path={'/delete'} element={<Home />} />
            <Route path={'/update-post/:id'} element={<EditPost />} />
          </Routes>

      </Wrapper>
  );
}

export default App;
