module.exports = {
  content: ({ className }) => {
    return `import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class ${className}Screen extends React.Component {
  state = { screenName: '${className}' };

  componentDidMount() {}

  render() {
    const { screenName } = this.state;
    return (
      <View style={styles.container}>
        <Text>{ screenName }</Text>
      </View>
    );
  }
}

${className}Screen.navigationOptions = {
  title: '${className}',
};

export default ${className}Screen;
`;
  },
};
