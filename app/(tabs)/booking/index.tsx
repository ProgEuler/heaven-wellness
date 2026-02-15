import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useSearch } from '@/providers/search-context';
import { StyleSheet } from 'react-native';

export default function BookingScreen() {
  const { searchText } = useSearch();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant='heading' style={styles.title}>
          My Bookings
        </Text>

        {searchText ? (
          <View style={styles.searchResult}>
            <Text variant='title' style={styles.searchLabel}>
              Search Query:
            </Text>
            <Text variant='body'>{searchText}</Text>
          </View>
        ) : (
          <Text variant='caption' style={styles.emptyText}>
            Start typing in the search bar...
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 120,
  },
  content: {
    gap: 16,
  },
  title: {
    textAlign: 'center',
  },
  searchResult: {
    marginTop: 20,
  },
  searchLabel: {
    marginBottom: 8,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
