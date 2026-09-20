import { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Float } from "react-native/Libraries/Types/CodegenTypesNamespace";

type ratings = {
  rate: number;
  count: number;  
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ratings;
};

export default function Index() {
  //const [name, setName] = useState(0);

  const [products, setProducts] = useState<Product[]>([]);
  
  const getFromApi = () => {
  return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => {
      setProducts(json);
    })
    .catch(error => {
      console.error(error);
    });

  
};

useEffect(() => {
    getFromApi();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Text style={styles.mytext}>{item.title}</Text>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mytext: {
    color: "red",
    fontSize: 18,
    padding: 10,
  }

});
