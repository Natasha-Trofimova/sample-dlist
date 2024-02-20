import Input from "./Input"
import "./A.css"
import { DataContext } from "../Context/Data"
import { useState } from "react"

function Acomp() {
  
  const [data, ] = useState([])


  return (
    <>
      <DataContext.Provider
      value={{
        data,
      }}
      >

        <div className="ac">
          <Input />
        </div>
      </DataContext.Provider>

    </>
  )
}

export default Acomp