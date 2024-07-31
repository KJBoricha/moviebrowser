import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NowPlayingScreen from '../screens/NowPlayingScreen';
import PopularScreen from '../screens/PopularScreen';
import TopRatedScreen from '../screens/TopRatedScreen';
import UpcomingScreen from '../screens/UpcomingScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MoviesTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Now Playing') {
          iconName = 'play-circle-outline';
        } else if (route.name === 'Popular') {
          iconName = 'star-outline';
        } else if (route.name === 'Top Rated') {
          iconName = 'thumb-up-outline';
        } else if (route.name === 'Upcoming') {
          iconName = 'calendar-outline';
        }

        return <Icon name={iconName} color={color} size={size} />;
      },
      tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
    })}
    tabBarOptions={{
      activeTintColor: '#FF6347',
      inactiveTintColor: '#B0C4DE',
      style: {
        backgroundColor: '#000000', // Dark background for tab bar
        borderTopWidth: 0,
        elevation: 5,
      },
    }}
  >
    <Tab.Screen name="Now Playing" component={NowPlayingScreen} />
    <Tab.Screen name="Popular" component={PopularScreen} />
    <Tab.Screen name="Top Rated" component={TopRatedScreen} />
    <Tab.Screen name="Upcoming" component={UpcomingScreen} />
  </Tab.Navigator>
);

const MovieStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Movies" component={MoviesTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
  </Stack.Navigator>
);

const MainNavigator = () => (
  <NavigationContainer>
    <MovieStack />
  </NavigationContainer>
);

export default MainNavigator;
