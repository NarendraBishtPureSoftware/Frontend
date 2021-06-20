import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import ProductList from "./ProductList";
const data = require("../../assets/data/products.json");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <View>
      <Text>Product Container </Text>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => <ProductList key={item.id} item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ProductContainer;
