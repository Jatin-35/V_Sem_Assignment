import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Login Screen Component
function LoginScreen({ navigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to explore all the existing jobs</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => { /* Handle login */ }}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      <TouchableOpacity onPress={() => navigate('Signup')}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>

      <View style={styles.orTextContainer}>
        <Text style={styles.orText}>Or continue with</Text>
      </View>

      <View style={styles.socialIcons}>
        <FontAwesome name="google" size={32} color="black" />
        <FontAwesome name="facebook" size={32} color="black" style={styles.iconSpacing} />
        <FontAwesome name="apple" size={32} color="black" style={styles.iconSpacing} />
      </View>
    </View>
  );
}

// Signup Screen Component
function SignupScreen({ navigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Create an account so you can explore all the existing jobs</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => { /* Handle signup */ }}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with</Text>

      <View style={styles.socialIcons}>
        <FontAwesome name="google" size={32} color="black" />
        <FontAwesome name="facebook" size={32} color="black" style={styles.iconSpacing} />
        <FontAwesome name="apple" size={32} color="black" style={styles.iconSpacing} />
      </View>
    </View>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.appContainer}>
      {currentScreen === 'Login' ? (
        <LoginScreen navigate={navigate} />
      ) : (
        <SignupScreen navigate={navigate} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#0066FF',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#000',
    marginBottom: 15,
  },
  signupText: {
    color: '#000',
    marginBottom: 15,
  },
  loginText: {
    color: '#000',
    marginBottom: 15,
  },
  orTextContainer: {
    marginBottom: 10,
  },
  orText: {
    color: '#555',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: 20,
  },
});
