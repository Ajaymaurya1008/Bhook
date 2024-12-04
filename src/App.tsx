import './style/global.css';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Navigation} from './navigation';
import {KeyboardProvider} from 'react-native-keyboard-controller';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <KeyboardProvider>
        <Navigation />
      </KeyboardProvider>
    </QueryClientProvider>
  );
}

export default App;
