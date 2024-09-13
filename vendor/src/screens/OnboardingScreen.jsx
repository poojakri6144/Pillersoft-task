import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Logo from '../component/Logo';
import Button from '../component/Button';

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('bottom-tab')} 
      onDone={() => navigation.replace('bottom-tab')} 
      showNext={false} 
      showSkip={true} 
      skipToPage={1} 
      skipLabel={"Skip"} 
      bottomBarHeight={80} 
      containerStyles={styles.onboardingContainer} 
      dotStyle={styles.dotStyle} 
      activeDotStyle={styles.activeDotStyle} 
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <View style={styles.logoContainer}>
              <Logo />
            </View>
          ),
          title: (
            <View style={styles.textContainer}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.title}>Klinic –</Text>
                <Text style={styles.noTitle}>No</Text>
              </View>
              <Text style={styles.subtitle}>
                appointments or video calls required.
              </Text>
              <Text style={styles.description}>
                Start a visit quickly and discreetly, whenever works best for
                you and get a treatment.
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: '#fff',
          image: (
            <View style={styles.logoContainer}>
              <Logo />
            </View>
          ),
          title: (
            <View style={styles.textContainer}>
              <Text style={styles.title}>Kareer & Events</Text>
              <Text style={styles.description}>
                Start a visit quickly and discreetly, whenever works best for
                you and get a treatment.
              </Text>
              <View style={styles.buttonContainer}>
                <Button 
                  onPress={() => navigation.navigate('signUp')} 
                  title={"Get Started"} 
                  buttonStyle={styles.customButton} 
                  textStyle={styles.customButtonText}
                />
              </View>
            </View>
          ),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  onboardingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40, // Place dots closer to the logo
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A214F',
    textAlign: 'center',
  },
  noTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#1A214F',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 7,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#1A214F',
    textAlign: 'center',
    marginBottom: 10,
    maxWidth: 180,
  },
  description: {
    fontSize: 14,
    color: '#6c6c6c',
    textAlign: 'center',
    maxWidth: 300,
    marginTop: 20,
    marginBottom: 50,
  },
  skipStyle: {
    position: 'absolute',
    right: 20, // Place "Skip" button on the right
    top: 20, // Align "Skip" button towards the top
  },
  dotStyle: {
    backgroundColor: '#d1d1d1', // Inactive dot color
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor: '#1A214F', // Active dot color
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  buttonContainer: {
    marginTop: 20,
  },
  customButton: {
    backgroundColor: '#1A214F', // Custom button color
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
  },
  customButtonText: {
    color: '#fff', // Button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
