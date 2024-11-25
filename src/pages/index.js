import DataTable from '../components/DataTable';
import SearchBar from '../components/SearchBar';
import React, { useState } from 'react';


export default function Home({ users }) {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      
        <h2>User Directory</h2>
        <SearchBar setSearch={setSearch} />
      
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <DataTable rows={filteredUsers} />
      )}
    </div>
  );
}


export async function getServerSideProps() {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      if (!response.ok) {
        throw new Error('Error fetching users from internal API');
      }
  
      const users = await response.json();
      return { props: { users } };
    } catch (error) {
      console.error(error);
      return { props: { users: [] } }; // Devuelve una lista vacía en caso de error
    }
  }
  