import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";


const ChatFooter = () => {
    const [value, onChangeText] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.allInputContainer}>
                <Ionicons name="happy" color="#839298" size={25} />
                <TextInput
                    style={{ height: "100%", width: "50%", color: "white" }}
                    placeholderTextColor="white"
                    onChangeText={(text) => onChangeText(text)}
                    value={value}
                    placeholder="Message"
                />
                <Ionicons name="attach" color="#839298" size={25} />
                <Ionicons name="wallet" color="#839298" size={25} />
                <Ionicons name="camera" color="#839298" size={25} />
            </View>
            <View style={styles.recordSndBtn}>
                {value == "" ? (
                    <TouchableOpacity>
                        <Ionicons name="mic" size={25} color="white" />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity>
                        <Ionicons name="send" size={25} color="white" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default ChatFooter;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: "red",
        height: "10%",
        padding: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        // opacity: 1
    },
    allInputContainer: {
        // borderWidth: 2,
        width: "80%",
        height: "70%",
        borderRadius: 25,
        backgroundColor: "#1E2B31",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        paddingHorizontal: 12,
    },

    recordSndBtn: {
        height: "70%",
        width: "13%",
        // borderWidth: 2
        backgroundColor: "#01A784",
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
    },
});
