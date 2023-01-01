import React from "react";
import smallImg from '@/assets/6kb.png'
import bigImg from '@/assets/22kb.png'
import './img.less'

export function MyImg(){
  return (
    <>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于于10kb的图片" />
      <div className='smallImg'></div> {/* 小图片背景容器 */}
      <div className='bigImg'></div> {/* 大图片背景容器 */}
    </>
  )
}