import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

const Item = () => {
    return (
        <View style={styles.itemContainer}>
            <Image style={styles.avatar} source={{uri: "https://dummyimage.com/150/d4338b/000000.png&text=Avatar"}} />
            <View style={styles.desc}>
                <Text style={styles.descName}>Nama Lengkap</Text>
                <Text style={styles.descEmail}>Email</Text>
                <Text style={styles.descBidang}>Bidang</Text>
            </View>
            <Text style={styles.delete}>x</Text>
        </View>
    )
}
const LocalAPI = () => {
    return (
        <View style={styles.container}>
            <Text>Masukkan nama karyawan Spentera</Text>
            <TextInput style={styles.input} placeholder="Nama Lengkap" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Bidang" />
            <Button title="Simpan" />
            <View style={styles.line} />
            <Item />
            <Item />
            <Item />
        </View>
    )
}

export default LocalAPI

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    input: {borderWidth: 1, marginBottom: 12, borderRadius: 25, paddingHorizontal: 18, marginTop: 10},
    avatar: {width: 100, height: 100, borderRadius: 50},
    itemContainer: {flexDirection: 'row', marginBottom: 10},
    desc: {marginLeft: 18, flex: 1},
    descName: {fontSize: 20, fontWeight: 'bold'},
    descEmail: {fontSize: 16},
    descBidang: {fontSize: 12, marginTop: 8},
    delete: {fontSize: 20, fontWeight: 'bold', color: 'red'}
})
