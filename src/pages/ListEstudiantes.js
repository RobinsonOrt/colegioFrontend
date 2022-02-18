import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { getCantByGrade } from '../core/apiCore'

const ListEstudiantes = () => {
    const [cantStu, setCantStu] = useState([]);

    const loadCantByGrade = (gradeName1) => {
        getCantByGrade(gradeName1).then(data => {
            if (data.error) {
                console.log("Error")
            } else {
                setCantStu(data);
            }
        })
    }
    useEffect(() => {
        loadCantByGrade(localStorage.getItem("grade"));
    }, [])

    return (
        <div>
            <Nav />
                {console.log(cantStu[0])}
            <Footer />
        </div>
    );
}
 
export default ListEstudiantes;