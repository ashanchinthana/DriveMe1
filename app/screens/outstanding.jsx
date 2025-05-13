import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { fineService, authService } from '../services/api';

export default function OutstandingFines() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkForFines = async () => {
            try {
                setLoading(true);
                
                // Check if the user is logged in
                const userData = await authService.getCurrentUser();
                if (!userData || !userData.data) {
                    throw new Error('User not authenticated');
                }
                
                // Navigate directly to the fines screen, skipping the search step
                router.replace('/screens/outstanding1');
            } catch (error) {
                console.error('Error checking fines:', error);
                setError(error.message || 'Failed to load your fine information');
                setLoading(false);
            }
        };
        
        checkForFines();
    }, [router]);

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.halfCircle}>
                    <Image 
                        source={require('../../assets/images/z.png')} //DRIVE ME LOGO
                        style={styles.image}
                    />
                </View>
                
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0A66C2" />
                    <Text style={styles.loadingText}>Loading your fines...</Text>
                </View>
                
                {/* Back Button */}
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => router.back()}
                >
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                
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
                    <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/screens/home')}>
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
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.halfCircle}>
                    <Image 
                        source={require('../../assets/images/z.png')} //DRIVE ME LOGO
                        style={styles.image}
                    />
                </View>
                
                <View style={styles.errorContainer}>
                    <MaterialIcons name="error" size={50} color="red" />
                    <Text style={styles.errorText}>{error}</Text>
                    <TouchableOpacity 
                        style={styles.retryButton}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.retryButtonText}>Go Back</Text>
                    </TouchableOpacity>
                </View>
                
                {/* Back Button */}
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => router.back()}
                >
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>

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
                    <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/screens/home')}>
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
            </SafeAreaView>
        );
    }
    
    // Default return, should rarely be seen as we navigate away
    return null;
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
    image: {
        width: 250, // Adjust width as needed
        height: 250, // Adjust height as needed
        resizeMode: 'contain', // Ensures the image maintains aspect ratio
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
        shadowRadius: 4,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 20,
        fontSize: 16,
        color: '#0A66C2',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        marginTop: 20,
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
    },
    retryButton: {
        backgroundColor: '#0A66C2',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
    },
    retryButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
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