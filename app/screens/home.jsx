import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image , } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Half-Circle Header with Logo */}
            {/* Back Button */}
                                            <TouchableOpacity 
                                                style={styles.backButton} 
                                                onPress={() => router.push('/screens/signIn')}
                                            >
                                                <Ionicons name="arrow-back" size={24} color="#333" />
                                            </TouchableOpacity>
            <View style={styles.halfCircle}>
                
                <Text style={styles.logoText}>
                    <Text style={{ color: '#0A66C2', fontSize: 40 }}>D</Text>uthaya
                  
                </Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/outstanding')}>
                    <Text style={styles.buttonText}>Outstanding Fines</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/licenDetails')}>
                    <Text style={styles.buttonText}>Licen Details</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/paymentHistory')}>
                    <Text style={styles.buttonText}>Payment History</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/profile')}>
                    <FontAwesome5 name="user" size={24} color="black" />
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/paymentHistory')}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <Text style={styles.navText}>Notifications</Text>
                </TouchableOpacity>

                {/* Home Button */}
                <TouchableOpacity style={styles.homeButton}>
                    <Ionicons name="home" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/Settings')}>
                    <Ionicons name="settings-outline" size={24} color="black" />
                    <Text style={styles.navText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/screens/helpAndSupport')}>
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
    buttonContainer: {
        marginTop: 150,
        width: '80%',
    },
    button: {
        backgroundColor: '#E0E0E0',
        padding: 35,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
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
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,}
        
});

