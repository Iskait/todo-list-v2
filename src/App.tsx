import "./index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoInput from "./components/TodoInput";
import SortBy from "./components/SortBy";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-scroll">
      <Header />
      <main className="container flex-auto space-y-5">   
        <TodoInput />
        <SortBy />
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
