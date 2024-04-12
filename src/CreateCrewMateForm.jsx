import { useState } from 'react';
import { supabase } from './supabase';
import "./Createcrew.css";

const CreateCrewmateForm = () => {
  const [name, setName] = useState('');
  const [attribute, setAttribute] = useState('');

  const attributeInfo = {
    Controller: {
      icon: '🛑',
      description: 'Controllers are masters of crowd control and manipulation, able to dictate the flow of battle through their disruptive abilities. They excel at controlling enemy movements, immobilizing foes, and creating opportunities for their team to capitalize on. While lacking in raw damage output, controllers make up for it with their ability to lock down key targets and turn the tide of battle in their team\'s favor.',
    },
    Fighter: {
      icon: '⚔️',
      description: 'Fighters are versatile combatants who excel in both dealing and taking damage. They possess a balance of offensive and defensive capabilities, making them formidable in close-quarters combat. Fighters often have sustained damage output and moderate crowd control abilities, allowing them to engage in extended fights and control the battlefield.',
    },
    Mage: {
      icon: '🔮',
      description: 'Mages are powerful spellcasters who unleash devastating magical abilities to decimate their enemies from afar. They rely on their potent spells to deal burst or sustained damage, often targeting multiple opponents at once. Mages typically have low durability but compensate with high damage potential and strong area control, making them deadly threats in team fights.',
    },
    Marksman: {
      icon: '🏹',
      description: 'Marksmen are ranged attackers who rely on their basic attacks to deal consistent damage over time. They excel at shredding through enemy defenses and taking down high-value targets from a safe distance. Marksmen typically require protection from their team due to their low mobility and vulnerability to being focused down, but in return, they offer unparalleled sustained damage output in team fights.',
    },
    Slayer: {
      icon: '🗡️',
      description: 'Slayers are agile and burst-oriented champions who specialize in hunting down and eliminating high-priority targets. They excel at swiftly dispatching squishy opponents with their high damage output and mobility. Slayers often possess tools for quickly closing the gap, evading enemy attacks, and bursting down their targets before they have a chance to react. While lacking in durability, slayers make up for it with their ability to swiftly turn the tide of battle through precise strikes and assassinations.',
    },
    Tank: {
      icon: '🛡️',
      description: 'Tanks are durable front-line champions who absorb damage and protect their team from harm. They excel at soaking up punishment, disrupting enemy formations, and initiating fights. Tanks typically have high health pools, defensive abilities, and crowd control tools, allowing them to soak damage and peel for their squishier allies while being a formidable presence on the battlefield.',
    },
    Specialist: {
      icon: '🌀',
      description: 'Specialists are unique champions with unconventional playstyles and abilities that defy traditional classifications. They often excel at fulfilling specific roles or objectives, such as split-pushing, siege warfare, or providing utility to their team in creative ways. Specialists may lack versatility in certain aspects but make up for it with their specialized skills and strategic impact on the game.',
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('crewmates').insert([{ name, attribute }]);
    if (error) {
      console.error('Error inserting crewmate:', error);
    } else {
      setName('');
      setAttribute('');
      console.log('Crewmate inserted:', data);
    }
  };

  return (
    <div className="create-crewmate-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={attribute} onChange={(e) => setAttribute(e.target.value)}>
          <option value="">Select attribute</option>
          {Object.keys(attributeInfo).map((key) => (
            <option key={key} value={key}>
              {attributeInfo[key].icon} {key}
            </option>
          ))}
        </select>
        {attribute && (
          <div className="attribute-description">
            {attributeInfo[attribute].description}
          </div>
        )}
        <button type="submit">Create Crewmate</button>
      </form>
    </div>
  );
};

export default CreateCrewmateForm;
