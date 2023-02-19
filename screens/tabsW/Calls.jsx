import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FAB } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";
// import statusData from '../../data/statusData'
import CreateCallLink from "../../components/CreateCallLink";
import callsData from "../../data/callsData";

const Calls = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={callsData}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<CreateCallLink />}
                renderItem={({ item }) => (
                    <View style={styles.myCallContainer}>
                        <View style={styles.myCallImgHolder}>
                            {item.groupCall ? (
                                // <Ionicons name="people-circle" color="gray" size={75} />
                                <Image
                                    style={{ height: "90%", width: "90%", resizeMode: "cover" }}
                                    source={require('../../images/groupIcon.png')}
                                />
                            ) : (
                                <Image
                                    style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                                    source={{ uri: item.profilePic }}
                                />
                            )}
                        </View>

                        <View style={styles.myCallRightContainer}>
                            <View style={styles.myCallUserData}>
                                <View>
                                    <Text style={styles.myStatusTitle}>{item.callName}</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    {item.receivedCall ? (
                                        <Image
                                            style={{ height: 10, width: 10, marginRight: "5%" }}
                                            source={require("../../images/recievedArrow.png")}
                                        />
                                    ) : (
                                        <Image
                                            style={{ height: 10, width: 10, marginRight: "5%" }}
                                            source={require("../../images/rejectedArrow.png")}
                                        />
                                    )}

                                    <Text style={{ color: "#677179" }}>
                                        {item.date}, {item.time}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.callIconContainer}>
                                <Ionicons name="call" color="#00A883" size={20} />
                            </View>
                        </View>
                    </View>
                )}
            />
            <FAB
                color="#248470"
                size="large"
                placement="right"
                // icon={<Ionicons name="call" color="white" size={25} />}
                icon={<Image source={require('../../images/startCall.png')} />}
            />
        </View>
    );
};

export default Calls;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#141B23",
        height: "100%",
        padding: "2%",
    },
    myCallContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    myCallImgHolder: {
        height: 65,
        width: 65,
        // borderWidth: 3,
        // borderColor: "gray",
        borderRadius: 40,
        overflow: "hidden",
    },
    myCallRightContainer: {
        // borderColor: "green",
        // justifyContent: "center",
        // width: "100%",
        // padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },

    myCallUserData: {
        // borderEndWidth: 2,
        // borderColor: "blue",
        justifyContent: "center",
        // width: "100%",
        padding: 10,
    },

    callIconContainer: {
        justifyContent: "center",
    },
    myStatusTitle: {
        color: "white",
        fontSize: 18,
        marginBottom: 5,
    },

    textTitle: {
        marginVertical: 20,
        fontSize: 16,
        color: "#677179",
    },
});
