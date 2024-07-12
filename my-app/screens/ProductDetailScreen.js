// ProductDetailScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/back-icon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cartButton}>
          <Image source={require('../assets/shoppingBag.png')} style={styles.cartIcon} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.materials}>MATERIALS</Text>
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.shipping}>
        <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
        <Text style={styles.estimatedDelivery}>Estimated to be delivered on 09/11/2021 - 12/11/2021</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    height: 50,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  logo: {
    flex: 1,
    height: 30,
    resizeMode: 'contain',
  },
  cartButton: {
    padding: 8,
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#f00',
    marginBottom: 16,
  },
  materials: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  shipping: {
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    paddingTop: 16,
  },
  shippingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  estimatedDelivery: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProductDetailScreen;
