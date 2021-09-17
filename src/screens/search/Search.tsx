import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  ListRenderItemInfo,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';

import { LocationType } from '../../assets/types';
import { locationTypeMock_Jerusalem, locationTypeMock_TelAviv } from '../../service/mocks';
import { Colors, Dimens } from '../../styles';
import { setCurrentLocation } from '../../stores/locations/actions';
import { getFavoritesSelector } from '../../stores/locations/selectors';
import { useSetFavorite } from '../../hooks/useSetFavorite';
import Icon, { IconFamily } from '../../components/Icon';

const MIN_QUERY_LENGTH = 1;
const INPUT_PLACEHOLDER = 'Search Location';
const EMPTY_STATE_ENTER_SEARCH_TEXT = 'Enter a location name';
const EMPTY_STATE_NO_RESULTS_FOUND_TEXT = 'No results found.';

type EnrichedSearchLocationItem = LocationType & {
  onPress: () => void;
  onToggleFavoritePress: () => void;
  isFavorite: boolean;
};

const renderSuggestionItem = ({ item }: ListRenderItemInfo<EnrichedSearchLocationItem>) => {
  return (
    <View style={styles.suggestionItem} key={item.Key}>
      <TouchableOpacity onPress={item.onPress} style={styles.suggestionLeftClickable}>
        <Text style={styles.listItemTitle}>{item.LocalizedName}</Text>
        <Text style={styles.listItemSubtitle}>{item.Country.LocalizedName}</Text>
      </TouchableOpacity>
      {item.isFavorite ? (
        <Icon iconFamily={IconFamily.MATERIAL_COMMUNITY} name="heart-minus-outline" size={20} color={Colors.red_heart} onPress={item.onToggleFavoritePress} />
      ) : (
        <Icon iconFamily={IconFamily.MATERIAL_COMMUNITY} name="heart-plus-outline" size={20} color={Colors.gray} onPress={item.onToggleFavoritePress} />
      )}
    </View>
  );
};

const renderEmptyState = (query: string, fetching: boolean) => {
  return !fetching ? (
    <View style={styles.emptyStateContainer}>
      <Text style={styles.emptyStateText}>{query.length > 0 && !fetching ? EMPTY_STATE_NO_RESULTS_FOUND_TEXT : EMPTY_STATE_ENTER_SEARCH_TEXT}</Text>
    </View>
  ) : null;
};

const renderItemSeparator = () => <View style={styles.itemSeparatorComponent} />;

const renderSuggestions = (suggestions: EnrichedSearchLocationItem[], query: string, fetching: boolean) => {
  return suggestions.length > 0 ? (
    <View style={styles.listContainer}>
      <FlatList contentContainerStyle={styles.listContentContainerStyle} data={suggestions} renderItem={renderSuggestionItem} ItemSeparatorComponent={renderItemSeparator} />
    </View>
  ) : (
    renderEmptyState(query, fetching)
  );
};

const Search = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const favoritesList = useSelector(getFavoritesSelector);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchSuggestions, setSearchSuggestions] = useState<LocationType[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);

  const { removeFavorite, addFavorite } = useSetFavorite();

  const handleFetchSuggestions = useCallback(async (query: string) => {
    if (query.length < MIN_QUERY_LENGTH) {
      setSearchSuggestions([]);
    } else {
      setSearchSuggestions([
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
        locationTypeMock_TelAviv,
        locationTypeMock_Jerusalem,
      ]);
      // const suggestions = await getAutocompleteSearch(query);
      // if (suggestions && Array.isArray(suggestions) && suggestions.length) {
      //   setSearchSuggestions(suggestions.slice(0, 5));
      // } else {
      //   setSearchSuggestions([]);
      // }
    }
    setFetching(false);
  }, []);

  const debouncedHandleFetchSuggestions = useCallback(_.debounce(handleFetchSuggestions, 500), [handleFetchSuggestions]);

  const onChangeText = useCallback(
    (text: string) => {
      setSearchQuery(text);
      setFetching(true);

      debouncedHandleFetchSuggestions(text);
    },
    [debouncedHandleFetchSuggestions],
  );

  const onEndEditing = () => {
    console.log('onEndEditing');
  };

  const onSubmitEditing = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    console.log('onSubmitEditing', e.nativeEvent.text);
  };

  const onLocationItemPress = (item: LocationType) => {
    dispatch(setCurrentLocation(item));
    navigation.goBack();
  };

  const enrichedSearchLocationItemList: EnrichedSearchLocationItem[] = searchSuggestions.map(item => {
    const isFavorite = !!favoritesList.find(f => f.Key === item.Key);
    const onPress = () => onLocationItemPress(item);
    const onToggleFavoritePress = () => {
      console.log('isFavorite', isFavorite);
      isFavorite ? removeFavorite(item.Key) : addFavorite(item);
    };
    return { ...item, onPress, isFavorite, onToggleFavoritePress };
  });

  const clearInput = () => {
    setSearchSuggestions([]);
    setSearchQuery('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View>
          <TouchableWithoutFeedback onPress={navigation.goBack}>
            <Icon iconFamily={IconFamily.FEATHER} name="chevron-left" size={24} color={Colors.black} />
          </TouchableWithoutFeedback>
        </View>

        <TextInput
          placeholder={INPUT_PLACEHOLDER}
          value={searchQuery}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          onSubmitEditing={onSubmitEditing}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholderTextColor={Colors.gray}
        />

        <View>
          {searchQuery.length > 0 && (
            <TouchableWithoutFeedback onPress={clearInput}>
              <Icon iconFamily={IconFamily.FEATHER} name="x" size={24} color={Colors.black} />
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>

      {renderSuggestions(enrichedSearchLocationItemList, searchQuery, fetching)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 150,
  },
  listContainer: {
    borderRadius: Dimens.cardBorderRadius,
    backgroundColor: Colors.white,
  },
  listContentContainerStyle: {
    paddingHorizontal: Dimens.space16,
  },
  suggestionItem: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: Dimens.space8,

    alignItems: 'center',
  },
  suggestionLeftClickable: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightGray,
    borderRadius: Dimens.cardBorderRadius,
    paddingHorizontal: Dimens.space16,
    marginVertical: Dimens.space8,
  },
  inputStyle: {
    flexGrow: 1,
    flexShrink: 1,
    color: Colors.black,
    fontSize: 18,
  },
  listItemTitle: {
    color: Colors.black,
  },
  listItemSubtitle: {
    color: Colors.gray,
  },
  itemSeparatorComponent: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  },
  emptyStateContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimens.space64,
  },
  emptyStateText: {
    color: Colors.gray,
    fontSize: 20,
  },
});

export default Search;
