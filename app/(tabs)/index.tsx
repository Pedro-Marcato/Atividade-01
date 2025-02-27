
import { Image, Text, View, StyleSheet } from "react-native";
import { useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.preventAutoHideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>

        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/images/Foto1Atividade1.jpeg")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>
            VW -  Primeira geração do Gol{'\n'}
            Ano: 1980{'\n'}
            Cor: Vermelho
          </Text>
        </View>


        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/images/Foto2Atividade1.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>
            VW - Gol G2{'\n'}
            Ano: 1990{'\n'}
            Cor: Verde Escuro
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    flexDirection: "column",
    gap: 3,
  },

  imageWrapper: {
    alignItems: "center",
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "gray",
  },

  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  }

});
