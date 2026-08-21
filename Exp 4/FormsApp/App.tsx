import { useState } from 'react';
import {
  Alert,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import RegistrationForm from './Components/Register';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [register, setRegister] = useState(false);

  const login = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert(
        'Warning',
        'Please Enter All Fields'
      );
    } else {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>

          <View style={styles.welcomeCard}>

            <Text style={styles.welcomeTitle}>
              Welcome to App!
            </Text>

            <Text style={styles.successText}>
              Login Successful ... !!
            </Text>

            <Text style={styles.message}>
              Hello {email} !!
            </Text>

            <Text style={styles.message}>
              Hope you have a great day!
            </Text>

          </View>

        </View>
      </SafeAreaView>
    );
  }

  if (register) {
    return <RegistrationForm setRegister={setRegister} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>

        <View style={styles.card}>

          <Text style={styles.header}>
            Login Form
          </Text>

          <Text style={styles.smallText}>
            Please login to continue
          </Text>

          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            secureTextEntry
            onChangeText={setPassword}
          />

          <View style={styles.btnGroup}>

            <Pressable
              style={styles.btn}
              onPress={login}
            >
              <Text style={styles.btnText}>
                Login
              </Text>
            </Pressable>

          </View>

          <View style={styles.registerText}>

            <Text style={styles.normalText}>
              Don't have an account?
            </Text>

            <Pressable
              onPress={() => setRegister(true)}
            >
              <Text style={styles.linkText}>
                Sign Up
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
    width: '82%',
    borderWidth: 2,
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },

  header: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  smallText: {
    fontSize: 15,
    marginBottom: 15,
  },

  textInput: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
    backgroundColor: 'white',
  },

  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 10,
  },

  btn: {
    width: 110,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#0275d8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  registerText: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },

  normalText: {
    fontSize: 14,
  },

  linkText: {
    fontSize: 14,
    color: '#0275d8',
    fontWeight: 'bold',
    marginLeft: 5,
  },

  // Welcome Screen

  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeCard: {
    width: '82%',
    padding: 30,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },

  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },

  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  message: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
  },
});

export default App;