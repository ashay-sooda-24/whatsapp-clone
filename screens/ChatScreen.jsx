import { Button, Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import ChatHeader from '../components/ChatHeader'
import ChatFooter from '../components/ChatFooter'
import ChatBody from '../components/ChatBody'
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import { KeyboardAvoidingView } from 'react-native'

const ChatScreen = () => {
    const route = useRoute();
    const { name, navigation, profilePic, mobileNo } = route.params
    console.log(name);
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#1E2B31" />
            <View style={styles.container}>
                <ImageBackground source={{ uri: "https://wallpapers.com/images/high/whatsapp-cat-photography-a9gmmddzeywtzfmq.webp" }} resizeMode="cover" style={{ height: "100%", position: "absolute", width: "100%" }} />
                <ChatHeader name={name} profilePic={profilePic} navigation={navigation} mobileNo={mobileNo} />
                <ChatBody />
                <ChatFooter />
            </View>
            {/* <Button title='click' onPress={() => { navigation.pop() }} /> */}
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "green",
        height: "100%",
        // borderWidth: 2,
        // borderColor: "green"
    }
})