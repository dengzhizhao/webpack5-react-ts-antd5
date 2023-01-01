import React,{ FC } from "react";
import { Button, Input, Rate } from 'antd';

const MyAntd: FC =()=>(
  <>
    <Button type="primary">Button</Button>
    <Input placeholder="Basic usage" />
    <Rate allowHalf defaultValue={2.5}/>
  </>
)

export default MyAntd