import React, { useState } from 'react';


// Ford, mustang, Lincoln
// id, color, companyName, ModalName
// const vehicles = ['Ford', 'Mustang', 'Lincoln'];
const Fordvehicle = [{
    id: 1,
    color: 'red',
    companyName: 'Ford',
    modalName: 'F150',
    year: 1964
}, {
    id: 2,
    color: 'blue',
    companyName: 'Ford',
    modalName: 'Fiesta',
    year: 1967
}, {
    id: 3,
    color: 'red',
    companyName: 'Mustang',
    modalName: 'Sam',
    year: 1964
}, {
    id: 4,
    color: 'blue',
    companyName: 'Mustang',
    modalName: 'X',
    year: 1967
}];

const CustomElement: React.FC = () => {
    const [searchName, setSearchName] = useState();
    const [vehicles, setVehicles] = useState({});

    const search = (e: any) => {
        setSearchName(e.target.value);

    }
    const searchVehicle = (searchName: any) => {
        // const searchName = e.target.value;
        console.log(searchName, vehicles);
        const filterVehicle = Fordvehicle.filter((item) => item.modalName === searchName);
        // vehicles.filter((item) => item.modalName === searchName);
        setVehicles(filterVehicle);
        console.log(filterVehicle)

        return filterVehicle;

    }

    return (<div>
        <input type="text" value={searchName} onChange={(e) => search(e)} />
        <button onClick={(e) => searchVehicle(searchName)}>Search</button>
        {searchName}

    </div>)
}
export default CustomElement;