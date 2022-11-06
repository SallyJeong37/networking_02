import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Movies = () => {

    const navigation = useNavigation();

    // 6.
    const [dataWan, setDataWan] = useState([])  //const [movies, setMovies] = useState("",[],0,{})

    //  "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1"

    // 1.
    const movieAdrr = "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1"

    // 2. 네트워킹 함수
    const getMovies = async () => {
        // 4. 네트워킹
        try {
            const { data, status } = await axios.get(movieAdrr)
            // 5.
            if (status === 200) {
                // data 저장
                setDataWan(data.results)
            }


        } catch (e) {
            console.log(e)
        }

    }

    // 3. 무조건 실행하는 함수
    useEffect(() => {
        getMovies()
    }, [])







    return (
        <ScrollView style={styles.block}>
            {dataWan && dataWan.map(xiaoDataMing => (
                <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: xiaoDataMing.id, name:xiaoDataMing.title})} key={xiaoDataMing.id}>
                    <View style={styles.viewContainer}>

                        <Text style={styles.title}>{xiaoDataMing.title}</Text>
                        <View style={styles.infoBox}>
                            <Text>개봉일: {xiaoDataMing.release_date}</Text>
                            <Text style={{ paddingLeft: 15 }}>평점: {xiaoDataMing.vote_average}</Text>
                        </View>
                        <Text style={styles.desc}>{xiaoDataMing.overview}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};



export default Movies;

const styles = StyleSheet.create({
    block: {
        flex: 1,
        padding: 10
    },
    viewContainer: {
        marginTop: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    desc: {
        fontSize: 15,
        fontWeight: '200'
    },
    infoBox: {
        flexDirection: 'row',
        marginBottom: 10

    }
})