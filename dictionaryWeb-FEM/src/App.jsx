import React from 'react';
import { ThemeProvider } from './main';

import Body from './Body';

function App() {
  return (
    <ThemeProvider>
      <Body />
    </ThemeProvider>
  );
}

export default App;
