import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";



export default function Banansmoothie(navigation) {
  
    return (
        <View style={styles.container}>
      <Text style={styles.text}>Banansmoothie</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    text:{
        flex: 1,
        fontSize: 45,
        alignContent: 'center'


    },
  });