import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App = () => {

  // 6.
  const [dataWan, setDataWan] = useState([])  //const [movies, setMovies] = useState("",[],0,{})

  //  "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1"

  // 1.
  const movieAdrr = "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1"

  // 2. 네트워킹 함수
  const getMovies = async () => {
    // 4. 네트워킹
    try {
      const {data, status} = await axios.get(movieAdrr)
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
    <View>
      {dataWan && dataWan.map(xiaoDataMing => (
        <Text>{xiaoDataMing.title}</Text>
      ))}
    </View>
  );
};

export default App;