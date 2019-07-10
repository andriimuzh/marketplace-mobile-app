import React from 'react';
import { View, Text, FlatList } from 'react-native';
import T from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';
import { SearchInput, CloseButton, WideLink, Separator } from '../../components';
import s from './styles';
import { colors } from '../../styles';


function ChooseLocationScreen({
  handleChange, text, setLocation, onInputStateChange, prevLocations,
}) {
  return (
    <View style={s.container}>
      <SearchInput
        style={{ width: '100%', height: 56 }}
        onChange={handleChange}
        text={text}
        onFocus={() => onInputStateChange(true)}
        onBlur={() => onInputStateChange(false)}
        onSubmit={setLocation}
      >
        <EvilIcons name="location" size={30} color={colors.primary} />
      </SearchInput>
      <FlatList
        data={prevLocations}
        contentContainerStyle={s.list}
        ItemSeparatorComponent={Separator}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <WideLink styles={s.wideLink} onPress={() => setLocation(item)}>
            <Text style={s.listItem}>{item}</Text>
          </WideLink>
          )}
      />
    </View>
  );
}

ChooseLocationScreen.navigationOptions = () => ({
  title: 'Location',
  headerLeft:
  <CloseButton />,
});

ChooseLocationScreen.propTypes = {
  handleChange: T.func,
  setLocation: T.func,
  text: T.string,
  onInputStateChange: T.func,
  prevLocations: T.array,
};

const func = () => {};

ChooseLocationScreen.defaultProps = {
  handleChange: func,
  setLocation: func,
  onInputStateChange: func,
  text: '',
};

export default ChooseLocationScreen;
