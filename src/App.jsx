// import React, { useState } from 'react';
// import ConnectionForm from './components/Connectionform';
// import Leaderboard from './components/Leaderboard';
// import ConnectionList from './components/ConnectionList';
// import './App.css';
// const App = () => {
//   const [connections, setConnections] = useState([]);
  
//   const handleNewConnection = (offering, seeking) => {
//     const newConnection = {
//       id: connections.length + 1,
//       offering,
//       seeking,
//       conversationTopic: `Let's talk about ${offering} and ${seeking}`,
//     };
//     setConnections([...connections, newConnection]);
//   };

//   return (
//     <div>
//       <h1>Alliance Platform</h1>
//       <ConnectionForm onSubmit={handleNewConnection} />
//       <Leaderboard connections={connections} />
//       <ConnectionList connections={connections} />
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import ConnectionForm from './components/Connectionform'; // Ensure 'F' is uppercase
import Leaderboard from './components/Leaderboard';
import ConnectionList from './components/ConnectionList';
import './App.css';

const App = () => {
  const [connections, setConnections] = useState([]);

  const handleNewConnection = (name, offering, seeking) => {
    const newConnection = {
      id: connections.length + 1,
      name,
      offering,
      seeking,
      conversationTopic: `Let's talk about ${offering} and ${seeking}`,
    };
    setConnections([...connections, newConnection]);
  };

  return (
    <div>
      <h1>Alliance Platform</h1>
      <ConnectionForm onSubmit={handleNewConnection} />
      <Leaderboard connections={connections} />
      <ConnectionList connections={connections} />
    </div>
  );
};

export default App;
