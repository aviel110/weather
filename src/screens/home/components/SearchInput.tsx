import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { LocationType } from '../../../assets/types';
import { getAutocompleteSearch } from '../../../service/weather';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchSuggestions, setSearchSuggestions] = useState<LocationType[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const minPrefLenToSuggest = 3;

  useEffect(() => {
    if (searchQuery.length >= minPrefLenToSuggest) {
      getSuggestions();
    }
  }, [searchQuery]);

  const getSuggestions = async () => {
    console.log('getSuggestions');
    const suggestions = await getAutocompleteSearch(searchQuery);
    if (suggestions && Array.isArray(suggestions) && suggestions.length) {
      setSearchSuggestions(suggestions.slice(0, 5));
      setModalVisible(true);
    }
  };

  const renderSuggestionItem = (item: LocationType, index: number) => {
    return (
      <View style={styles.suggestionItem} key={index}>
        <TouchableOpacity
          onPress={() => {
            // homeActions.setLocation(item);
            setSearchQuery('');
            setModalVisible(false);
          }}
          style={styles.suggestionLeftClickable}>
          <Text style={{ color: 'blue' }}>
            {item.LocalizedName}, {item.Country.LocalizedName}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <TextInput
        placeholder="Search Location"
        value={searchQuery}
        onChangeText={text => {
          if (text.length < minPrefLenToSuggest && modalVisible) {
            setModalVisible(false);
          }
          setSearchQuery(text);
        }}
        onEndEditing={() => {
          console.log('onEndEditing');
        }}
        onSubmitEditing={query => console.log('onSubmitEditing', query.nativeEvent.text)}
        autoCapitalize="none"
        autoCorrect={false}
        style={{ backgroundColor: 'gray', borderRadius: 12 }}
      />
      {modalVisible && (
        <View style={[styles.suggestionsList, { borderBottomColor: 'red' }]}>
          {searchSuggestions.length > 0 ? searchSuggestions.map((item, index) => renderSuggestionItem(item, index)) : <Text>No Suggestions Found...</Text>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  suggestionsList: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  suggestionItem: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    borderColor: 'pink',
    borderWidth: 1,
    backgroundColor: 'blue',
  },
  suggestionLeftClickable: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SearchInput;
