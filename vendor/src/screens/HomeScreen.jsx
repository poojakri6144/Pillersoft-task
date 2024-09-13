import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

const posts = [
  {
    id: 1,
    location: 'San Francisco, CA',
    title: 'Wonderful building near London Big Ben with amazing windows...',
    user: 'Olivia Redman',
    time: '2 minutes ago',
    likes: 325,
    comments: 45,
  },
  {
    id: 2,
    location: 'Paris, France',
    title: 'Eiffel Tower view from this beautiful apartment...',
    user: 'James Smith',
    time: '5 minutes ago',
    likes: 200,
    comments: 30,
  },
  // Add more posts as needed
];

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Popular');

  const renderPost = ({item}) => (
    <LinearGradient
      colors={['#129A61', '#1A2C50']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.postContainer}>
      {/* Placeholder for the image */}
      <View style={styles.imagePlaceholder} />
      <View style={styles.header}>
        <View style={styles.userLocation}>
          <Icon name="location-pin" type="entypo" size={16} color="#CADAD7" />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
        <View style={styles.connectButton}>
          <Text style={styles.connectText}>Connect</Text>
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>

      <View style={styles.footer}>
        <View style={styles.userDetails}>
          <View style={styles.avatarPlaceholder} />
          <View style={{marginTop: 2}}>
            <Text style={styles.userName}>{item.user}</Text>
            <Text style={styles.timeAgo}>{item.time}</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Icon name="heart" type="feather" size={20} color="#808080" />
          <Text style={styles.actionText}>{item.likes}</Text>
          <Icon
            name="message-circle"
            type="feather"
            size={20}
            color="#808080"
          />
          <Text style={styles.actionText}>{item.comments}</Text>
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{height:35, width:35, borderRadius:20, borderWidth:2, borderColor:'#2AA772',alignItems:'center'}}>
            <Image style={{marginTop:7}}  source={require('../assets/icons/Menu.png')}/>
        </View>
        <View>
        <Text style={styles.headerTitle}>Activity</Text>

        </View>
        <View style={{display:'flex',flexDirection:'row'}}>
          <Icon style={{marginRight:10}} name="search" type="feather" size={24} color="#808080" />
          <Icon name="bell" type="feather" size={24} color="#808080" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>3</Text>
          </View>
        </View>
      </View>

      {/* Tab section */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Popular')}>
          <Text
            style={[styles.tab, activeTab === 'Popular' && styles.activeTab]}>
            Popular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Latest')}>
          <Text
            style={[styles.tab, activeTab === 'Latest' && styles.activeTab]}>
            Latest
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Following')}>
          <Text
            style={[styles.tab, activeTab === 'Following' && styles.activeTab]}>
            Following
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sliding posts */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1c2451',
    textAlign:'center'
  },
  notificationBadge: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -3,
    right: 0,
  },
  notificationText: {
    color: '#fff',
    fontSize: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFF',
    paddingVertical: 10,
  },
  tab: {
    fontSize: 20,
    color: '#808080',
    fontWeight: '600',
  },
  activeTab: {
    color: '#000',
    fontWeight: 'bold',
    borderBottomColor: '#000',
  },
  postContainer: {
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 10,
    padding: 16,
    width: 300, // Set a fixed width for the horizontal sliding effect
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  userLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 5,
    color: '#CADAD7',
    fontSize: 14,
  },
  connectButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  connectText: {
    fontSize: 12,
    color: '#000',
  },
  imagePlaceholder: {
    height: '65%',
    backgroundColor: '#A0A0A0',
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#CADAD7',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    marginRight: 10,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#CADAD7',
  },
  timeAgo: {
    fontSize: 12,
    color: '#808080',
    marginLeft: 5,
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    color: '#808080',
    marginLeft: 5,
    marginRight: 15,
  },
});

export default HomeScreen;
