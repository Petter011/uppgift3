import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";

export default function Home({ navigation }) {
  const DATA = [
    { id: "1", text: "Apelsinjuice" },
    { id: "2", text: "Banansmoothie" },
    { id: "3", text: "Cider" },
  ];

  Apelsin = ["Apelsinjuice"];
  Cider = ["Cider"];
  Banan = ["Banansmoothie"];

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              if (item.text == "Apelsinjuice") {
                navigation.navigate("Apelsinjuice", { Apelsin });
              }
              if (item.text == "Banansmoothie") {
                navigation.navigate("Banansmoothie", { Banan });
              }
              if (item.text == "Cider") {
                navigation.navigate("Cider", { Cider });
              }
            }}
            style={[
              styles.list,
              { backgroundColor: index === 1 ? "blue" : "transparent" },
            ]}
          >
            <Text
              style={[
                styles.listText,
                { color: index === 1 ? "white" : "black" },
              ]}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listText: {
    fontSize: 20,
    padding: 20,
    fontWeight: "bold",
  },
  list: {
    padding: 10,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
});
