import React from 'react'

export default function Modal({ selectedImg, setSelectedImg }) {

    function handelClick(e){
        if(e.target.classList.contains('backdrop'))
        setSelectedImg(null);
    };

  return (
    <div className='backdrop' onClick={handelClick}>
        <img src={selectedImg} alt='enlarged pic' />
    </div>
  )
}
