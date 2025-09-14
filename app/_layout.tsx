import { store } from "@/store/Store";
import { Provider } from 'react-redux';
import Navigation from "./stack/Navigation";

export default function RootLayout() {


  return (
    // provide the store to the app
    <Provider store={store}>
      <Navigation/>
    </Provider>
     
  );
}
