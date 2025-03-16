import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            {/* Half-Circle Header with Logo */}
            <View style={styles.halfCircle}>
                {/* Back Button */}
                                <TouchableOpacity 
                                    style={styles.backButton} 
                                    onPress={() => router.back()}
                                >
                                    <Ionicons name="arrow-back" size={24} color="#333" />
                                </TouchableOpacity>
                <Text style={styles.logoText}>
                    <Text style={{ color: '#0A66C2', fontSize: 40 }}>D</Text>uthaya
                </Text>
            </View>

            {/* Main Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.mainButton} onPress={()=> router.push('/screens/offenceDetails')}>
                    <Text style={styles.buttonText}>Offence Details</Text>
                </TouchableOpacity>
                

                

                <TouchableOpacity style={styles.mainButton}onPress={()=> router.push('/screens/contactLawyer')}>
                    <Text style={styles.buttonText}>Contact lawyer</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <FontAwesome5 name="user" size={24} color="black" />
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <Text style={styles.navText}>Notifications</Text>
                </TouchableOpacity>

                {/* Home Button */}
                <TouchableOpacity style={styles.homeButton}>
                    <Ionicons name="home" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="settings-outline" size={24} color="black" />
                    <Text style={styles.navText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
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
        top: 0,
    },
    logoText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#333',
    },
    buttonContainer: {
        marginTop: 400,
        width: '100%',
        alignItems: 'center',
        
    },
    mainButton: {
        width: '80%',
        backgroundColor: '#D3D3D3',
        paddingVertical: 50,
        borderRadius: 12,
        marginBottom: 80,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
        elevation: 3,
    },
    buttonText: {
        fontSize: 25,
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
        shadowColor: '#0A66C2',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
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
