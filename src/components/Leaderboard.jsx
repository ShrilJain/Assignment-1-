import React from 'react';

const Leaderboard = ({ connections }) => {
  // Create a dictionary to store the count of successful connections for each user.
  const connectionCounts = {};

  // Find matches between users based on complementary offerings and needs.
  connections.forEach((connection) => {
    connections.forEach((otherConnection) => {
      if (
        connection.offering === otherConnection.seeking &&
        connection.seeking === otherConnection.offering &&
        connection.id !== otherConnection.id // Avoid self-matching
      ) {
        // Increment match count for both users involved in the connection.
        connectionCounts[connection.id] = (connectionCounts[connection.id] || 0) + 1;
        connectionCounts[otherConnection.id] = (connectionCounts[otherConnection.id] || 0) + 1;
      }
    });
  });

  // Sort connections by the number of successful matches (descending order).
  const sortedConnections = connections
    .map((connection) => ({
      ...connection,
      matches: connectionCounts[connection.id] || 0,
    }))
    .sort((a, b) => b.matches - a.matches) // Sort by match count in descending order
    .slice(0, 3); // Only top 3 for leaderboard

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {sortedConnections.map((connection) => (
          <li key={connection.id}>
            {connection.name} ({connection.offering} → {connection.seeking}) - Matches: {connection.matches}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
