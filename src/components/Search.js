import React from 'react'


const Search = ({getQ, onSubmit, tweet, setTweet}) => {
const onChange = (q) =>{
  getQ(q)
}

  return (
    <section className = 'search'>
      <form onSubmit = {onSubmit}>
        <input
        type = 'text'
        className = 'create-tweet'
        placeholder = ' Create Tweet'
        value ={tweet}
        onChange = {(e) => onChange(e.target.value)}
         />
      </form>
    </section>
  )
}

export default Search
