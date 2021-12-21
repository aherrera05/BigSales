import React from "react";
import {StyleSheet, TextInput} from 'react-native';

export default SearchBar = ({onChange})=>{
    return(
        <TextInput style={Styles.input} placeholder='Search Deal' onChangeText={onChange}></TextInput>

    );

};

const style = StyleSheet.create({
    input:{
        height:40,
        marginHorizontal:12
    },
});