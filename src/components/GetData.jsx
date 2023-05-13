import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Chart from './Chart';
import style from './getData.module.css'

const GetData = () => {
    const [para, setPara] = useState("");
    const [freq, setFreq] = useState([]);
    const [isFreqUpdated, setIsFreqUpdated] = useState(false);

    function pullData(){
        axios.get("https://www.terriblytinytales.com/test.txt") 
         .then((response) => {
            const temp = response.data;
            setPara(temp)
            // console.log(para);
         })
         .catch((err) => {
            console.log(err)
         })
    }
    const countWords = (str) => {
        const words = str.toLowerCase().match(/[\w']+/g) || [];
        const freq = {};
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          freq[word] = freq[word] ? freq[word] + 1 : 1;
        }

        const tuples = Object.entries(freq);
        tuples.sort((a, b) => b[1] - a[1]);

        return tuples.slice(0, 20);
        // return freq;
      };
    useEffect(() => {
        // console.log(para);
        if(!isFreqUpdated){
            const f = countWords(para);
            setFreq(f);
            freq.length>0 ? setIsFreqUpdated(true): setIsFreqUpdated(false);
            console.log(isFreqUpdated)
        }
        // console.log(f)
      }, [para,freq,isFreqUpdated]);

  return (
    <div className={style.container}>
        {pullData()}
        <h4 className={style.heading}>Word-Frequency Chart</h4>
        {isFreqUpdated && <Chart freq = {freq}/> }
  
    </div>
  )
}

export default GetData