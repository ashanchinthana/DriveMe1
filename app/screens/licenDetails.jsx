import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function LicenseDetails() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Half-Circle Header with Logo */}
            <View style={styles.halfCircle}>
                <Text style={styles.logoText}>
                    <Text style={{ color: '#0A66C2', fontSize: 40 }}>D</Text>uthaya
                </Text>
            </View>

            {/* Title */}
            <Text style={styles.title}>Licen Details</Text>

            {/* License Information */}
            <View style={styles.infoCard}>
                <Text style={styles.infoText}><Text style={styles.bold}>Name:</Text> K A Kankanige</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>License Number:</Text> B268956</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>NIC Number:</Text> 200265411633</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Address:</Text> No 47, Pitipana, Homagama</Text>
            </View>

            {/* Status and Violations */}
            <View style={styles.statusContainer}>
                <View style={styles.statusCard}>
                    <Text style={styles.statusTitle}>Licen Status</Text>
                    <Text style={styles.activeStatus}>Active</Text>
                </View>

                <View style={styles.statusCard}>
                    <Text style={styles.statusTitle}>Totala Violation</Text>
                    <Text style={styles.violationNumber}>5</Text>
                </View>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/Profile')}>
                    <FontAwesome5 name="user" size={24} color="black" />
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/Notifications')}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <Text style={styles.navText}>Notifications</Text>
                </TouchableOpacity>

                {/* Home Button */}
                <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/screens/Home')}>
                    <Ionicons name="home" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/Settings')}>
                    <Ionicons name="settings-outline" size={24} color="black" />
                    <Text style={styles.navText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/HelpSupport')}>
                    <MaterialIcons name="support-agent" size={24} color="black" />
                    <Text style={styles.navText}>Help/Support</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 80, // Space for bottom nav
    },
    halfCircle: {
        width: '100%',
        height: 250, 
        backgroundColor: '#D3D3D3', 
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0
    },
    logoText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#333',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 14,
        marginBottom: 20,
    },
    infoCard: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 10,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        marginVertical: 3,
    },
    bold: {
        fontWeight: 'bold',
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    statusCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        width: '45%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    statusTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    activeStatus: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
    },
    violationNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'red',
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        marginTop: 3,
        color: '#333',
    },
    homeButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#0A66C2',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30, // Lift it up
    },
});
