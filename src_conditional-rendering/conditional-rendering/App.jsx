import './App.css';
import UserGreeting from './components/UserGreeting';
import GuestGreeting from './components/GuestGreeting';


function App() {
  const [user, setUser] = setState(false);

  const getGreeting = (user) => {
      if (user) {
          return <UserGreeting user={user} />
      } else {
        return <GuestGreeting />
      }
  }

  return (
    <div className="App">
      {GuestGreeting()}
      <button onClick={() => setUser("Hello World")}>Login</button>
      <button onClick={() => setUser(false)}>Logout</button>
    </div>
  );
}

export default App;
