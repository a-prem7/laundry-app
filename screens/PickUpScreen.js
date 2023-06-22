import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PickUpScreen = () => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
        enter Address
      </Text>
      <TextInput
        style={{
          padding: 40,
          borderColor: "gray",
          borderWidth: 0.7,
          paddingVertical: 80,
          borderRadius: 9,
          margin: 10,
        }}
      />
    </SafeAreaView>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({});
