import React from 'react';
import AddProductButton from './components/AddProductButton';
import EditStoreButton from './components/EditStoreButton';

function App() {
  return (
    <div>
      <AddProductButton onClick={() => console.log('ADD PRODUCT clicked')} />
      <EditStoreButton onClick={() => console.log('EDIT STORE clicked')} />
    </div>
  );
}

export default App;