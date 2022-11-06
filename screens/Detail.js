import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const Detail = () => {

    const [dataWan, setDataWan] = useState({})
    const route = useRoute()
    const movieAdd = `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`
  
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
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${dataWan.poster_path}` }}
                // source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={{
                    width: 300,
                    height: 300,
                    marginTop: 20
                }}
            />
            <Text style={{marginTop:20}}>{dataWan.title}</Text>
            <Text>{dataWan.vote_average}</Text>
        </View>
    );
};

export default Detail;