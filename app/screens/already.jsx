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
                <Text style={styles.title}>Register</Text>
                <Text style={styles.subtitle}>Create your new account</Text>
            </View>

            {/* Back Button */}
            <TouchableOpacity 
                style={styles.backButton} 
                onPress={() => router.back()}
            >
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>

            {/* Input Fields */}
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#999"
                    onChangeText={(text) => setForm({ ...form, name: text })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="ID Number"
                    placeholderTextColor="#999"
                    onChangeText={(text) => setForm({ ...form, idNumber: text })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Phone number"
                    placeholderTextColor="#999"
                    onChangeText={(text) => setForm({ ...form, phone: text })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Dl number"
                    placeholderTextColor="#999"
                    onChangeText={(text) => setForm({ ...form, postalCode: text })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Dl expire date"
                    placeholderTextColor="#999"
                    onChangeText={(text) => setForm({ ...form, postalCode: text })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#999"
                    onChangeText={(text) => setForm({ ...form, email: text })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                    onChangeText={(text) => setForm({ ...form, password: text })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Confirm password"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                    onChangeText={(text) => setForm({ ...form, password: text })}
                />

                {/* Create Account Button */}
                <TouchableOpacity 
                    style={styles.createButton} 
                    onPress={() => router.push('/screens/signIn')}
                >
                    <Text style={styles.createButtonText}>Create Account</Text>
                </TouchableOpacity>

                {/* Already have an account */}
                <TouchableOpacity onPress={() => router.push('/screens/home')}>
                    
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
        top: 10,
        left: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 5
    },
    form: {
        width: '100%',
        marginTop: 250 // Adjusted to place form below the half-circle
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    createButton: {
        backgroundColor: '#0A0A50',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center'
    },
    createButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#666'
    },
    link: {
        color: '#FFA500',
        fontWeight: 'bold'
    }
});