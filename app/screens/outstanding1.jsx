import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { fineService } from "../services/api";

export default function OutstandingFines() {
    const router = useRouter();
    const [fines, setFines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Fetch outstanding fines when component mounts
        const fetchFines = async () => {
            try {
                setLoading(true);
                const response = await fineService.getOutstandingFines();
                if (response && response.data) {
                    setFines(response.data);
                    
                    // Calculate total fine amount
                    const totalAmount = response.data.reduce((acc, fine) => acc + fine.amount, 0);
                    setTotal(totalAmount);
                }
            } catch (error) {
                console.error("Error fetching outstanding fines:", error);
                setError("Failed to load fines. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchFines();
    }, []);

    // Format currency
    const formatCurrency = (amount) => {
        return amount.toFixed(2);
    };

    return (
        <View style={styles.container}>
            {/* Header with Logo */}
            <View style={styles.halfCircle}>
                {/* Back Button */}
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => router.back()}
                >
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                
                <Image 
                    source={require('../../assets/images/z.png')} //DRIVE ME LOGO
                    style={styles.image}
                />
            </View>

            {/* Outstanding Fines Section */}
            <Text style={styles.title}>Outstanding Fines</Text>

            {/* Loading Indicator */}
            {loading ? (
                <ActivityIndicator size="large" color="#0A66C2" style={styles.loader} />
            ) : error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : fines.length === 0 ? (
                <Text style={styles.noFinesText}>You don't have any outstanding fines</Text>
            ) : (
                <ScrollView style={styles.scrollContainer}>
                    {/* Fine Details Table */}
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableHeader, { flex: 1 }]}>Description</Text>
                            <Text style={[styles.tableHeader, { flex: 1 }]}>Location</Text>
                            <Text style={[styles.tableHeader, { flex: 1 }]}>Amount (RS)</Text>
                        </View>

                        {fines.map((fine, index) => (
                            <View key={index} style={styles.tableRow}>
                                <Text style={[styles.tableData, { flex: 1 }]}>{fine.description}</Text>
                                <Text style={[styles.tableData, { flex: 1 }]}>{fine.location}</Text>
                                <Text style={[styles.tableData, { flex: 1 }]}>{formatCurrency(fine.amount)}</Text>
                            </View>
                        ))}

                        <View style={[styles.tableRow, styles.totalRow]}>
                            <Text style={[styles.totalText, { flex: 2 }]}>TOTAL</Text>
                            <Text style={[styles.totalAmount, { flex: 1 }]}>{formatCurrency(total)}</Text>
                        </View>
                    </View>
                </ScrollView>
            )}

            {/* Pay Button - Only show if there are fines */}
            {!loading && !error && fines.length > 0 && (
                <TouchableOpacity 
                    style={styles.payButton} 
                    onPress={() => router.push('/screens/outstanding2')}
                >
                    <Text style={styles.payButtonText}>Pay</Text>
                </TouchableOpacity>
            )}

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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        paddingTop: 50,
    },
    halfCircle: {
        width: "100%",
        height: 250,
        backgroundColor: "#D3D3D3",
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
    },
    logoText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#333",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 250,
        marginBottom: 20,
    },
    image: {
        width: 250, // Adjust width as needed
        height: 250, // Adjust height as needed
        resizeMode: 'contain', // Ensures the image maintains aspect ratio
    },
    scrollContainer: {
        width: "100%",
        maxHeight: "50%",
    },
    table: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        alignSelf: 'center',
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
    },
    tableHeader: {
        fontSize: 16,
        fontWeight: "bold",
    },
    tableData: {
        fontSize: 16,
    },
    totalRow: {
        borderBottomWidth: 0,
        marginTop: 8,
    },
    totalText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        textAlign: 'right',
    },
    payButton: {
        backgroundColor: "#0A66C2",
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginTop: 20,
    },
    payButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    bottomNav: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: "#ccc",
    },
    navItem: {
        alignItems: "center",
    },
    navText: {
        fontSize: 12,
        marginTop: 3,
        color: "#333",
    },
    homeButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#0A66C2",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -30,
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
    loader: {
        marginTop: 50,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 50,
        marginHorizontal: 20,
    },
    noFinesText: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 50,
        color: '#0A66C2',
    }
});

