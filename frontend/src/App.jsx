import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    </UserProvider>
  );
}

export default App;
