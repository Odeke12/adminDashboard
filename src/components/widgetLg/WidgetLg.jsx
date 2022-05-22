import React from 'react'
import './widgetLg.css'

const Button = ({type}) => {
    return <button className={"widgetLgButton "+type}>{type}</button>
}

export default function WidgetLg() {
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">
            Latest transactions
        </h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" className='widgetLgImg'/>
                
                    <span className="widgetLgName">Angulo Trevor</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.0</td>
                    <td className='widgetLgStatus'><Button type="Approved"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" className='widgetLgImg'/>
                </td>
                    <span className="widgetLgName">Angulo Trevor</span>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.0</td>
                    <td className='widgetLgStatus'><Button type="Declined"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" className='widgetLgImg'/>
                </td>
                    <span className="widgetLgName">Angulo Trevor</span>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.0</td>
                    <td className='widgetLgStatus'><Button type="Pending"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" className='widgetLgImg'/>
                </td>
                    <span className="widgetLgName">Angulo Trevor</span>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.0</td>
                    <td className='widgetLgStatus'><Button type="Approved"/></td>
            </tr>
        </table>
    </div>
  )
}
