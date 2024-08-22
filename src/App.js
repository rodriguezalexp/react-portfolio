import AppRoutes from './routes';
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
