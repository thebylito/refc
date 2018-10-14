module.exports = {
  content: ({ className }) => {
    const classNameToLower = className.toLowerCase();

    return `import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ${className}Creators } from '../../store/ducks/${classNameToLower}';

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

const mapDispatchToProps = dispatch => bindActionCreators(${className}Creators, dispatch);

const mapStateToProps = ({ ${classNameToLower} }) => {
  const { data : data${className} } = ${classNameToLower};
  return { data${className} };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(${className}Screen);
`;
  },
};
