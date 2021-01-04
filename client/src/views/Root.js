import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  padding: 1px 2px;
`;
const App = () => (
  <div>
    <div className="App">App view</div>
    <MyButton>Click me</MyButton>
  </div>
);

export default App;
