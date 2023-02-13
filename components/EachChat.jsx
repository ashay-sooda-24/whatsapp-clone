import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const EachChat = ({ navigation, profilePic, name, mobileNo, lastMsgTime, lastMsgs, }) => {
    return (
        <TouchableOpacity onPress={() => { navigation.navigate("ChatScreen") }} style={styles.container}>
            <View style={styles.dpContainer}>
                {profilePic === null ? <Image style={{ height: "100%", width: "100%", resizeMode: "cover" }} source={require("../images/Vector.png")} /> : <Image style={{ height: "100%", width: "100%", resizeMode: "cover" }} source={{ uri: profilePic }} />}
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.leftHolder}>
                    {
                        name === null ? <Text style={styles.name}>{mobileNo}</Text> : <Text style={styles.name}>{name}</Text>
                    }

                    <Text style={styles.lastMsg}>{lastMsgs}</Text>
                </View>
                <Text style={styles.lastMsgTime}>{lastMsgTime}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default EachChat

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // borderWidth: 2,
        marginBottom: "8%",
    },
    dpContainer: {
        height: 70,
        width: 70,
        borderRadius: 45,
        overflow: "hidden",
        marginRight: "4%",
        // borderWidth: 2
    },
    rightContainer: {
        // borderWidth: 2,
        // borderColor: "white",
        width: "75%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftHolder: {
        // borderWidth: 2,
        // borderColor: "green",
        // justifyContent: "space-between"
    },
    name: {
        color: "white",
        fontSize: 20,
        // marginBottom: "20%"
    },
    lastMsg: {
        color: "#a2a2a3",
        position: "absolute",
        bottom: 10
    },
    lastMsgTime: {
        color: "#a2a2a3"
    }
})