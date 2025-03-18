import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter(); // ✅ Ensure useRouter is inside the function

    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/1.png')}
                style={styles.image}
            />
            
            <View style={styles.textContainer}>
                <Text style={styles.title}>DriveME</Text>
                <Text style={styles.subtitle}>
                    Simplify your drive—pay fines, renew licenses, and stay road-ready, all in one place.
                </Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => router.push('../screens/signIn')} 
                >
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 600,
        height: 500,
        resizeMode: 'contain',
        marginTop: 50,
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 30, 
        fontWeight: 'bold', 
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    button: {
        padding: 20,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#007bff',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
});
