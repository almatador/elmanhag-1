import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { Dashboard } from './Layouts/AllLayouts'


function App() {

  return (
    <>
      <div className="flex gap-x-4 flex-col">
        <Dashboard />
        {/* <h2>Welcome {student}</h2>
      <p>Email: {student}</p> */}

      </div>
    </>
  )
}

export default App
