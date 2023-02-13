import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chats from "./tabsW/Chats";
import Status from "./tabsW/Status";
import Calls from "./tabsW/Calls";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({ navigation }) => {
    const [crazy, setCrazy] = useState(true); //just for trying conditional rendering of badge. Use backened data for the actual.
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            {/* <NavigationContainer> */}
            <Tab.Navigator
                initialRouteName="Chats"
                screenOptions={{
                    tabBarStyle: { backgroundColor: "#1F2B30", height: "8%" },
                    tabBarLabelStyle: { textTransform: "none", fontSize: 16 },
                    tabBarIndicatorStyle: { backgroundColor: "#248470", height: 4 },
                    tabBarActiveTintColor: "#248470",
                    tabBarInactiveTintColor: "#48555F",
                    tabBarPressColor: "#1F2B30"
                }}
            >
                <Tab.Screen
                    name="Chats"
                    component={Chats}
                    options={{
                        tabBarBadge: () => {
                            return crazy ? (
                                <View style={styles.chatsBadge}>
                                    <Text style={{ textAlign: "center" }}>2</Text>
                                </View>
                            ) : (
                                ""
                            );
                        },
                    }}
                    navigation={navigation}
                />
                <Tab.Screen name="Status" component={Status} />
                <Tab.Screen name="Calls" component={Calls} />
            </Tab.Navigator>
            {/* </NavigationContainer> */}
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#1F2B30",
        // backgroundColor: "#2f4252"
        // backgroundColor: "#2f4252"
    },

    chatsBadge: {
        // borderWidth: 2,
        borderRadius: 25,
        height: 20,
        width: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#248470",
        top: 14,
        right: 15,
    },
});
