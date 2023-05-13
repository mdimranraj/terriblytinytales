import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Label, LabelList, Tooltip } from 'recharts';
import React,{useState} from 'react';
import style from './chart.module.css';

const Chart = ({freq}) => {
    const [data, setData] = useState([
        { name: freq[0][0], value: freq[0][1] },
        { name: freq[1][0], value: freq[1][1] },
        { name: freq[2][0], value: freq[2][1] },
        { name: freq[3][0], value: freq[3][1] },
        { name: freq[4][0], value: freq[4][1] },
        { name: freq[5][0], value: freq[5][1] },
        { name: freq[6][0], value: freq[6][1] },
        { name: freq[7][0], value: freq[7][1] },
        { name: freq[8][0], value: freq[8][1] },
        { name: freq[9][0], value: freq[9][1] },
        { name: freq[10][0], value: freq[10][1] },
        { name: freq[11][0], value: freq[11][1] },
        { name: freq[12][0], value: freq[12][1] },
        { name: freq[13][0], value: freq[13][1] },
        { name: freq[14][0], value: freq[14][1] },
        { name: freq[15][0], value: freq[15][1] },
        { name: freq[16][0], value: freq[16][1] },
        { name: freq[17][0], value: freq[17][1] },
        { name: freq[18][0], value: freq[18][1] },
        { name: freq[19][0], value: freq[19][1] },
      ]);

      const downloadCSV = () => {
        const csv = data.map(row => `${row.name},${row.value}`).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      };


  return (
    <div className={style.chartContainer}>
        <div className={style.app}>
        <BarChart width={1000} height={400} data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"  tick={{fontSize: 16}} height={150} angle={-90} textAnchor="end" verticalAnchor="middle" interval={0} dy={10}  dx={-5} >
          <Label dy={70} fill="#643843" fontWeight="bold">Words</Label>
         </XAxis> 
        <YAxis domain={[0, dataMax => Math.ceil(dataMax/10)*15]}>
          <Label angle={-90} dy={0}  dx={-15} fill="#643843" fontWeight="bold">Frequency</Label>
        </YAxis>
        <Bar dataKey="value" fill="#146C94" >
          <LabelList dataKey="value" position="top" />
          <Tooltip cursor={{fill: 'rgba(0, 0, 0, 0.2)'}} />
        </Bar>
        </BarChart>

      
    
        <div className={style.exportDiv}>

        <button onClick={downloadCSV} type="button" className={`btn btn-secondary btn-lg ${style.export}`}>Export</button>

        </div>
        </div>
    </div>
    
  )
}

export default Chart