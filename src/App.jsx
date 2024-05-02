import  Routes  from './routes/Routes';
import DefaultProvider from './context/DefaultContext';

const App = () => {
  return (
    <DefaultProvider>
      <Routes />
    </DefaultProvider>
  )
}

export default App;