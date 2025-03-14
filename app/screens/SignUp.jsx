import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

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

            {/* Input Fields */}
            <View style={styles.form}>
                {["Name", "ID Number", "Phone", "Postal Code", "E-mail", "Password"].map((placeholder, index) => (
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
                    onPress={() => router.push('/screens/signIn')}
                >
                    <Text style={styles.createButtonText}>Create Account</Text>
                </TouchableOpacity>

                {/* Already have an account */}
                <TouchableOpacity onPress={() => router.push('/screens/signIn')}>
                    <Text style={styles.footerText}>
                        <Text style={styles.link}>Already have an account ?</Text>
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
        marginTop: 150 // Adjusted to place form below the half-circle
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
