import { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, Pressable, Image, View} from "react-native";
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
  
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  list: {
    padding: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1c1e",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  price: {
    color: "#4ade80",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 6,
  },
});

