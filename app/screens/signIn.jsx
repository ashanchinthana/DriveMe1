import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SignUp() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        idNumber: '',
        phone: '',
        postalCode: '',
        email: '',
        password: ''
    });

    return (
        <View style={styles.container}>
            {/* Half-Circle Header */}
            <View style={styles.halfCircle}>
                {/* Back Button */}
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => router.push('/')}
                >
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Login to your account</Text>
            </View>

            {/* Input Fields */}
            <View style={styles.form}>
                {[ "ID Number", "Password"].map((placeholder, index) => (
                    <TextInput 
                        key={index}
                        style={styles.input}
                        placeholder={placeholder}
                        secureTextEntry={placeholder === "Password"}
                        onChangeText={(text) => setForm({ ...form, [placeholder.toLowerCase().replace(" ", "")]: text })}
                    />
                ))}

                {/* Create Account Button */}
                <TouchableOpacity 
                    style={styles.createButton}
                    onPress={() => router.push('/screens/home')}
                >
                    <Text style={styles.createButtonText}>Login Account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/screens/already')}>
                    <Text style={styles.footerText}>
                        <Text style={styles.text}>Don't have an account ? </Text>
                        <Text style={styles.link}>Creat new account </Text>
                    </Text>
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
        padding: 20
    },
    halfCircle: {
        width: '109%',
        height: 250, 
        backgroundColor: '#D3D3D3', 
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 5
    },
    form: {
        width: '100%',
        marginTop: 150 // Adjusted to place form below the half-circle
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#0A66C2'
    },
    createButton: {
        backgroundColor: '#0A0A50',
        padding: 20,
        borderRadius: 10,
        marginTop: 50,
        alignItems: 'center'
    },
    createButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#666'
    },
    link: {
        color: '#FFA500',
        fontWeight: 'bold'
    },
    text: {
        color: '#0A66C2',
        fontWeight: 'bold',
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