import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'


const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={styles.row}>
                    <Card icon="train" title="Spot your train" navigation={navigation}/>
                    <Card icon="microphone" title="Live station" navigation={navigation}/>
                    <Card icon="clock-o" title="Train schedule" navigation={navigation}/>
                    <Card icon="exchange" title="Train b/w stations" navigation={navigation}/>
                    <Card icon="close" title="Cancelled trains" navigation={navigation}/>
                    <Card icon="calendar" title="Rescheduled trains" navigation={navigation}/>
                    <Card icon="location-arrow" title="Diverted trains" navigation={navigation}/>
                    <Card icon="heart" title="Manage favourites" navigation={navigation}/>
                    <Card icon="calendar-check-o" title="Train exceptions" navigation={navigation}/>
                    <Card icon="info" title="About app" navigation={navigation}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})