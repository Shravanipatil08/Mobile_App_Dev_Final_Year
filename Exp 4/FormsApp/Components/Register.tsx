import { useState } from 'react';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

function RegistrationForm({ setRegister }: any) {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerUser = () => {

    if (
      !name.trim() ||
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert(
        'Warning',
        'Please fill all the fields'
      );
    }

    else if (password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters long")
    }

    else if (password !== confirmPassword) {
      Alert.alert(
        'Error',
        'Passwords do not match'
      );
    }

    else {
      Alert.alert(
        'Success',
        'Account Created Successfully'
      );

      setRegister(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.center}>

        <View style={styles.card}>

          <Text style={styles.title}>
            Create Account
          </Text>

          <Text style={styles.subtitle}>
            Enter your details to register
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setUsername}
          />

          <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={setConfirmPassword}
          />

          <Pressable
            style={styles.registerButton}
            onPress={registerUser}
          >
            <Text style={styles.buttonText}>
              Register Account
            </Text>
          </Pressable>
          <Button />
          <View style={styles.loginText}>

            <Text style={styles.normalText}>
              Already have an account?
            </Text>

            <Pressable
              onPress={() => setRegister(false)}
            >
              <Text style={styles.loginLink}>
                Login
              </Text>
            </Pressable>

          </View>

        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '84%',
    borderWidth: 1,
    borderRadius: 20,
    padding: 22,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 5,
  },

  subtitle: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 15,
  },

  input: {
    width: '92%',
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 7,
    backgroundColor: 'white',
  },

  registerButton: {
    width: '75%',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#0275d8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  loginText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },

  normalText: {
    fontSize: 14,
  },

  loginLink: {
    color: '#0275d8',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },

});

export default RegistrationForm;