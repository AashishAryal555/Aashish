import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ViewUser from './Day 6/ViewUser.jsx'
import Home from './Day 6/Home';

import UserDetails from './Day 6/UserDetails.jsx';
import Layout from './Layout';
import PageNotFound from './PageNotFound.jsx';
import ToDo from './Day 8/ToDo.jsx';

export default function Path() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path= "/Userlist" element={<ViewUser />}/>
        <Route path= "/userdetails/:id" element={<UserDetails />}/>
        <Route path="/todo" element={<ToDo/>}/>
      </Route>
    </Routes>
  );
} 