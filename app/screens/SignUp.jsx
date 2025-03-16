import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
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
        <SafeAreaView style={styles.container}>
            {/* Half-Circle Header */}
            <View style={styles.headerContainer}>
                <View style={styles.halfCircle} />
                <View style={styles.headerTextContainer}>
                    <Text style={styles.title}>Register</Text>
                    <Text style={styles.subtitle}>Create your new account</Text>
                </View>
            </View>

            {/* Form Section */}
            <ScrollView contentContainerStyle={styles.form}>
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
                        <Text style={styles.link}>Already have an account?</Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    headerContainer: {
        position: 'relative',
        alignItems: 'center',
    },
    halfCircle: {
        width: '200%',
        height: 250, 
        backgroundColor: '#D3D3D3', 
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        position: 'absolute',
        top: -100,
        zIndex: 0
    },
    headerTextContainer: {
        paddingTop: 100,
        paddingBottom: 50,
        alignItems: 'center',
        zIndex: 1
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333'
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 5
    },
    form: {
        paddingHorizontal: 20,
        paddingBottom: 20,
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
        color: '#0A66C2',
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
