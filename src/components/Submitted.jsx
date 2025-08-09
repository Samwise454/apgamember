import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';

const Submitted = () => {

  return (
    <div>
      <Nav></Nav>

      <div className='bg-white shadow-sm flex text-center h-auto flex-col m-5 pt-8 pb-20 px-3 border-t-2'>
            <h2 className='text-xl text-green-600'>
                <b>Data Already Submitted Successfully!!</b>
            </h2>

            <div>
              <p className='leading-loose'>
                You have already submitted before. <br />

                Thank You.
              </p>
            </div>
      </div>
    </div>
  )
}

export default Submitted

