import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find A User'/>
      </div>
      <div className="userChat">
        <img src="https://www.springboard.com/blog/wp-content/uploads/2022/06/what-does-a-coder-do-2022-career-guide-1.jpg" alt="" srcset="" />
        <div className="userChatInfo">
          <span>Tuan</span>
        </div>
        <img src="https://www.springboard.com/blog/wp-content/uploads/2022/06/what-does-a-coder-do-2022-career-guide-1.jpg" alt="" srcset="" />
        <div className="userChatInfo">
          <span>Dan</span>
        </div>
      </div>
    </div>
  )
}

export default Search