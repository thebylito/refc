module.exports = {
  content: ({ className }) => {
    return `import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class ${className} extends React.Component {
  state = { className: '${className}' };

  componentDidMount() {}

  render() {
    const { className } = this.state;
    return (
      <View style={styles.container}>
        <Text>{className}</Text>
      </View>
    );
  }
}

${className}.navigationOptions = {
  title: '${className}',
};

export default ${className};
`;
  },
};
