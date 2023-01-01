import React,{lazy, Suspense, useState} from 'react';
import './app.css'
import './app.less'
import {Test} from './components/Test'
import {MyImg} from './components/MyImg'
import {TestHost} from './components/TestHost'
import {A} from '@/components/A'
import {B} from '@/components/B'
const LazyDemo = lazy(() => import('@/components/LazyDemo'))
const MyAntd = lazy(() => import('@/components/antdComponents'))

import 'antd/dist/reset.css';

export function App(){
  const [ show, setShow ] = useState(false)
  const onShow = () =>{
    setShow(true)
  }
  return <div>
    <h3>webpack-react-ts</h3>
    <p>测试less</p>
    <div className='host'>测试host11</div>
    <Test/>
    <MyImg/>
    <hr />
    <TestHost/>
    <A/>
    <hr />
    <h4 onClick={onShow}>懒加载</h4>
    { show && <Suspense fallback={null}><LazyDemo /></Suspense> }
    <Suspense fallback={<div>加载中...</div>}><MyAntd /></Suspense>
  </div>
}