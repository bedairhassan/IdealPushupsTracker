import React, { useState } from 'react'

function Pushups() {

    const [current, setCurrent] = useState(1)

    const [stats, setStats] = useState([])

    const [statsDisplay, setStatsDisplay] = useState([])

    const [sum, setSum] = useState([])

    const [listItemsLength, setListItemsLength] = useState(5)

    const generateDate = () => {

        var date = new Date()

        var arr = date.toString().split(' ')

        return `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]}`
    }

    const min = (given,minLimit)=> given<minLimit ? given+1 : given  

    return (
        <React.Fragment>

            <ul>Preferences
        <li>List Items Length: {listItemsLength}

                    <button onClick={() => setListItemsLength(listItemsLength + 1)}>+</button>
                    {/* <button onClick={() => setListItemsLength(listItemsLength - 1)}>-</button> */}

                    <button onClick={() => setListItemsLength(min(listItemsLength - 1,1))}>-</button>


                </li>
            </ul>

            <ul>Actions:
    <li>Reset: <button onClick={() => {

                    setCurrent(1)
                }}>Reset</button></li>


                <li>Pushups: <button onClick={() => {

                    const update = { date: `${generateDate()}`, pushup: current }

                    // basic functionality
                    setCurrent(current + 1)

                    // 
                    setStats([...stats, update])

                    setSum(parseInt(sum + current))
                    // setSum(sum+' '+current)

                    // shift, push // 

                    // if  listItemsLength < than items actually being displayed (:
                    const remaining = statsDisplay.length - listItemsLength
                    for (let i=0;i<remaining;i++){
                        statsDisplay.shift()
                    }

                    // display check 
                    if (statsDisplay.length < listItemsLength) {
                        statsDisplay.push(update)
                    } else {

                        statsDisplay.shift()
                        statsDisplay.push(update)
                    }

                    // console.log
                    console.log({ stats, stats5: statsDisplay })

                }}>{current}</button></li>
            </ul>

            <ul>Stats
                <li>Sum: {sum}</li>
                <li>Turns: {stats.length}</li>
            </ul>
            <br />





            {
                statsDisplay.map(stat =>

                    <React.Fragment>
                        <ul>
                            <li>{stat.date}</li>
                            <li>{stat.pushup}</li>
                        </ul>
                    </React.Fragment>

                )
            }
        </React.Fragment>
    )
}

export default Pushups
