import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
} from "react-native";
var { width } = Dimensions.get("window");

const ProductCard = (props) => {
  const { name, price, image, countInStock } = props.items;

  return (
    <View style={styles.prodCardContainer}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: image
            ? image
            : "https://static1.squarespace.com/static/5a51022ff43b55247f47ccfc/5a567854f9619a96fd6233bb/5b74446c40ec9afbc633e555/1534346950637/Husqvarna+545FR+%282%29.png?format=1500w",
        }}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name?.length > 15 ? name?.substring(0, 15 - 3) + "..." : name}
      </Text>
      <Text style={styles.price}>${price}</Text>
      {countInStock > 0 ? (
        <View>
          <Button title={"Add"} color={"green"}></Button>
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Currently Unavailable</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  prodCardContainer: {
    width: width / 2 - 15,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
    alignItems: "center",
    elevation: 6,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 10,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 80,
  },
  card: {
    marginBottom: 10,
    width: width / 2 - 20,
    height: width / 2 - 100,
    // backgroundColor: "transparent",
  },

  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
  },

  price: {
    fontSize: 20,
    color: "orange",
    marginTop: 10,
  },
});

export default ProductCard;
