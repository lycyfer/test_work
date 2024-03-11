import logo from './logo.svg';
import './App.css';
import ParamEditor from './components/params.tsx'

const params = [
  { id: 1, name: 'Name', type: 'string' },
  { id: 2, name: 'Description', type: 'string' },
  // ...
];

const model = {
  paramValues: [
    { paramId: 1, value: 'Product 1' },
    { paramId: 2, value: 'This is a description' },
    // ...
  ],
  // colors: [],
};

function App() {
  return (
    <ParamEditor params={params} model={model} />
  );
}

export default App;
