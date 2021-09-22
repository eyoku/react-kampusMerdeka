import ListItem from './ListItem';
import {gql, useQuery, useLazyQuery} from '@apollo/client'
import LoadingSvg from "./LoadingSvg"
import PassengerInput from './PassengerInput';
import { useState } from 'react';


const ListPassenger = props => {
    console.log("List Passenger = ",props.data)
        
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <th>Nama</th>
                    <th>Umur</th>
                    <th>Jenis Kelamin</th>
                    <th bgcolor="white" className="removeBorder"></th>
                </thead>
                {props.data?.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;
