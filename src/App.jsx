import { useEffect, useState } from "react";
import Home from "./pages/Home";
import SplashScreen from "./components/SplashScreen/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return loading ? <SplashScreen /> : <Home />;
}

export default App;