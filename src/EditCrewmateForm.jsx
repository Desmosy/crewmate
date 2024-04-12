
import { useState } from 'react';
import { supabase } from './supabase';

const EditCrewmateForm = ({ crewmate, onUpdate }) => {
  const [name, setName] = useState(crewmate.name);
  const [attribute, setAttribute] = useState(crewmate.attribute);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('crewmates').update({ name, attribute }).eq('id', crewmate.id);
    if (error) {
      console.error('Error updating crewmate:', error);
    } else {
      onUpdate();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={attribute} onChange={(e) => setAttribute(e.target.value)}>
        <option value="">Select attribute</option>
        <option value="Controller">Controller</option>
        <option value="Fighter">Fighter</option>
        <option value="Mage">Mage</option>
        <option value="Marksman">Marksman</option>
        <option value="Slayer">Slayer</option>
        <option value="Tank">Tank</option>
        <option value="Specialist">Specialist</option>
      </select>
      <button type="submit">Update Crewmate</button>
    </form>
  );
};

export default EditCrewmateForm;