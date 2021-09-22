import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import {gql, useQuery, useLazyQuery, useMutation} from '@apollo/client';
import { useState } from 'react';
import LoadingSvg from "./LoadingSvg"

const initialValue = {
    nama: "",
    umur: "",
    jeniskelamin: ""
}

const GetData = gql`
    query MyQuery {
        anggota {
        id
        jenis_kelamin
        nama
        umur
        }
    }      
    `

function Home () {

    const deleteData = gql`
    mutation MyMutation($id: Int!) {
    delete_anggota_by_pk(id: $id) {
        id
    }
    }
`;

const insertData = gql`
mutation MyMutation($jenis_kelamin: String!, $nama: String! $umur: Int!, $id: Int!) {
    insert_anggota(objects: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur, id: $id}) {
      returning {
        jenis_kelamin
        nama
        umur
        id
      }
    }
  }
`
    
    const GetDataByUserId = gql `
        query MyQuery($id: Int!) {
        anggota(where: {id: {_eq: $id}}) {
            nama
            umur
            jenis_kelamin
            id
        }
        }
    `;
    
    const [list, setList] = useState([])
    const [deleteDataN, {loading : loadingDelete}] = useMutation(deleteData,{
        refetchQueries: [GetData]
    });
    const [insertDataN, {loading:loadingInsert}] = useMutation(insertData, {
    refetchQueries: [GetData]
  })
    const {data, loading, error} = useQuery(GetData)
    const [input, setInput] = useState("")


    if(loading || loadingDelete || loadingInsert){
        return <LoadingSvg/>
    }

    if (error){
        console.log("error ",error)
        return null
    }
    

    const hapusPengunjung = id => {
    deleteDataN({variables :{
      id:id
    }})
  };

      const tambahPengunjung = newUser => {
        console.log(newUser.nama)
        const newData = {
            ...newUser
        }
        // console.log(newData)
        insertDataN({variables :{
              id: newData.id,
              nama: newData.nama,
              umur: newData.umur,
              jenis_kelamin: newData.jenisKelamin
        }})
    }
    // const onGetData = () =>{
    //     getData_qry({variables : {
    //         id : input
    //     }})

    //     console.log(data?.anggota)
    //     // setList(data?.anggota)
    //   }
    
    // const onchangeInput = (e) => {
    //     setInput(e.target.value)
    // }
    return(
        <div>
            <Header />
            {/* <input type="text" onChange={onchangeInput} />
            <button onClick={onGetData}>Get Data</button> */}
            <ListPassenger data={data?.anggota} hapusPengunjung={hapusPengunjung} />
            <PassengerInput tambahPengunjung={tambahPengunjung}/>
        </div>
    )
    
}

export default Home;
