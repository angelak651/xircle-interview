import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import csv from './test.csv';
import './BarChart.css';

export default class Charts extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            age: [],
            gender: [],
        }
    }

    getData = async() => {
        const response = await fetch(csv);
        const data = await response.text();
        const rows = data.split('\n');
        rows.forEach(row => {
          const cols = row.split(',');
          this.setState (prevState => ({
              age: [...prevState.age, cols[0]],
              gender: [...prevState.gender, cols[2]]
          }))
        });
        //console.log(this.state.gender);
        //console.log(this.state.age);
    }

    countAge = () => {
        var twenties = 0;
        var thirties = 0;
        var forties  = 0;
        var fifties  = 0;
        var i = 0;
        for (i; i < this.state.age.length; i++)
        {
            if (this.state.age[i] >= 20 && this.state.age < 30)
            {
                twenties++;
            }
            else if(this.state.age[i] >= 30 && this.state.age < 40)
            {
                thirties++;
            }
            else if(this.state.age[i] >= 40 && this.state.age < 50)
            {
                forties++;
            }
            else if(this.state.age[i] >= 50)
            {
                fifties++;
            }
        }
        const agecount = [];
        agecount.push(twenties);
        agecount.push(thirties);
        agecount.push(forties);
        agecount.push(fifties);
        return agecount;
    }

    countGender = () => {
        var male = 0;
        var female = 0;
        var i = 0;
        for (i; i < this.state.gender.length; i++)
        {
            if (this.state.gender[i] === 'm')
            {
                male++;
            }
            else if (this.state.gender[i] === 'f')
            {
                female++;
            }
        }
        const gendercount = [];
        gendercount.push(male);
        gendercount.push(female);
        return gendercount;
    }
        
    render() {
        this.getData();
        const agedata = this.countAge();
        //console.log(data);
        const genderdata = this.countGender();
        return (
            <div className="container">
                <h1>BarChart</h1>
                <Bar
                    data={{
                        labels: ['20-29', '30-39', '40-49', '50+'],
                        datasets: [
                            {
                                label: 'Age Distribution',
                                data: [agedata[0], agedata[1], agedata[2], agedata[3]],
                                backgroundColor: [
                                    'rgba(255, 255, 255, 0.7)',
                                    'rgba(255, 255, 255, 0.7)',
                                    'rgba(255, 255, 255, 0.7)',
                                    'rgba(255, 255, 255, 0.7)',
                                ]
                            },
                        ],
                    }}
                    width={400}
                    height={200}
                    options={{
                        maintainAspectRatio: true,
                    }} />
                    <h1 style={{ marginTop: '100px' }}>Donut Chart</h1>
                    <Doughnut
                        style={{maxWidth: '600px', maxHeight: '600px', alignItems: 'center'}}
                        data={{
                            labels: ['Male', 'Female'],
                            datasets: [
                                {
                                    label: 'Gender Distribution',
                                    data: [54, 36],
                                    backgroundColor: [
                                        'rgba(121, 180, 255, 0.7)',
                                        'rgba(255, 99, 99, 0.7)',
                                    ]
                                }
                            ]
                        }}
                        width={100}
                        height={100}
                        options={{
                            maintainAspectRatio: true,
                        }} />
                </div>
        )
    }

}



