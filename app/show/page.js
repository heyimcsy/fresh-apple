'use client'
import React, { useState } from 'react'

export default function Show() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    //map 인자는 두개를 담을 수 있고 , 두번째 인자는 증가되는 수를 보여준다 .
    //인덱스 표현에 좋을 듯

    let 수량 = 0
    const [count, setCount] = useState([100, 0, 0])

    return (
        <div>
            <h4 className="title">상품목록입니다 ~~</h4>
            {상품.map((food, i) => {
                return (
                    <div className="food" key={i}>
                        <img src={`/food${i}.png`} className="food-img" />
                        <h4>{food} $40</h4>
                        <span>{count[i]}</span>
                        <button
                            onClick={() => {
                                let countCopy = [...count]
                                countCopy[i]++
                                setCount(countCopy)
                            }}
                        >
                            +
                        </button>
                        <button
                            onClick={() => {
                                let countCopy = [...count]
                                countCopy[i]--
                                setCount(countCopy)
                            }}
                        >
                            -
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
