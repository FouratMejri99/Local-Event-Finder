import { AuthProvider } from "./hooks/useAuth";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
