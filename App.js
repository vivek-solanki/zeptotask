import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import AppNavigation from "./src/navigations";
import store from "./store";
import CartToast from "./src/components/CartToast/CartToast";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigation />
        <CartToast />
      </Provider>
    </NavigationContainer>
  );
}

