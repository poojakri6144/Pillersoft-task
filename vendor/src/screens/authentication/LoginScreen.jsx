import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../component/Logo';
import Button from '../../component/Button';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    try {
      // Create FormData object
      const formData = new FormData();
      formData.append('email', emailOrPhone);
      formData.append('password', password);
  
      // Make the API call using fetch
      const response = await fetch(
        'http://tastelink.pillersofttechnologies.com/api/user/login',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      const responseData = await response.json();
  
      if (response.ok) {
        Alert.alert(responseData.message);
        navigation.navigate('bottom-tab');
      } else {
        Alert.alert('Else Error', responseData.message);
      }
    } catch (error) {
      console.log("error", error)
      Alert.alert('Catch Error', error.message);
    }
  };
  

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Logo />

      {/* Log In Heading */}
      <Text style={styles.heading}>Log In</Text>

      {/* Email/Phone Input */}
      <TextInput
        placeholder="Email / Phone number"
        style={styles.input}
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.icon}>
          <Icon
            name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="grey"
          />
        </TouchableOpacity>
      </View>

      {/* Remember Me and Forgot Password */}
      <View style={styles.optionsContainer}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Log In Button */}
      <Button onPress={handleLogin} title={'Log In'} />

      {/* Register Link */}
      <Text style={styles.registerText}>
        Don’t have an account?{' '}
        <Text
          onPress={() => navigation.navigate('signUp')}
          style={styles.registerLink}>
          Register now!
        </Text>
      </Text>
    </View>
  );
};

// Styles (same as before)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  passwordInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    fontSize: 16,
    paddingRight: 40, // Space for the icon
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 10,
    padding: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  rememberMeText: {
    fontSize: 14,
    color: '#333',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#888',
  },
  registerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  registerLink: {
    color: '#29a16f',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
