import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import API from "../API";
import LinkStore from "../stores/LinkStore";

let _getAppState = () => {
  return { links: LinkStore.getAll() };
};


class MirrorComponent extends Component {

  constructor(props) {
    super(props);
    this.state = _getAppState();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    API.fetchLinks();
    LinkStore.on("change", this.onChange);
  }

  componentWillUnmount() {
    LinkStore.removeListener("change", this.onChange)
  }

  onChange() {
    this.setState(_getAppState());
  }

  render() {

    console.log('this.state', this.state);

    return (
      <ScrollView
        scrollEventThrottle={200}
        style={styles.scrollView, styles.horizontalScrollView}>
          <Text>
            yup
          </Text>
          <Image
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={{width: 375, height: 400}}
          />


      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
    paddingTop: 20,
  },
  horizontalScrollView: {
    height: 120,
    padding: 20,
  },
  mirror: {
    flex: 1,
    borderColor: '#222222',
  }
});

export default MirrorComponent;
