import { Provider } from "react-redux";
import { Pages } from "./pages/pages";
import store from "./store/store";
import { Image, View, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./configurationLenguage";
import "./style/main.scss";
import logo from "./assets/image/logo.png";

const components = {
  Header() {
    return (
      <View textAlign="center">
        <Image alt="Mi Tienda Online" src={logo} />
      </View>
    );
  },
};

function App({ signOut }) {
  return (
    <Provider store={store}>
      <Pages signOut={signOut} />
    </Provider>
  );
}

export default withAuthenticator(App, { components });
