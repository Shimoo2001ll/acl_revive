import React from 'react';
import './HomeRid.css';
import acl from '../../asset/Acl Revive.svg';
import aclLegknee from '../../asset/Leg with knee pain.svg';


const HomeRid = () => {
  return (
    <div className='mHome '>
            <div className='intro   mt-1 '>
                <div className='introtitle w-50 '>
                    <img src={acl} alt='acl-Head' />
                    <p className='text-muted w-100 '>crucial step in regaining full knee function after an injury to this important ligament. The rehabilitation process typically consists of four phases:</p>
                </div>
                <div className='imgIntro text-center  d-none d-md-block d-lg-block d-xl-block d-xxl-block '>
                    <img src={aclLegknee} alt="aclLegknee" title='acl Leg knee with pain' />
                </div>
            </div>
        </div>
  )
}

export default HomeRid