import React, { useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Linking,
  Pressable,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const ReviewList = ({ reviews }) => {
  const handleReviewPress = useCallback(async (url) => {
    await Linking.canOpenURL(url).then(() => Linking.openURL(url));
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={reviews}
        keyExtractor={(reviews) => reviews.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerStyle}>
              <View style={styles.reviewFlatListContainerStyle}>
                <View style={styles.reviewHeaderStyle}>
                  <Text
                    allowFontScaling={false}
                    style={styles.reviewHeaderAuthorStyle}
                  >
                    {item.user.name}
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={styles.reviewHeaderRatingStyle}
                  >
                    {item.rating}{" "}
                    <FontAwesome name="star" size={18} color="#dbbc54" />{" "}
                  </Text>
                </View>
                <View style={styles.reviewContainerStyle}>
                  <View style={styles.quoteLinesContainerStyle}>
                    <View style={styles.quoteLineStyle} />
                    <View style={styles.quoteLine2Style} />
                  </View>
                  <Text allowFontScaling={false} style={styles.reviewStyle}>
                    {item.text}
                  </Text>
                </View>
              </View>
              <View>
                <Pressable
                  style={styles.linkButtonStyle}
                  onPressIn={() => handleReviewPress(item.url)}
                >
                  <Text
                    allowFontScaling={false}
                    style={styles.linkButtonTextStyle}
                  >
                    Read Full Review
                  </Text>
                </Pressable>
              </View>
            </View>
          );
        }}
        style={styles.reviewFlatListStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
  },
  flatListStyle: {
    marginVertical: 15,
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginLeft: 10,
    borderRadius: 4,
  },
  reviewFlatListStyle: {
    fontSize: 15,
    width: "100%",
    height: "auto",
  },
  reviewFlatListContainerStyle: {
    height: "auto",
    width: 300,
    padding: 15,
  },
  reviewHeaderStyle: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    alignItems: "center",
  },
  reviewHeaderAuthorStyle: {
    fontSize: 22,
    fontWeight: "600",
  },
  reviewHeaderRatingStyle: {
    fontSize: 18,
    fontWeight: "600",
  },
  reviewContainerStyle: {
    flexDirection: "row",
  },
  quoteLinesContainerStyle: {
    flexDirection: "row",
    marginHorizontal: 15,
  },
  quoteLineStyle: {
    width: 3,
    height: "100%",
    backgroundColor: "rgb(242, 162, 44)",
    marginRight: 2,
    borderRadius: 4,
  },
  quoteLine2Style: {
    width: 1.5,
    height: "93%",
    backgroundColor: "rgba(44, 44, 44, .29)",
    alignSelf: "center",
    borderRadius: 4,
  },
  reviewStyle: {
    paddingRight: 52,
    fontSize: 18,
  },
  linkButtonStyle: {
    width: "50%",
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "#D32422",
    borderWidth: 2,
    borderRadius: 4,
    marginTop: 15,
  },
  linkButtonTextStyle: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default ReviewList;
