import React, { useState, createContext, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utills/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

useEffect(() => {
  // 👇 Step 1: Check if "employees" data exists in localStorage
  // If not, initialize it with default employees and admin
  if (!localStorage.getItem('employees')) {
    setLocalStorage(); // This will save default dummy data
  }

  // 👇 Step 2: Get the latest employees data from localStorage
  const { employees } = getLocalStorage();

  // 👇 Step 3: Save that employee data in userData state
  // So it can be shared with other components using context
  setUserData(employees || []); // if no data, fallback to empty array
}, []);


  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
