module.exports = {
  content: ({ className }) => {
    return `import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MyCreator } from '../../store/ducks/mycreator';

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

const mapDispatchToProps = dispatch => bindActionCreators(MyCreator, dispatch);

const mapStateToProps = ({ ehi }) => {
  const { ehisData } = ehi;
  return { ehisData };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(${className});
`;
  },
};
