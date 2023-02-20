import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Modal } from "react-native";

const Header = ({ navigation }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.cusLogo}>Whatsapp</Text>
            </View>
            <View style={styles.leftContainer}>
                <TouchableOpacity
                    onPress={() => {
                        // navigation.navigate("CameraS");
                    }}
                >
                    <Ionicons name="camera-outline" color="#85959F" size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="search-outline" color="#85959F" size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowDropdown(true)}>
                    <Ionicons name="ellipsis-vertical" color="#85959F" size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: "red",
        display: "flex",
        flexDirection: "row",
        height: "8%",
        backgroundColor: "#1F2B30",
    },
    logoContainer: {
        // borderWidth: 2,
        // borderColor: "yellow",
        // flex: 1
        width: "60%",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "4%",
    },
    cusLogo: {
        // textAlign: "center"
        color: "#85959F",
        fontSize: 24,
    },
    leftContainer: {
        // borderWidth: 2,
        // borderColor: "green",
        // width: "50%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
});
