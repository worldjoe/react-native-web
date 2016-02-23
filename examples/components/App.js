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
    const fuego_input = {
      ...(styles.fuego_input)
    }
    const input_generic = {
      ...(styles.input_generic)
    }
    const form_control = {
      ...(styles.form_control)
    }
    const fuego_title = {
      ...(styles.fuego_title)
    }
    const fuego_title_text = {
      ...(styles.fuego_title_text)
    }
    const fuego_text = {
      ...(styles.fuego_text)
    }
    const fuego_label = {
      ...(styles.fuego_label)
    }
    const rootStyles = {
      ...(styles.root.common),
      ...(mediaQuery.small.matches && styles.root.mqSmall),
      ...(mediaQuery.large.matches && styles.root.mqLarge)
    };

    return (
      <View accessibilityRole='main' style={styles.container}>

        <Text size='xlarge' style={{
        ...fuego_title,
        ...fuego_title_text
        }}>Mock with test assets</Text>

        <View  style={fuego_text}>
          <Text>This is a mock in React Native Web which contains all the assets we want to test cross browser</Text>
        </View>

        <View>

          <View>
            <Text style={{
            ...fuego_text,
            marginBottom: '10px'
            }}>I am a multiinput's label</Text>
          </View>

          <View>
            <Text style = {styles.fuego_note}>I am a note on a multiinput</Text>
          </View>

          <View>
            <View style={override}>
              <Text style={fuego_label}>Field Label</Text>
              <TextInput style={{
              ...override,
              ...fuego_input,
              ...input_generic,
              ...form_control}}/>
            </View>

            <View style={override}>
              <Text style={fuego_label}>Another Field Label</Text>
              <TextInput style={{
              ...override,
              ...fuego_input,
              ...input_generic,
              ...form_control}}/>
            </View>
          </View>

        <Text>Here's a footer to show spacing</Text>
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
    alignItems: 'left',
    flexGrow: 1,
    justifyContent: 'left',
    borderWidth: 0,
    backgroundColor: '#ffffff'
  },
  container: {
    alignItems: 'left',
    flexGrow: 1,
    justifyContent: 'left',
    borderWidth: 0,
    backgroundColor: '#ffffff',
    width: '1756px',
    height: '845px'
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
  fuego_input: {
    position: 'relative',
    marginBottom: '30px'
  },
  input_generic: {
    height: 'auto',
    padding: '0',
    paddingBottom: '10px',
    borderWidth: '0',
    borderBottomWidth: '1px',
    marginBottom: '1px',
    backgroundColor: '#333333',
    fontSize: '1.6rem',
    lineHeight: '2.0rem',
    fontWeight: '200',
    fontStyle: 'normal',
    fontFamily: "Avenir light, Avenir"
  },
  form_control: {
    display: 'block',
    width: '100%',
    height: '34px',
    backgroundColor: '#ffffff',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#cccccc',
    borderRadius: '4px',
    fontSize: '14px',
    lineHeight: '1.428571429',
  },
  fuego_title: {
    display: 'block',
    marginLeft: '-15px',
    marginRight: '-15px',
    textAlign: 'left'
  },
  fuego_title_text: {
    marginBottom: '30px',
    paddingLeft: '15px',
    paddingRight: '15px',
    color: '#0082C3',
    fontFamily: 'Avenir Light, Avenir',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: '200px',
    lineHeight: '36px',
    position: 'relative',
    textAlign: 'left'
  },
  fuego_text: {
    paddingRight: '15px',
    marginBottom: '20px',
    position: 'relative'
  },
  fuego_note: {
    display: 'inline',
    fontFamily: 'Avenir roman, Avenir, Helvetica, Arial',
    fontSize: '14px',
    fontStyle: 'italic',
    lineHeight: '18px'
  },
  fuego_label: {
    display: 'inline',
    fontFamily: 'Avenir light, Avenir, Helvetica, Arial',
    fontSize: '14px',
    lineHeight: '18px'
  }
})
