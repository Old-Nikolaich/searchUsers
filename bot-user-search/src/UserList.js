import React from 'react';

function UserList({ users }) {
  return (
    <div>
      {users.length > 0 ? (
        users.map(user => (
          <div key={user.id} className="user-item">
            <img src={user.avatarUrl} alt={user.name} className="user-avatar" />
            <span>{user.name}</span>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default UserList;