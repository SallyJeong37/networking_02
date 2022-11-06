import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

// const movieAdrr = "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1"


const Detail = () => {

    const [dataWan, setDataWan] = useState({})





    const route = useRoute()
    const movieAdd = `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`
    // const movieAdd = "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1"
    // const movieAdd = "https://api.themoviedb.org/3/movie/663712?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US"

    const getMovie = async () => {
        try {
            const { data, status } = await axios.get(movieAdd)
            console.log(data)
            if (status === 200) {
                setDataWan(data)


            }

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <View>
            <Text>{dataWan.title}</Text>
            <Text>{dataWan.vote_average}</Text>
        </View>
    );
};

export default Detail;