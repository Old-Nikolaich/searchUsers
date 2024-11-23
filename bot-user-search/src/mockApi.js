export const mockApi = {
    get: (url) => {
      const searchTerm = new URLSearchParams(url).get('searchTerm');
      const users = [
        { id: '1', name: 'Alice', avatarUrl: 'https://example.com/alice.jpg' },
        { id: '2', name: 'Bob', avatarUrl: 'https://example.com/bob.jpg' },
        // Добавьте больше пользователей
      ];
      const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
      return Promise.resolve({ data: { result: filteredUsers } });
    }
  };  