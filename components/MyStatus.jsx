import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyStatus = ({ item }) => {
    return (
        <View>
            <View style={styles.myStatusContainer}>
                <View style={styles.myStatusImgHolder}>
                    <Image style={{ height: "100%", width: "100%", resizeMode: "cover" }} source={require('../images/Vector.png')} />
                    <View style={styles.plusIcon}>
                        <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>+</Text>
                    </View>
                </View>
                <View style={styles.myStatusRightContainer}>
                    <View >
                        <Text style={styles.myStatusTitle}>My Status</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#677179", }}>Tap to add status update</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.textTitle}>
                Viewed Updates
            </Text>
        </View>

    )
}

export default MyStatus

const styles = StyleSheet.create({

    myStatusContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    myStatusImgHolder: {
        height: 60,
        width: 60,
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