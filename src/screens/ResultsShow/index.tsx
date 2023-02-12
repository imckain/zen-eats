import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import yelp from "../../api/yelp";

import DetailHeader from "../../components/ResultsShow/DetailHeader";
import DetailPhotoList from "../../components/ResultsShow/DetailPhotoList";
import ReviewList from "../../components/ResultsShow/ReviewList";

export const ResultsShow = (props) => {
  const [result, setResult] = useState(null);
  const [reviews, setReviews] = useState([]);

  const isLoading = (item) => {
    if (item === null) {
      return (
        <View>
          <ActivityIndicator size="large" color="black" />
        </View>
      );
    } else return;
  };

  const id = props.route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  const getReviews = async (id) => {
    const response = await yelp.get(`/${id}/reviews`);
    setReviews(response.data.reviews);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  useEffect(() => {
    getReviews(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <ScrollView style={styles.containerStyle}>
      {isLoading(result)}
      <DetailHeader result={result} />
      <DetailPhotoList result={result} />
      <ReviewList reviews={reviews} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    flex: 1,
  },
});
