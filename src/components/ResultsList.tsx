import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = (props) => {
  if (!props.results.length) {
    return null;
  }

  const navigation = useNavigation();

  return (
    <View style={styles.containerStyle}>
      <Text allowFontScaling={false} style={styles.titleStyle}>
        {props.title}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                return navigation.navigate("ResultsShow", { id: item.id });
              }}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 15,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: "700",
    marginLeft: 15,
    marginBottom: 7,
  },
});

export default React.memo(ResultsList);
