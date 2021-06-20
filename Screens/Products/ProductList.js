import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <ProductCard items={props.item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
