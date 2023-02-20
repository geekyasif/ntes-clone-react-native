import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {Button, Datepicker, Input, IndexPath, Layout, Select, SelectGroup, SelectItem } from '@ui-kitten/components';

const data = [
    'Developer',
    'Designer',
    'Product Manager',
];

const SpotYourTrainScreen = () => {
    const [trainNumber, setTrainNumber] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
    const [date, setDate] = useState(new Date());


    const displayValue = data[selectedIndex.row];

    const renderOption = (title) => (
        <SelectItem title={title} />
    );


    const handleSearch = () => {
        alert("Loading...")
    }

    return (
        <View style={{ padding: 10 }}>
            <Input
                placeholder='Train Number / Name'
                value={trainNumber}
                onChangeText={value => setTrainNumber(value)}
            />

            <Select
                style={styles.select}
                placeholder='Default'
                value={displayValue}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                {data.map(renderOption)}
            </Select>


            <Datepicker
            style={styles.date}
                date={date}
                onSelect={nextDate => setDate(nextDate)}
            />

            <TouchableOpacity style={styles.statusBtn} onPress={handleSearch}>
                <Text style={styles.statusBtnText}>SHOW STATUS</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SpotYourTrainScreen

const styles = StyleSheet.create({
    select: {
        marginTop: 10,
        marginBottom: 10,
    },
    date:{
        marginBottom: 10
    },
    button: {
        
    },
    statusBtn: {
        backgroundColor: '#f4511e',
        alignItems: 'center',
        padding: 8,
        borderRadius: 5,
    },
    statusBtnText : {
        color: '#fff',
        fontWeight: "700",
        fontSize: 12
    }
})