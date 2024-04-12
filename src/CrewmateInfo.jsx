import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import { useParams } from 'react-router-dom'
import './info.css'

const CrewmateInfo = () => {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    fetchCrewmate()
  }, [id])

  const fetchCrewmate = async () => {
    const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single()
    if (error) {
      console.error('Error fetching crewmate:', error)
    } else {
      setCrewmate(data)
    }
  }

  return (
    <div className="crewmate-info">
      {crewmate ? (
        <>
          <h2>{crewmate.name}</h2>
          <p>
            Attribute: <span className="attribute">{crewmate.attribute}</span>
          </p>
        </>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  )
}

export default CrewmateInfo