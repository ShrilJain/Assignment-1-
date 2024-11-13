
import React from 'react';
import ConversationPrompts from './ConversationPrompts';

const ConnectionList = ({ connections }) => {
  return (
    <div>
      <h2>Connections</h2>
      <ul>
        {connections.map((connection) => (
          <li key={connection.id}>
            <strong>{connection.name ? `${connection.name}: ` : ''}</strong>
            {connection.offering} → {connection.seeking}
            <ConversationPrompts 
              offering={connection.offering} 
              seeking={connection.seeking} 
              defaultPrompt={`Let's talk about ${connection.offering} and ${connection.seeking}`} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectionList;

