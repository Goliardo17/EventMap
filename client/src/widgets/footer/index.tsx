import "./style.css"

export const Footer: React.FC = () => {
  return (
    <div className="column footer">
      <div className="column project-subscribe">
        <p>Подпишись на акции и анонсы событий</p>
        <div className="row sub-container">
          <input />
          <button>Далее</button>
        </div>
      </div>

      <div className="row project-faq">
        <div className="column faq-list">
          <p>FAQ</p>
          <ul className="column">
            <li>Справка</li>
            <li>Пользоватльское соглашение</li>
            <li>Подарочные сертификаты</li>
            <li>Возврат билетов</li>
            <li>Участие в исследованиях</li>
            <li>Правила рекомендаций</li>
          </ul>
        </div>

        <div className="column faq-list">
          <p>Партнерам и организаторам</p>
          <ul className="column">
            <li>Партнерам и организаторам мероприятий</li>
            <li>Билетная система Яндекс Билеты</li>
            <li>Корпоративным клиентам</li>
          </ul>
        </div>
      </div>

      <div className="row project-address">
        <p>2005-2024</p>
        <p>Статистика</p>
        <p>Язык сайта</p>
        <p>Реклама</p>
        <p>Геоточка</p>
      </div>
    </div>
  )
}