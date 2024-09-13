import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {Picker} from '@react-native-picker/picker';
import Button from '../../component/Button';
import axios from 'axios';
import  Icon  from 'react-native-vector-icons/Ionicons';

const SignupScreen = ({navigation}) => {
  // State for form inputs
  const [countryCode, setCountryCode] = useState('91');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // Function to handle form submission
  const handleSignup = async () => {
    // Validate that all fields are filled
    if (!firstName || !lastName || !email || !password || !mobileNumber) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
  
    // Validate password length
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }
  
    try {
      // Create FormData object
      const formData = new FormData();
      formData.append('firstname', firstName);
      formData.append('lastname', lastName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('password_confirmation', password);
      formData.append('phonecode', countryCode);
      formData.append('phone', mobileNumber);
  
      // Make the API call using fetch
      const response = await fetch(
        'http://tastelink.pillersofttechnologies.com/api/user/register',
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
        Alert.alert('Success', `${responseData.message}`);
        navigation.navigate('login');
        console.log("object>>>>>>>>>", responseData);
      } else {
        Alert.alert("Else Error", responseData.message);
      }
    } catch (error) {
      Alert.alert('Catch Error', error.message);
    }
  };
  

  return (
    <ScrollView style={styles.container}>
     <TouchableOpacity onPress={()=>      navigation.goBack()}>

     <Icon name="chevron-back" size={30} color="#6e6968" />

     </TouchableOpacity>
     <Text style={styles.title}>Create account</Text>

      <Text style={styles.subtitle}>3 easy signup process</Text>

      {/* Progress Bar */}
      <Progress.Bar
        progress={0.33}
        width={null}
        height={8}
        color={'#54C6BE'}
        unfilledColor={'#E0E0E0'}
        borderWidth={0}
        style={styles.progressBar}
      />

      {/* Title and Subtitle */}
      {/* Form */}
      <Text style={styles.sectionTitle}>Enter your basic details</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Mobile Number Input */}
      <View style={styles.phoneInputContainer}>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={countryCode}
            style={styles.picker}
            onValueChange={itemValue => setCountryCode(itemValue)}>
            <Picker.Item label="+91" value="91" />
            <Picker.Item label="+33" value="33" />
            <Picker.Item label="+1" value="1" />
          </Picker>
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
      </View>

      {/* Submit Button */}
      <Button onPress={handleSignup} title={'Next'} />

      <Text style={styles.registerText}>
        Already have an account?{' '}
        <Text
          onPress={() => navigation.navigate('login')}
          style={styles.registerLink}>
          Login now!
        </Text>
      </Text>
    </ScrollView>
  );
};

// Styles (same as before)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0E6F0',
  },
  backArrow: {
    fontSize: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    marginTop:25
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  progressBar: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    maxWidth:'90%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#FFF',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  pickerWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  picker: {
    height: 50,
    width: '100%',
  },
  phoneInput: {
    flex: 2,
    height: 50,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
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

export default SignupScreen;
