import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'

const getUnique = (items, value) => {
  // with the items param, get every object and look for this value within it
  // then return the array as a new Object.
  return [...new Set(items.map(item => item[value]))]
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
  // add all to types
  types = ['all', ...types]
  // map to jsx
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guests type */}
        <div className="form-group">
          <label htmlFor="capacity">Capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests type */}
        {/* Room Price */}
        <div className="form-group">
          <label htmlFor="Price">Room Price: ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* Size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <input
            type="number"
            name="minSize"
            id="size"
            value={minSize}
            onChange={handleChange}
            className="size-input"
          />
          <input
            type="number"
            name="maxSize"
            id="size"
            value={maxSize}
            onChange={handleChange}
            className="size-input"
          />
        </div>
        {/* End of Size */}
        {/* Extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* End of extras */}
        {}
      </form>
    </section>
  )
}
