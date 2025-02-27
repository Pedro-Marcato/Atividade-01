import { useFonts } from "expo-font";

export function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
  });  

  return fontsLoaded;
}
