import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import chatsData from "../../data";
import EachChat from "../../components/EachChat";
import { FAB } from "react-native-elements/dist/buttons/FAB";

const Chats = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={chatsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <EachChat navigation={navigation} profilePic={item.profilePic} name={item.name} mobileNo={item.mobileNo} lastMsgTime={item.lastMsgTime} lastMsgs={item.lastMsgs} newMsg={item.newMsg} />}
            />
            <FAB color="#248470" size='large' placement="right" icon={{ name: "message", color: "white" }} onPress={() => { navigation.navigate('SelectContact') }} />
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
