import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { Link } from 'react-router-dom';
import './Crewmatelist.css';
import EditCrewmateForm from './EditCrewmateForm';

const CrewmateList = () => {
  const [crewmates, setCrewmates] = useState([]);
  const [editingCrewmate, setEditingCrewmate] = useState(null);

  useEffect(() => {
    fetchCrewmates();
  }, []);

  const fetchCrewmates = async () => {
    const { data, error } = await supabase.from('crewmates').select('*');
    if (error) {
      console.error('Error fetching crewmates:', error);
    } else {
      setCrewmates(data);
    }
  };

  const deleteCrewmate = async (id) => {
    const { error } = await supabase.from('crewmates').delete().eq('id', id);
    if (error) {
      console.error('Error deleting crewmate:', error);
    } else {
      fetchCrewmates();
    }
  };

  const startEditingCrewmate = (crewmate) => {
    setEditingCrewmate(crewmate);
  };

  const stopEditingCrewmate = () => {
    setEditingCrewmate(null);
    fetchCrewmates();
  };

  return (
    <div className="crewmate-list">
      <h2>Crewmate List</h2>
      {editingCrewmate ? (
        <EditCrewmateForm crewmate={editingCrewmate} onUpdate={stopEditingCrewmate} />
      ) : (
        <ul>
          {crewmates.map((crewmate) => (
            <li key={crewmate.id}>
              <Link to={`/crewmate/${crewmate.id}`}>
                {crewmate.name} ({crewmate.attribute})
              </Link>
              <button onClick={() => startEditingCrewmate(crewmate)}>Edit</button>
              <button onClick={() => deleteCrewmate(crewmate.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CrewmateList;