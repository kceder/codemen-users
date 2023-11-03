import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import { UserProvider } from "./contexts/UserContext";  // Provides the UserContext (list of users) to all components

// MainComponent is the main content of the page.
// HeaderComponent is only a visual header of the page.
// FooterComponent is only a visual footer of the page.

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
