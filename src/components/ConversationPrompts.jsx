import React from 'react';
//
const ConversationPrompts = ({ offering, seeking }) => {
  const prompt = `How can your ${offering} help with ${seeking}?`;

  return (
    <div>
      <h3>Suggested Conversation:</h3>
      <p>{prompt}</p>
    </div>
  );
};

export default ConversationPrompts;
