import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'

const getUnique = (items, value) => {
  return [...new Set(item.map(item => item[value]))]
}
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  // get unique types 
  let types = getUnique(rooms, 'type');
  // add all`
  types = ['all', ...types]
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            <option value="single">Single</option>
          </select>
        </div>
        {/* end select type */}
      </form>
    </section>
  )
}
