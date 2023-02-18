import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import statusData from "../../data/statusData";
import MyStatus from "../../components/MyStatus";

const Status = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={statusData}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<MyStatus />}
                renderItem={({ item }) => (
                    <View style={styles.myStatusContainer}>
                        <View style={styles.myStatusImgHolder}>
                            <Image
                                style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                                source={{ uri: item.profilePic }}
                            />
                        </View>
                        <View style={styles.myStatusRightContainer}>
                            <View>
                                <Text style={styles.myStatusTitle}>{item.savedName}</Text>
                            </View>
                            <View>
                                <Text style={{ color: "#677179" }}>
                                    {item.day}, {item.time}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default Status;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#141B23",
        height: "100%",
        padding: "2%",
    },
    myStatusContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15
    },
    myStatusImgHolder: {
        height: 65,
        width: 65,
        borderWidth: 3,
        borderColor: "gray",
        borderRadius: 40,
        overflow: "hidden"

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
});
