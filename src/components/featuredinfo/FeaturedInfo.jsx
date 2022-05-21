import React from 'react'
import './featuredinfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3.44</span>
                <span className="featuredMoneyRate">-$2.34 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3.44</span>
                <span className="featuredMoneyRate">$2.34 <ArrowUpward className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5.44</span>
                <span className="featuredMoneyRate">$1.34 <ArrowUpward className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo