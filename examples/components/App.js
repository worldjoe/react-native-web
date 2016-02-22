import GridView from './GridView'
import Heading from './Heading'
import MediaQueryWidget from './MediaQueryWidget'
import React, { Image, StyleSheet, ScrollView, Text, TextInput, Touchable, View } from '../../src'

export default class App extends React.Component {
  static propTypes = {
    mediaQuery: React.PropTypes.object,
    style: View.propTypes.style
  };

  constructor(...args) {
    super(...args)
    this.state = {
      scrollEnabled: true
    }
  }

  render() {
    const { mediaQuery } = this.props
    const override = {
      ...(styles.override)
    }
    const fuegoPrimaryViewport = {
      ...(styles.fuegoPrimaryViewport)
    }
    const rootStyles = {
      ...(styles.root.common),
      ...(mediaQuery.small.matches && styles.root.mqSmall),
      ...(mediaQuery.large.matches && styles.root.mqLarge)
    };

    return (
      <View accessibilityRole='main' style={rootStyles}>
        <Heading size='xlarge'>React Native for Web</Heading>
        <Text>React Native Web takes the core components from <Text
        accessibilityRole='link' href='https://facebook.github.io/react-native/'>React
        Native</Text> and brings them to the web. These components provide
        simple building blocks – touch handling, flexbox layout,
        scroll views – from which more complex components and apps can be
        constructed.</Text>

        <MediaQueryWidget mediaQuery={mediaQuery} />

        <Heading size='large'>Attempt at recreating full input from tto</Heading>

        <View style={fuegoPrimaryViewport}>
          <TextInput style={override}/>
        </View>

        <Heading size='large'>Touchable</Heading>
        <Touchable
          accessibilityLabel={'Touchable element'}
          activeHighlight='lightblue'
          activeOpacity={0.8}
          onLongPress={(e) => { console.log('Touchable.onLongPress', e) }}
          onPress={(e) => { console.log('Touchable.onPress', e) }}
          onPressIn={(e) => { console.log('Touchable.onPressIn', e) }}
          onPressOut={(e) => { console.log('Touchable.onPressOut', e) }}
        >
          <View style={styles.touchableArea}>
            <Text>Touchable area (press, long press)</Text>
          </View>
        </Touchable>

        <Heading size='large'>View</Heading>
        <Heading>Default layout</Heading>
        <View>
          {[ 1, 2, 3, 4, 5, 6 ].map((item, i) => {
            return (
              <View key={i} style={styles.box}>
                <Text>{item}</Text>
              </View>
            )
          })}
        </View>

        <Heading>Row layout</Heading>
        <View ergerg="ergerg" style={styles.row}>
          {[ 1, 2, 3, 4, 5, 6 ].map((item, i) => {
            return (
              <View key={i} style={styles.box}>
                <Text>{item}</Text>
              </View>
            )
          })}
        </View>

        <Heading>pointerEvents</Heading>
        <GridView alley='10px'>
          {['box-none', 'box-only', 'none'].map((value, i) => {
            return (
              <View
                accessibilityRole='link'
                children={value}
                href='https://google.com'
                key={i}
                pointerEvents={value}
                style={styles.pointerEventsBox}
              />
            )
          })}
        </GridView>

        <Heading size='large'>ScrollView</Heading>
        <label>
          <input
            checked={this.state.scrollEnabled}
            onChange={() => this.setState({
              scrollEnabled: !this.state.scrollEnabled
            })}
            type='checkbox'
          /> Enable scroll
        </label>

        <Heading>Default layout</Heading>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContentContainerStyle}
            onScroll={e => console.log('ScrollView.onScroll', e)}
            scrollEnabled={this.state.scrollEnabled}
            scrollEventThrottle={1} // 1 event per second
            style={styles.scrollViewStyle}
          >
            {Array.from({ length: 50 }).map((item, i) => (
              <View key={i} style={styles.box}>
                <Text>{i}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <Heading>Horizontal layout</Heading>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContentContainerStyle}
            horizontal
            onScroll={e => console.log('ScrollView.onScroll', e)}
            scrollEnabled={this.state.scrollEnabled}
            scrollEventThrottle={1} // 1 event per second
            style={styles.scrollViewStyle}
          >
            {Array.from({ length: 50 }).map((item, i) => (
              <View key={i} style={{...styles.box, ...styles.horizontalBox}}>
                <Text>{i}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    common: {
      marginVertical: 0,
      marginHorizontal: 'auto'
    },
    mqSmall: {
      maxWidth: '400px'
    },
    mqLarge: {
      maxWidth: '600px'
    }
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    borderWidth: 0
  },
  horizontalBox: {
    width: '50px'
  },
  boxFull: {
    width: '100%'
  },
  pointerEventsBox: {
    alignItems: 'center',
    borderWidth: '1px',
    flexGrow: 1,
    height: '100px',
    justifyContent: 'center'
  },
  touchableArea: {
    alignItems: 'center',
    borderWidth: 0,
    height: '200px',
    justifyContent: 'center'
  },
  scrollViewContainer: {
    height: '200px'
  },
  scrollViewStyle: {
    borderWidth: '1px'
  },
  scrollViewContentContainerStyle: {
    padding: '10px'
  },
  override: {
    borderWidth: 0
  },
  fuegoPrimaryViewport: {
    marginTop: 420
  }
})
