import { store } from "@/store/Store";
import { Provider } from 'react-redux';
import Navigation from "./stack/Navigation";

export default function RootLayout() {


  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
     
  );
}
