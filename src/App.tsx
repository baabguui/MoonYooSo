import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES_LIST } from 'routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES_LIST.map(({ path, Component }, idx) => (
          <Route key={idx} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
