import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActivityIndicator, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useAuth } from "../hooks/useAuth";
import MyEventsScreen from "../screens/creator/MyEventsScreen";
import FavoritesScreen from "../screens/searcher/FavoritesScreen";
import HomeScreen from "../screens/searcher/HomeScreen";

// 1️⃣ Define user type
type User = {
  id: string;
  email: string;
  role: "searcher" | "creator"; // adjust according to your app roles
};

// 2️⃣ Define hook return type (if not already typed)
interface AuthHook {
  user: User | null;
  loading: boolean;
}

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  // 3️⃣ Type assertion for useAuth
  const { user, loading } = useAuth() as AuthHook;

  if (loading || !user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // optional: hide top header
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      }}
    >
      {user.role === "searcher" ? (
        <>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="heart-outline" color={color} size={size} />
              ),
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="My Events"
            component={MyEventsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="list-outline" color={color} size={size} />
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
}
