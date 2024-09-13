import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from 'react-native-vector-icons/AntDesign';
import Group from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './HomeScreen';


const Tab = createBottomTabNavigator();


const AddPostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add Post Screen</Text>
    </View>
  );
};

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const BottomTabScreen = () => {
  return (
     <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            elevation: 0,
            backgroundColor: '#ffffff',
            height: 60,
            ...styles.shadow
          },
          tabBarShowLabel: false,
          headerShown:false
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Home name="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Group"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Group name="account-group-outline" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddPostScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <TouchableOpacity style={styles.addButton}>
                <Icon name="add" color={'#3EB078'} size={38} />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="search-outline" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="person-circle-outline" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  activityBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  activityText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1d1d1d',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationText: {
    color: 'gray',
    fontSize: 14,
  },
  connectButton: {
    backgroundColor: '#E8F0FF',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  connectButtonText: {
    color: '#007BFF',
    fontSize: 12,
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
  reactions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth:2,
    backgroundColor:'#fff',
    borderColor:'#223058',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
});

export default BottomTabScreen;
