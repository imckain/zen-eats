import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { ResultsShow } from "./src/screens/ResultsShow";
import { Search } from "./src/screens/Search";
import { TitleLogo } from "./src/components/Header/TitleLogo";

import { FontAwesome5 } from "@expo/vector-icons";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: (props) => <TitleLogo {...props} />,
          // headerBackImage: () => {
          //   return (
          //     <FontAwesome5
          //       name="chevron-left"
          //       size={26}
          //       color="black"
          //       style={styles.backButton}
          //     />
          //   );
          // },
          headerBackTitle: " ",
        }}
      >
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ResultsShow" component={ResultsShow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 18,
    marginBottom: 10,
    marginTop: 5,
  },
});
