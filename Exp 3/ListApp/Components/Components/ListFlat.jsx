import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ListFlat() {

    const fruits = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Mango' },
        { id: 4, name: 'Orange' },
        { id: 5, name: 'Grapes' },
        { id: 6, name: 'Watermelon' },
        { id: 7, name: 'Guava' },
        { id: 8, name: 'Strawberry' },
        { id: 9, name: 'Papaya' },
        { id: 10, name: 'Kiwi' },
        { id: 11, name: 'Peach' },
        { id: 12, name: 'Pineapple' },
        { id: 13, name: 'Pomegranate' },
        { id: 14, name: 'Cherry' },
        { id: 15, name: 'Dragon Fruit' },
        { id: 16, name: 'Lychee' },
        { id: 17, name: 'Pear' },
        { id: 18, name: 'Plum' },
        { id: 19, name: 'Coconut' },
        { id: 20, name: 'Muskmelon' },
    ];

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.table}>

                <Text style={styles.title}>
                    Fruit List
                </Text>

                <View style={styles.headerRow}>
                    <Text style={styles.headerText}>No.</Text>
                    <Text style={styles.headerText}>Fruit Name</Text>
                </View>

                <FlatList
                    data={fruits}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.row}>

                            <Text style={styles.number}>
                                {item.id}
                            </Text>

                            <Text style={styles.fruit}>
                                {item.name}
                            </Text>

                        </View>
                    )}
                />

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },

    table: {
        borderWidth: 1,
        borderColor: '#999',
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#999',
    },

    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#999',
    },

    headerText: {
        width: '50%',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },

    row: {
        flexDirection: 'row',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#cccccc',
    },

    number: {
        width: '50%',
        textAlign: 'center',
        fontSize: 16,
    },

    fruit: {
        width: '50%',
        textAlign: 'center',
        fontSize: 16,
    },

});

export default ListFlat;