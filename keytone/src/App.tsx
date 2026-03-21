import { TypingPractice } from './components';
import { AudioProvider } from './contexts/AudioContext';
import { UniverseProvider } from './contexts/UniverseContext';
import { ErrorBoundary } from './components/ErrorBoundary';


function App() {
  return <>
    <ErrorBoundary>
      <AudioProvider>
        <UniverseProvider>
          <div className="h-screen overflow-hidden flex flex-col">
            <TypingPractice />
          </div>
        </UniverseProvider>
      </AudioProvider>
    </ErrorBoundary>
    </>
  }

export default App;