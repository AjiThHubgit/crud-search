import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import UserForm from './components/UserForm';

function App() {

  const [user, setUser] = useState("");
  const [users, setUsers] = useState([
    { id: "239832ldfc", name: "Ajith" },
    { id: "93843232zwea", name: "Abi" }
  ]);

  return (
    <>
      <Header />
      <UserForm />
    </>
  )
}

export default App
