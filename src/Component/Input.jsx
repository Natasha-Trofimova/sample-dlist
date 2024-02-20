import { useState } from "react"



function Input() {

  const [data, setData] = useState([])


  const [type, setType] = useState('')
  const [summ, setSumm] = useState('')
  const [category, setCategory] = useState('')

  // addition
  // const [addition, ] = useState('')



  function addField() {
    console.log('work')
    // проверка на заполненность полей
    if (type.length > 0 && summ && category
    ) {
      // записываем данные в строку типа
      const dataLine = `${type}::${summ}::${category}`

      setData(
        prev => [...prev, dataLine]
      )



      // setData(
      //   prev => [...prev, type, +(summ), category]
      // )

      // очищает поля ввода
      setType("")
      setSumm("")
      setCategory("")
    }


  }

  return (
    <>

      <div className="aci">
        Input

        <input
          value={type}
          placeholder="тип"
          type={"text"}
          onChange={event => {
            setType(event.target.value)
          }}
        />
        {type}

        <input
          value={summ}
          placeholder="сумма"
          type={"text"}
          onChange={event => {
            setSumm(event.target.value)
          }}
        />
        {summ}

        <input
          value={category}
          placeholder="категория"
          type={"text"}
          onChange={event => {
            setCategory(event.target.value)
          }}
        />
        {category}

        <button
          onClick={addField}
        >
          push
        </button>

        {data}
        <br />
        <br />
        <br />
        show
        {
          data.map((item, index) => {
            return (
              <div key={index}>
                <span className="sp">{item.split('::')[0]}</span>
                <span className="sp">{item.split('::')[1]}</span>
                <span className="sp">{item.split('::')[2]}</span>
              </div>
            )
          }
          )
        }
      </div>
    </>
  )
}

export default Input