import React, { useState } from "react";

export function TestHost(){
  const [value, setValue] = useState(0)
  const onChange = (e:any)=>{
    setValue(e.target.value)
    
  }
  return (
    <>
      <h3>测试host</h3>
      <input type="text" value={value} onChange={onChange}/>
      <p>
        输入的值为：{value}
      </p>
    </>
  )
}