import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const CreateCallLink = () => {
    return (
        <View>
            <View style={styles.myStatusContainer}>
                <View style={styles.createLinkContainer}>
                    {/* <Image style={{ height: "100%", width: "100%", resizeMode: "cover" }} source={require('../images/Vector.png')} /> */}
                    <Ionicons name='link' color="white" size={25} />
                </View>
                <View style={styles.myStatusRightContainer}>
                    <View >
                        <Text style={styles.myStatusTitle}>Create call link</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#677179", }}>Share a link for  your WhatsApp call</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.textTitle}>
                Recent
            </Text>
        </View>
    )
}

export default CreateCallLink

const styles = StyleSheet.create({
    myStatusContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    createLinkContainer: {
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00AC83",
        borderRadius: 30
    },
    plusIcon: {
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "#248470",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "40%",
        height: "40%",
        // alignItems: "center",
        // justifyContent: "center",
        borderRadius: 15
    },
    myStatusRightContainer: {
        borderEndWidth: 2,
        borderColor: "green",
        justifyContent: "center",
        width: "100%",
        padding: 10,
    },
    myStatusTitle: {
        color: "white",
        fontSize: 18,
        marginBottom: 5
    },

    textTitle: {
        marginVertical: 20,
        fontSize: 16,
        color: "#677179"
    }
})