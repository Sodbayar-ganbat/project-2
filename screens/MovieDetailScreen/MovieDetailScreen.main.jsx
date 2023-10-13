import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  const {movieItem} = route.params;


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}
        <Image
          source = {{ uri: movieItem.posterurl}}
          style= {{ height : 500, width: 350}}
        />
        <Text style = {styles.title}>{movieItem.title}</Text>
        <Text style = {styles.storyline}>{movieItem.storyline}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
