import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import chatsData from "../../data";
import EachChat from "../../components/EachChat";

const Chats = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={chatsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <EachChat navigation={navigation} profilePic={item.profilePic} name={item.name} mobileNo={item.mobileNo} lastMsgTime={item.lastMsgTime} lastMsgs={item.lastMsgs} />}
            />
        </View>
    );
};

export default Chats;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#141B23",
        height: "100%",
        padding: "2%",
        paddingTop: "5%"
    },
});
