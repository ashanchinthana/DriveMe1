import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function SignUp() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        idNumber: '',
        phone: '',
        dlNumber: '',
        dlExpireDate: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        
        // Validate each field
        if (!form.name) newErrors.name = 'Name is required';
        if (!form.idNumber) newErrors.idNumber = 'ID Number is required';
        if (!form.phone) newErrors.phone = 'Phone number is required';
        if (!form.dlNumber) newErrors.dlNumber = 'DL number is required';
        if (!form.dlExpireDate) newErrors.dlExpireDate = 'DL expire date is required';
        
        // Email validation
        if (!form.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        // Password validation
        if (!form.password) {
            newErrors.password = 'Password is required';
        } else if (form.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        
        // Confirm password validation
        if (form.password !== form.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async () => {
        if (!validate()) return;
        
        setLoading(true);
        try {
            console.log('Registering with data:', form);
            
            // Format the date properly for API
            const formattedDate = new Date(form.dlExpireDate).toISOString();
            
            await axios.post('http://localhost:5002/api/auth/register', {
                name: form.name,
                idNumber: form.idNumber,
                phone: form.phone,
                dlNumber: form.dlNumber,
                dlExpireDate: formattedDate,
                email: form.email,
                password: form.password
            });
            
            Alert.alert(
                'Registration Successful', 
                'Your account has been created successfully!',
                [{ text: 'OK', onPress: () => router.push('/screens/signIn') }]
            );
        } catch (error) {
            console.error('Registration error:', error);
            const message = error.response?.data?.message || 'Registration failed. Please try again.';
            Alert.alert('Registration Failed', message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                        style={[styles.input, errors.name && styles.inputError]}
                        placeholder="Name"
                        placeholderTextColor="#999"
                        value={form.name}
                        onChangeText={(text) => {
                            setForm({ ...form, name: text });
                            if (errors.name) setErrors({ ...errors, name: null });
                        }}
                    />
                    {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                    
                    <TextInput 
                        style={[styles.input, errors.idNumber && styles.inputError]}
                        placeholder="ID Number"
                        placeholderTextColor="#999"
                        value={form.idNumber}
                        onChangeText={(text) => {
                            setForm({ ...form, idNumber: text });
                            if (errors.idNumber) setErrors({ ...errors, idNumber: null });
                        }}
                    />
                    {errors.idNumber && <Text style={styles.errorText}>{errors.idNumber}</Text>}
                    
                    <TextInput 
                        style={[styles.input, errors.phone && styles.inputError]}
                        placeholder="Phone number"
                        placeholderTextColor="#999"
                        keyboardType="phone-pad"
                        value={form.phone}
                        onChangeText={(text) => {
                            setForm({ ...form, phone: text });
                            if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                    />
                    {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
                    
                    <TextInput 
                        style={[styles.input, errors.dlNumber && styles.inputError]}
                        placeholder="DL number"
                        placeholderTextColor="#999"
                        value={form.dlNumber}
                        onChangeText={(text) => {
                            setForm({ ...form, dlNumber: text });
                            if (errors.dlNumber) setErrors({ ...errors, dlNumber: null });
                        }}
                    />
                    {errors.dlNumber && <Text style={styles.errorText}>{errors.dlNumber}</Text>}
                    
                    <TextInput 
                        style={[styles.input, errors.dlExpireDate && styles.inputError]}
                        placeholder="DL expire date (YYYY-MM-DD)"
                        placeholderTextColor="#999"
                        value={form.dlExpireDate}
                        onChangeText={(text) => {
                            setForm({ ...form, dlExpireDate: text });
                            if (errors.dlExpireDate) setErrors({ ...errors, dlExpireDate: null });
                        }}
                    />
                    {errors.dlExpireDate && <Text style={styles.errorText}>{errors.dlExpireDate}</Text>}
                    
                    <TextInput 
                        style={[styles.input, errors.email && styles.inputError]}
                        placeholder="E-mail"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        value={form.email}
                        onChangeText={(text) => {
                            setForm({ ...form, email: text });
                            if (errors.email) setErrors({ ...errors, email: null });
                        }}
                    />
                    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                    
                    <TextInput 
                        style={[styles.input, errors.password && styles.inputError]}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                        value={form.password}
                        onChangeText={(text) => {
                            setForm({ ...form, password: text });
                            if (errors.password) setErrors({ ...errors, password: null });
                        }}
                    />
                    {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                    
                    <TextInput 
                        style={[styles.input, errors.confirmPassword && styles.inputError]}
                        placeholder="Confirm password"
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                        value={form.confirmPassword}
                        onChangeText={(text) => {
                            setForm({ ...form, confirmPassword: text });
                            if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: null });
                        }}
                    />
                    {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

                    {/* Create Account Button */}
                    <TouchableOpacity 
                        style={styles.createButton} 
                        onPress={handleRegister}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Text style={styles.createButtonText}>Create Account</Text>
                        )}
                    </TouchableOpacity>

                    {/* Already have an account */}
                    <TouchableOpacity onPress={() => router.push('/screens/signIn')}>
                        <Text style={styles.footerText}>
                            <Text style={styles.text}>Already have an account? </Text>
                            <Text style={styles.link}>Sign In</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 5,
        marginTop: -5,
        marginBottom: 5,
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
    },
    text: {
        color: '#666',
    }
});