import { Product } from ".";
import { ratings } from ".";
import { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, Pressable, Image, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Float } from "react-native/Libraries/Types/CodegenTypesNamespace";
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';