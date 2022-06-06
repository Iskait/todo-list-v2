import './scss/all.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoInput from './components/TodoInput';
import SortBy from './components/SortBy';
import TodoList from './components/TodoList';

function App() {

  return (
        <div className="wrapper">
            <Header/>
            <main className="page">
              <TodoInput />
              <SortBy />
              <TodoList />
            </main>
            <Footer/>
        </div>
  );
}

export default App;


