/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App: () => React$Node = () => {
  const color = '#aaa222';
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <Icon1 name="facebook" size={25} />
          <Icon name="airplay" size={25} />
          <Icon name="anchor" size={25} />
          <Icon name="aperture" size={25} />
          <Icon name="arrow-left" size={25} />
          <Icon name="facebook" size={25} />
          <Icon name="navigation" size={25} />
          <Icon name="music" size={25} />
          <Icon name="meh" size={25} />
          <Icon name="menu" size={25} />
          <Icon name="mic" size={25} />
          <Icon name="map" size={25} />
          <Icon name="list" size={25} />
          <Icon name="facebook" size={25} />
          <Icon name="link" size={25} />
          <Icon name="github" size={25} />
          <Icon name="filter" size={25} />
          <Icon name="flag" size={25} />
          <Icon name="copy" size={25} />
          <Icon name="crosshair" size={25} />
          <Icon name="cpu" size={25} />
          <Icon name="crop" size={25} />
          <Icon name="box" size={25} />
          <Icon name="calendar" size={25} />
          <Icon name="airplay" size={25} />
          <Icon name="anchor" size={25} />
          <Icon name="aperture" size={25} />
          <Icon name="arrow-left" size={25} />
          <Icon name="facebook" size={25} />
          <Icon name="navigation" size={25} />
          <Icon name="music" size={25} />
          <Icon name="meh" size={25} />
          <Icon name="menu" size={25} />
          <Icon name="mic" size={25} />
          <Icon name="map" size={25} />
          <Icon name="list" size={25} />
          <Icon name="facebook" size={25} />
          <Icon name="link" size={25} />
          <Icon name="github" size={25} />
          <Icon name="filter" size={25} />
          <Icon name="flag" size={25} />
          <Icon name="copy" size={25} />
          <Icon name="crosshair" size={25} />
          <Icon name="cpu" size={25} />
          <Icon name="crop" size={25} />
          <Icon name="box" size={25} />
          <Icon name="calendar" size={25} />
          <Icon name="airplay" size={25} />
          <Icon name="anchor" size={25} />
          <Icon name="aperture" size={25} />
          <Icon name="arrow-left" size={25} />
          <Icon name="facebook" size={25} />
          <Icon name="navigation" size={25} />
          <Icon name="music" size={25} />
          <Icon name="meh" size={25} />
          <Icon name="menu" size={25} />
          <Icon name="mic" size={25} />
          <Icon name="map" size={25} />
          <Icon name="list" size={25} />
          <Icon name="facebook" size={25} />
          <Icon name="link" size={25} />
          <Icon name="github" size={25} />
          <Icon name="filter" size={25} />
          <Icon name="flag" size={25} />
          <Icon name="copy" size={25} />
          <Icon name="crosshair" size={25} />
          <Icon name="cpu" size={25} />
          <Icon name="crop" size={25} />
          <Icon name="box" size={25} />
          <Icon name="calendar" size={25} />
          <Icon name="airplay" size={25} />
          <Icon name="anchor" size={25} />
          <Icon name="aperture" size={25} />
          <Icon name="arrow-left" size={25} />
          <Icon name="facebook" size={25} />
          <Icon name="navigation" size={25} />
          <Icon name="music" size={25} />
          <Icon name="meh" size={25} />
          <Icon name="menu" size={25} />
          <Icon name="mic" size={25} />
          <Icon name="map" size={25} />
          <Icon name="list" size={25} />
          <Icon name="facebook" size={25} />
          <Icon name="link" size={25} />
          <Icon name="github" size={25} />
          <Icon name="filter" size={25} />
          <Icon name="flag" size={25} />
          <Icon name="copy" size={25} />
          <Icon name="crosshair" size={25} />
          <Icon name="cpu" size={25} />
          <Icon name="crop" size={25} />
          <Icon name="box" size={25} />
          <Icon name="calendar" size={25} />
          <Icon name="airplay" size={25} />
          <Icon name="anchor" size={25} />
          <Icon name="aperture" size={25} />
          <Icon name="arrow-left" size={25} />
          <Icon name="facebook" size={25} />
          <Icon name="navigation" size={25} />
          <Icon name="music" size={25} />
          <Icon name="meh" size={25} />
          <Icon name="menu" size={25} />
          <Icon name="mic" size={25} />
          <Icon name="map" size={25} />
          <Icon name="list" size={25} />
          <Icon name="facebook" size={25} />
          <Icon name="link" size={25} />
          <Icon name="github" size={25} />
          <Icon name="filter" size={25} />
          <Icon name="flag" size={25} />
          <Icon name="copy" size={25} />
          <Icon name="crosshair" size={25} />
          <Icon name="cpu" size={25} />
          <Icon name="crop" size={25} />
          <Icon name="box" size={25} />
          <Icon name="calendar" size={25} />
          {/* fff */}
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="bacteria" color={color} size={50} />
          <MaterialCommunityIcons
            name="axis-y-rotate-clockwise"
            color={color}
            size={50}
          />
          <MaterialCommunityIcons
            name="bacteria-outline"
            color={color}
            size={50}
          />
          <MaterialCommunityIcons name="basket-plus" color={color} size={50} />
          <MaterialCommunityIcons name="bed-outline" color={color} size={50} />
          <MaterialCommunityIcons
            name="book-minus-multiple"
            color={color}
            size={50}
          />
          <MaterialCommunityIcons
            name="bottle-soda-outline"
            color={color}
            size={50}
          />
          <MaterialCommunityIcons
            name="calculator-variant"
            color={color}
            size={50}
          />
          <MaterialCommunityIcons
            name="car-arrow-right"
            color={color}
            size={50}
          />
          <MaterialCommunityIcons name="cart-plus" color={color} size={50} />
          <MaterialCommunityIcons
            name="cellphone-arrow-down"
            color={color}
            size={50}
          />
          <MaterialCommunityIcons name="menu" color={color} size={50} />
          <MaterialCommunityIcons name="micro-sd" color={color} size={50} />
          <MaterialCommunityIcons name="moon-full" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="near-me" color={color} size={50} />
          <MaterialCommunityIcons
            name="numeric-4-box-outline"
            color={color}
            size={50}
          />
          <MaterialCommunityIcons name="numeric-1" color={color} size={50} />
          <MaterialCommunityIcons name="numeric-2" color={color} size={50} />
          <MaterialCommunityIcons name="numeric-3" color={color} size={50} />
          <MaterialCommunityIcons name="numeric-4" color={color} size={50} />
          <MaterialCommunityIcons name="numeric-5" color={color} size={50} />
          <MaterialCommunityIcons name="numeric-6" color={color} size={50} />
          <MaterialCommunityIcons name="numeric-7" color={color} size={50} />
          <MaterialCommunityIcons name="numeric-8" color={color} size={50} />
          <MaterialCommunityIcons name="numeric-9" color={color} size={50} />
          <MaterialCommunityIcons name="power-sleep" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <MaterialCommunityIcons name="home" color={color} size={50} />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>

              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
