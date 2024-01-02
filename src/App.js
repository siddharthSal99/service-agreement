import './App.css';
import DocumentRenderer from './DocumentRenderer';
import documentStructure from './input.json'

function App() {
  return (
    <div className="App">
      <DocumentRenderer documentStructure={documentStructure} />
    </div>
  );
}

export default App;
