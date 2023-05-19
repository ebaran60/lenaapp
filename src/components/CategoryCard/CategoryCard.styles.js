import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 5,
        backgroundColor: 'white',
    },
    textContainer:{
        alignItems: 'center',
    },
    image:{
        width: 300,
        height: 300,
        resizeMode: 'center'
    },
    title:{
        fontSize:25,
        color:'#8D8D8D',
        fontWeight:'bold',
    },
    content:{
        fontStyle:'italic',
        margin:5,
        padding:5,
        fontWeight:'600'
    },
})