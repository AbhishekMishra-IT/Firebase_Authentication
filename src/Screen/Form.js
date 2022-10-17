import React, { useState } from "react";
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

const Form = () => {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState(null);

  return (
    <SafeAreaView>
      <Text style={styles.detailText}>Customer Details</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="First Name"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Last Name"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mobile"
        keyboardType="numeric"
      />

      <Button
        title="Save"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  detailText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
    paddingVertical: 20
  },
});

export default Form;