import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Records from './Components/Records';
import Pagination from './Components/Pagination';

// import Records from './components/Records';
// import Pagination from './components/Pagination.jsx';

function RecentTransctions() {

    // To hold the actual data
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(3);


    const apiUrl = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

  const getData = async() => {
    try{
      const res = await axios.get(apiUrl);
      setData(res.data)
      setLoading(false)
    }catch(err){
      alert("failed to fetch data");
    }
  }
  
  useState(() => {
    getData();
  },[])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)

    return (
        <div className='container mt-5'>
            {loading ? "Loading Data" : <div>
            <Records data={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            </div>}
        </div>
    );
}

export default RecentTransctions;