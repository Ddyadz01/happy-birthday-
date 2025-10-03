import './App.scss'
import { useEffect, useRef, useState } from 'react'

const TARGET_DATE = 'October 25, 2025 17:00:00'

export default function App() {
  const [days, setDays] = useState('00')
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const timerRef = useRef()

  useEffect(() => {
    const target = new Date(TARGET_DATE).getTime()
    timerRef.current = setInterval(() => {
      const now = Date.now()
      const diff = target - now
      if (diff <= 0) {
        clearInterval(timerRef.current)
        setDays('00')
        setHours('00')
        setMinutes('00')
        setSeconds('00')
        return
      }
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((diff % (1000 * 60)) / 1000))
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__label">ПРИГЛАШЕНИЕ</p>
          <h1 className="hero__title">День рождения</h1>

          <p className="hero__intro">
            Дорогие друзья и близкие! Мы приглашаем вас на празднование первого дня рождения нашего
            сына! <hr />
            <p className="text">
              С собой прошу захватить шквал веселого настроения и крепость в ногах для зажигательных
              танцев. <br /> С любовью, родители Армена.
            </p>
          </p>
          <img src="armen2.jpg" alt="" />
          <h3 className="hero__date">25.10.2025 · 17:00</h3>
          <div className="countdown">
            <div className="countdown__item">
              <span>{days}</span>
              <small>дней</small>
            </div>
            <div className="countdown__item">
              <span>{hours}</span>
              <small>часов</small>
            </div>
            <div className="countdown__item">
              <span>{minutes}</span>
              <small>минут</small>
            </div>
            <div className="countdown__item">
              <span>{seconds}</span>
              <small>секунд</small>
            </div>
          </div>
          <a className="hero__scroll" href="#rsvp">
            ﹀
          </a>
        </div>
      </section>

      <section className="calendar-section">
        <h1 className="hero__title">Сохраните дату</h1>
        <h3 className="calendar-title">ОКТЯБРЬ</h3>
        <div className="calendar">
          <div className="calendar__week">
            <span>ПН</span>
            <span>ВТ</span>
            <span>СР</span>
            <span>ЧТ</span>
            <span>ПТ</span>
            <span>СБ</span>
            <span>ВС</span>
          </div>
          <div className="calendar__row">
            <span className="prev-day">29</span>
            <span className="prev-day">30</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div className="calendar__row">
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
          </div>
          <div className="calendar__row">
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
          </div>
          <div className="calendar__row">
            <span>20</span>
            <span>21</span>
            <span>22</span>
            <span>23</span>
            <span>24</span>
            <span className="calendar__day--accent">25</span>
            <span>26</span>
          </div>
          <div className="calendar__row">
            <span>27</span>
            <span>28</span>
            <span>29</span>
            <span>30</span>
            <span>31</span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
      <section className="location-block">
        <h1 className="hero__title">Сохраните место</h1>
        <div className="location">
          <h2 className="location__place">Ресторан «Татев»</h2>
          <h3 className="location__place_two">Сбор гостей в 17:00</h3>
          <h4 className="location__addr">Адрес: д. Путилково, 11, стр. 17</h4>

          <img src="restoran.webp" alt="" />
          <div className="navigator">
            <a
              href="https://yandex.ru/maps/?rtext=~55.861509,  37.397530"
              target="_blank"
              className="uk-button uk-button-primary"
            >
              <button>Как добраться?</button>
            </a>
          </div>
        </div>
        <a className="hero__scroll" href="#rsvp">
          ﹀
        </a>
      </section>
    </div>
  )
}
