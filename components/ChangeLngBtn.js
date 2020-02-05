import React, {PureComponent} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';

class ChangeLanguageBtn extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  navChangeLanguage = () => {
    const {navigation} = this.props;
    navigation.navigate('Settings');
  };

  render() {
    const {name} = this.props;
    return (
      <View>
        <Icon.Button
          name={name}
          onPress={this.navChangeLanguage}
          background="blue"
        />
      </View>
    );
  }
}

export default withNavigation(ChangeLanguageBtn);
