import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useSearch } from '@/providers/search-context';

export default function BookingScreen() {
  const { searchText } = useSearch();

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 24,
        paddingTop: 120, // Adjust for large title
      }}
    >
      <View style={{ gap: 16 }}>
        <Text
          variant='heading'
          style={{
            textAlign: 'center',
          }}
        >
          My Bookings
        </Text>

        {searchText ? (
          <View style={{ marginTop: 20 }}>
            <Text variant='title' style={{ marginBottom: 8 }}>
              Search Query:
            </Text>
            <Text variant='body'>{searchText}</Text>
          </View>
        ) : (
          <Text
            variant='caption'
            style={{ textAlign: 'center', marginTop: 20 }}
          >
            Start typing in the search bar...
          </Text>
        )}
      </View>
    </ScrollView>
  );
}
