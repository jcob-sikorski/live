import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import BottomButtons from './BottomButtons';
import { StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import VenueDetailsView from './VenueDetailsView';

// cache the info for map during app loading
// if the location changes like 500m update the cache
// run expo apps in the background

const MapViewScreen = ({ navigation, location }) => {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [showVenueDetails, setShowVenueDetails] = useState(false);

  useEffect(() => {
    if (location) {
      fetchVenues(location.latitude, location.longitude);
      console.log("Venues fetched...")
    }
  }, [location]);

  const fetchVenues = async (latitude, longitude) => {
    const API_KEY = 'AIzaSyB64DMUQWNoblN6WEWwHa0r4x-EGVWk3YY';
    const radius = 5000; // 5000 meters (5 kilometers)
    const type = 'restaurant'; // You can specify the type of venues you want to fetch

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${API_KEY}`;

    try {
      const response = await axios.get(url);
      setVenues(response.data.results);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const handleVenueMarkerPress = (venue) => {
    setSelectedVenue(venue);
    setShowVenueDetails(true); // Show the VenueDetailsView when a venue is clicked
  };

  const handleVenueDetailsClose = () => {
    setShowVenueDetails(false); // Hide the VenueDetailsView when the close button is pressed
    setSelectedVenue(null); // Clear the selectedVenue state
  };
  


  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={blueMapStyle}
          showsUserLocation={true} // Show user's location as a blue dot
        >

          {/* Display nearby venues as markers */}
          {venues.map((venue) => (
            <Marker
              key={venue.place_id}
              coordinate={{
                latitude: venue.geometry.location.lat,
                longitude: venue.geometry.location.lng,
              }}
              title={venue.name}
              description={venue.vicinity}
              onPress={() => handleVenueMarkerPress(venue)}
            />
          ))}
        </MapView>
      ) : (
        <Text>Loading...</Text>
      )}

      {/* Render the VenueDetailsView as a Modal */}
      <Modal
          visible={showVenueDetails}
          animationType="fade"
          transparent={true}
          onRequestClose={handleVenueDetailsClose}
        >
        <View style={styles.modalContainer}>
          <VenueDetailsView
            selectedVenue={selectedVenue}
            onClose={handleVenueDetailsClose}
            navigation={navigation} // Pass the navigation prop to VenueDetailsView
          />
        </View>
        </Modal>

      {/* Include the BottomButtons component */}
      <BottomButtons
        onCameraPress={() => navigation.navigate('Camera')}
        onViewMapPress={() => navigation.navigate('Main')}
      />
      {/* End of BottomButtons */}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

// Custom map style (blue)
const blueMapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];

export default MapViewScreen;
