# Live App

Welcome to Live App! This is a mobile application built using React Native and Expo. It allows users to access live location information, explore nearby venues, and engage in chat conversations.

## Installation

To get started with Live App, follow these steps:

1. Clone the repository:
```
git clone https://github.com/jcob-sikorski/live
```

2. Install Expo:
```
npm install expo
```

3. Install Realm:
```
npm install realm
```

4. Start the development server with Expo client:
```
expo start --dev-client
```

5. Run the app on iOS simulator:
```
expo run:ios
```

6. Install `react-native-gesture-handler` and link it to the iOS project:
```
npm install react-native-gesture-handler
cd ios && pod install && cd ..
```

7. Run the app on iOS simulator again:
```
expo run:ios
```

## Features

- **Live Location**: The app provides live location information, which enables users to track their own location in real-time.

- **Explore Nearby Venues**: With the help of the device's GPS, the app fetches nearby venues, such as restaurants, cafes, and more, using the Google Places API.

- **Chat Conversations**: Users can engage in chat conversations with others, creating a social and interactive experience.

## Screenshots

_Insert some screenshots of the app in action or visually appealing images._

## Dependencies

The major dependencies used in this project are:

- [Expo](https://expo.dev/): A powerful toolchain and platform for universal React Native applications.

- [Realm](https://realm.io/): A cross-platform database that allows users to store and synchronize data in real-time.

- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/#installation): A library that provides native-driven gesture management for React Native applications.

## Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request. We welcome contributions from the community!

## License

The Live App is open-source and available under the [MIT License](LICENSE.md).

---

_Thank you for using Live App! We hope you enjoy exploring the world and connecting with others through this application._