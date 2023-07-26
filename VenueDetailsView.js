import React from 'react';
import { View, Text } from 'react-native';

const VenueDetailsView = ({ selectedVenue }) => {
  if (!selectedVenue) return null;

  // You can customize the view to display the details of the selected venue
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedVenue.name}</Text>
      <Text style={styles.address}>{selectedVenue.vicinity}</Text>
      {/* Add more details or components as needed */}
    </View>
  );
};

const styles = {
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    marginTop: 8,
    color: '#888',
  },
};

export default VenueDetailsView;
