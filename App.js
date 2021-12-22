import Home from './screens/Home';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function App() {
  let[fontsLoaded] = useFonts({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Home />
  );
}


