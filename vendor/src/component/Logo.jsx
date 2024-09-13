import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Logo = () => {
  return (
    <>
     <View style={styles.boxContainer}>
        {/* Logo Box */}
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>Logo</Text>
        </View>

        {/* Ipsum Box positioned on top of Logo Box */}
        <LinearGradient
          colors={['#1c8763', '#143c53']}
          style={styles.ipsumBox}
        >
          <Text style={styles.ipsumText}>Ipsum</Text>
        </LinearGradient>
      </View>
  </>
  )
}

export default Logo

const styles = StyleSheet.create({
    boxContainer: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
      },
      logoBox: {
        backgroundColor: '#1C2C4A', // navy blue color
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems:'flex-start',
        position: 'relative', // allows Ipsum to overlap
    
      },
      logoText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft:20,
      },
      ipsumBox: {
        position: 'absolute', // This makes Ipsum box overlap the Logo box
        right: 0, // Aligns Ipsum to the right side of the container
        width: 100, // Adjust width as needed
        height: 40, // Same height as Logo box
        justifyContent: 'center',
        alignItems: 'center',
      },
      ipsumText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
})