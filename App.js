import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import MenuBerita from './components/MenuBerita';
import MenuGame from './components/MenuGame';
import MenuHits from './components/MenuHits';
import MenuUtama from './components/MenuUtama';

const Header = () => {
  return (
    <Text>Halaman Header</Text>
  )
};

const Footer = () => {
  return (
    <Text>Footer @Niomic</Text>
  )
}

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="green" />
        <Header />
        <MenuUtama />
        <MenuGame />
        <MenuBerita />
        <MenuHits />
        <Footer />
      </View>
    )
  }
}
