import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function AboutUs() {
    const dkteInfo = {
        name: 'DKTE Society’s Textile and Engineering Institute',
        location: 'Ichalkaranji, Maharashtra',
        year: '1982',

        introduction:
            'DKTE Society’s Textile and Engineering Institute is an autonomous technical institute established in 1982. It offers undergraduate and postgraduate programs in engineering and technology and focuses on technical education, practical learning, and professional development.',

        highlights: [
            'Autonomous engineering institute',
            'Strong focus on technical education',
            'Practical and industry-oriented learning',
            'Encouragement for innovation and research',
            'Student development through extracurricular activities',
        ],

        courses: [
            'Computer Science and Engineering',
            'Artificial Intelligence and Machine Learning',
            'Mechanical Engineering',
            'Civil Engineering',
            'Electronics and Telecommunication',
            'Information Technology',
            'Textile Engineering',
        ],

        activities: [
            'Technical workshops',
            'Project exhibitions',
            'Coding competitions',
            'Sports and cultural activities',
            'Industrial visits',
            'Research activities',
        ],
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* Top Section */}
                <View style={styles.topSection}>
                    <Text style={styles.collegeCode}>DKTE</Text>

                    <Text style={styles.collegeName}>
                        {dkteInfo.name}
                    </Text>

                    <View style={styles.locationBox}>
                        <Text style={styles.locationText}>
                            📍 {dkteInfo.location}
                        </Text>
                    </View>
                </View>

                {/* Basic Information */}
                <View style={styles.infoBox}>
                    <Text style={styles.sectionTitle}>Institute Information</Text>

                    <View style={styles.row}>
                        <Text style={styles.rowTitle}>Established</Text>
                        <Text style={styles.rowValue}>{dkteInfo.year}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.rowTitle}>Type</Text>
                        <Text style={styles.rowValue}>Autonomous Institute</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.rowTitle}>Location</Text>
                        <Text style={styles.rowValue}>{dkteInfo.location}</Text>
                    </View>
                </View>

                {/* Introduction */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About the Institute</Text>

                    <Text style={styles.description}>
                        {dkteInfo.introduction}
                    </Text>
                </View>

                {/* Highlights */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Key Highlights</Text>

                    <FlatList
                        data={dkteInfo.highlights}
                        scrollEnabled={false}
                        renderItem={({ item, index }) => (
                            <View style={styles.highlightItem}>
                                <View style={styles.numberCircle}>
                                    <Text style={styles.numberText}>
                                        {index + 1}
                                    </Text>
                                </View>

                                <Text style={styles.itemText}>
                                    {item}
                                </Text>
                            </View>
                        )}
                    />
                </View>

                {/* Courses */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Engineering Programs</Text>

                    <FlatList
                        data={dkteInfo.courses}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <View style={styles.courseItem}>
                                <Text style={styles.courseIcon}>▸</Text>

                                <Text style={styles.itemText}>
                                    {item}
                                </Text>
                            </View>
                        )}
                    />
                </View>

                {/* Bottom */}
                <View style={styles.bottom}>
                    <Text style={styles.bottomTitle}>DKTE</Text>

                    <Text style={styles.bottomText}>
                        Education • Innovation • Technology
                    </Text>

                    <Text style={styles.bottomLocation}>
                        {dkteInfo.location}
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef2ff',
    },

    content: {
        padding: 15,
    },

    topSection: {
        backgroundColor: '#4338ca',
        padding: 25,
        borderRadius: 20,
        marginBottom: 15,
    },

    collegeCode: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
    },

    collegeName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
        lineHeight: 26,
    },

    locationBox: {
        marginTop: 18,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
    },

    locationText: {
        color: '#4338ca',
        fontWeight: '600',
    },

    infoBox: {
        backgroundColor: '#ffffff',
        padding: 18,
        borderRadius: 15,
        marginBottom: 15,
    },

    section: {
        backgroundColor: '#ffffff',
        padding: 18,
        borderRadius: 15,
        marginBottom: 15,
    },

    sectionTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#312e81',
        marginBottom: 15,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 11,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
    },

    rowTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#555555',
    },

    rowValue: {
        fontSize: 15,
        color: '#333333',
    },

    description: {
        fontSize: 16,
        color: '#555555',
        lineHeight: 25,
        textAlign: 'justify',
    },

    highlightItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 13,
    },

    numberCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#4338ca',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },

    numberText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },

    itemText: {
        flex: 1,
        fontSize: 15,
        color: '#444444',
        lineHeight: 22,
    },

    courseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f3ff',
        padding: 12,
        borderRadius: 10,
        marginBottom: 9,
    },

    courseIcon: {
        fontSize: 20,
        color: '#4338ca',
        marginRight: 10,
    },

    activityBox: {
        flex: 1,
        backgroundColor: '#eef2ff',
        padding: 15,
        margin: 5,
        borderRadius: 10,
        minHeight: 70,
        justifyContent: 'center',
    },

    activityText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
        color: '#3730a3',
    },

    bottom: {
        backgroundColor: '#312e81',
        padding: 22,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
    },

    bottomTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    bottomText: {
        color: '#ffffff',
        marginTop: 6,
        fontSize: 14,
    },

    bottomLocation: {
        color: '#c7d2fe',
        marginTop: 5,
        fontSize: 13,
    },
});

export default AboutUs;