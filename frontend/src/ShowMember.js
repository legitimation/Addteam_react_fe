import React, { useState } from 'react';

const Showmem = (person) => {
  const { teamMember } = person
  const [newMember, setMember] = useState('');

  const AddMember = (e) => {
    e.preventDefault();
    if (newMember) {
      teamMember.push(newMember)
      setMember('');
    } else {
      alert('empty input');
    }
  };

  return (
    <>
    {teamMember.map((each) => {
      return(
        <h4>{each}</h4>
      )
    })}
    <form>
      <div>
        <input
          value={newMember}
          onChange={(e) => setMember(e.target.value)}
        />
      </div>
      <button onClick = {AddMember} > Add Team Member</button>
    </form>
    </>
  )
}

export default Showmem