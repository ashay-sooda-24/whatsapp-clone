import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const EachChat = ({
    navigation,
    profilePic,
    name,
    mobileNo,
    lastMsgTime,
    lastMsgs,
    newMsg,
}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("ChatScreen");
            }}
            style={styles.container}
        >
            <View style={styles.dpContainer}>
                {profilePic === null ? (
                    <Image
                        style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                        source={require("../images/Vector.png")}
                    />
                ) : (
                    <Image
                        style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                        source={{ uri: profilePic }}
                    />
                )}
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.leftHolder}>
                    {name === null ? (
                        <Text style={styles.name}>{mobileNo}</Text>
                    ) : (
                        <Text style={styles.name}>{name}</Text>
                    )}

                    <Text style={styles.lastMsg}>{lastMsgs}</Text>
                </View>
                <View style={styles.leftHolder}>
                    <Text style={styles.lastMsgTime}>{lastMsgTime}</Text>

                    {newMsg != 0 ? (
                        <View style={styles.unReadMsg}>
                            <Text style={styles.unReadMsgBadgeText}>{newMsg}</Text>
                        </View>
                    ) : (
                        <View></View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default EachChat;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // borderWidth: 2,
        marginBottom: "8%",
    },
    dpContainer: {
        height: 55,
        width: 55,
        borderRadius: 45,
        overflow: "hidden",
        marginRight: "4%",
        // borderWidth: 2
    },
    rightContainer: {
        // borderWidth: 2,
        // borderColor: "white",
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
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
        bottom: 0,
    },
    unReadMsg: {
        color: "#a2a2a3",
        position: "absolute",
        bottom: 10,
        backgroundColor: "#248470",
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 20,
        borderRadius: 20,
    },
    unReadMsgBadgeText: {
        // color: "white"
        textAlign: "center",
    },
    lastMsgTime: {
        color: "#a2a2a3",
    },
});
