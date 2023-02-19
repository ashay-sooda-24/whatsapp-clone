import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'

const ChatHeader = ({ name, profilePic, navigation, mobileNo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer} >
                <TouchableOpacity onPress={() => { navigation.pop() }} >
                    <Ionicons name='arrow-back-outline' color="white" size={28} />
                </TouchableOpacity>
                <View style={styles.dpContainer}>
                    {profilePic === null ? <Image style={{ height: "100%", width: "100%", resizeMode: "cover" }} source={require('../images/Vector.png')} /> : <Image style={{ height: "100%", width: "100%", resizeMode: "cover" }} source={{ uri: profilePic }} />}

                </View>
                {name === null ? <Text style={{ color: "white" }}>{mobileNo}</Text> : <Text style={{ color: "white" }}>{name}</Text>}

            </View>

            <View style={styles.rightContainer}>
                <View style={styles.iconcontainer}>
                    <Ionicons name='videocam' color="white" size={24} />
                    <Ionicons name='call' color="white" size={22} />
                    <Ionicons name='ellipsis-vertical' color="white" size={23} />
                </View>
            </View>
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: "red",
        flexDirection: "row",
        backgroundColor: "#1E2B31",
        padding: 5,
        height: "10%"
    },
    leftContainer: {
        // flex: 1,
        // borderWidth: 2,
        width: "50%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    dpContainer: {
        // borderWidth: 2,
        // borderColor: "yellow",
        height: 50,
        width: 50,
        borderRadius: 30,
        overflow: "hidden"
    },


    rightContainer: {
        // borderWidth: 2,
        flex: 1,
        alignItems: "flex-end",
        // flexDirection: "row"
    },
    iconcontainer: {
        width: "60%",
        // borderWidth: 2,
        // borderColor: "white",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
})