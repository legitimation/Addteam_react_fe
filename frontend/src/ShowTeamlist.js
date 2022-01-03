import React, { useState } from 'react';
import { data } from './initdata';
import Showmem from './ShowMember';


const OrganiseTeam = () => {
  const [newTeam, setTeam] = useState('');
  const [teamList, setPeople] = useState(data);
  const [sort, setSort]  = useState(true);
  
  const AddTeam = (e) => {
    e.preventDefault();
    if (newTeam) {
      const addnewteam = {teamName: newTeam, teamMember: []};
      setPeople((teamList) => {
        return [...teamList, addnewteam];
      });
      setTeam('');
    } else {
      alert('empty input');
    }
  };

  const sorting = () => {
    if (sort === true){
    teamList.map((each) => {
      each.teamMember.sort()
      setSort(!sort);
      return null; 
      })}
    else if (sort === false){
    teamList.map((each) => {
      each.teamMember.sort().reverse()
      setSort(!sort);
      return null; 
      })}
  }

  return (
    <>
      <button onClick = {sorting}> sort </button>      
      {teamList.map((person) => {
        const {teamName} = person;
        return (
          <>
            <h2>{teamName}</h2>
            <Showmem {...person}/>
          </>
        );
      })}
      <form>
        <div>
          <input
            value={newTeam}
            onChange={(e) => setTeam(e.target.value)}
          />
        </div>
        <button onClick ={AddTeam}> Add Team </button>
      </form>
    </>
  );
};

export default OrganiseTeam;