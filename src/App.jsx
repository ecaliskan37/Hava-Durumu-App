import './styles.css'
import { useState, useEffect } from 'react'

export default function App() {
  const [array, setArray] = useState([
    {
      id: 0,
      day: 'Pazartesi',
      condition: 'Güneşli',
      lowTemp: 20,
      highTemp: 38,
      statu: false,
    },
    {
      id: 1,
      day: 'Salı',
      condition: 'Yağmurlu',
      lowTemp: 8,
      highTemp: 15,
      statu: false,
    },
    {
      id: 2,
      day: 'Çarşamba',
      condition: 'Karlı',
      lowTemp: -5,
      highTemp: 3,
      statu: false,
    },
  ])

  const handleClick = (id) => {
    setArray((pre) =>
      pre.map((item) => {
        if (id == 2 && item.id == 0) {
          return { ...item, statu: true }
        } else if (item.id === id + 1) {
          return { ...item, statu: true }
        }
        return { ...item, statu: false }
      })
    )
  }

  useEffect(() => {
    setArray((pre) =>
      pre.map((item) => {
        if (item.id === 0) {
          return { ...item, statu: true }
        }
        return { ...item, statu: false }
      })
    )
  }, [])

  return (
    <>
      {array.map((item) => {
        if (item.statu) {
          return (
            <div
              className={`app-container ${
                item.condition.at(0).toLowerCase() + item.condition.slice(1)
              }-background`}
            >
              <div className="weather-container" key={item.id}>
                <div className="icon">
                  {item.condition === 'Güneşli'
                    ? '☀️'
                    : item.condition === 'Yağmurlu'
                    ? '🌧️'
                    : item.condition === 'Karlı'
                    ? '❄️'
                    : null}
                </div>
                <div className="condition-text">{item.condition}</div>
                <div className="temp-range-container">
                  <div className="low-temp-container">
                    <p className="low-temp-data">{item.lowTemp}°</p>
                  </div>
                  <div className="high-temp-container">
                    <p className="high-temp-data">{item.highTemp}°</p>
                  </div>
                </div>
                <div className="day">{item.day}</div>
              </div>
              <button onClick={() => handleClick(item.id)}>Test</button>
            </div>
          )
        }
      })}
    </>
  )
}
