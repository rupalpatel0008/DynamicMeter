import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {Strings} from '../../constants';
import styles from './WeekDayStyles';

export function useSelectedWeekDays() {
  const [selectedWeekDays, setSelectedWeekDays] = useState(Strings.weekDays);
  const updateSelectedDays = day => {
    const newWeekDays = selectedWeekDays.map(item => {
      if (item.id === day.id) {
        item.isSelected = !item.isSelected;
      }
      return item;
    });
    setSelectedWeekDays(newWeekDays);
  };
  return {selectedWeekDays, updateSelectedDays};
}

const Day = ({item, updateSelectedDays}) => {
  return (
    <TouchableOpacity
      style={[styles.day, item.isSelected && styles.selectedDay]}
      onPress={() => updateSelectedDays(item)}>
      <Text style={[styles.dayText, item.isSelected && styles.selectedDayText]}>
        {item.showText}
      </Text>
    </TouchableOpacity>
  );
};

const WeekDays = () => {
  const {selectedWeekDays, updateSelectedDays} = useSelectedWeekDays();
  return (
    <>
      <Text style={styles.label}>{Strings.peakPriceDays}</Text>
      <FlatList
        horizontal
        data={selectedWeekDays}
        contentContainerStyle={styles.container}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Day item={item} updateSelectedDays={updateSelectedDays} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </>
  );
};

export default WeekDays;
