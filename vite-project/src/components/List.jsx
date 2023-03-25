import React from "react";
import Card from "./Card"

const List = () => {
  const usersData=[
    {
      Name: 'John Doe',
      Job: 'Computer Science',
      Hobby: 'Listening to music'
  },
  {
      Name: 'Jane Doe',
      Job: 'Computer Science',
      Hobby: 'Listening to music'
  },
  {
      Name: 'Jon Snow',
      Job: 'Knight',
      Hobby: 'Listening to music'
  },
  {
      Name: 'Jon Wick',
      Job: 'Hitman',
      Hobby: 'Listening to music'
  }
  ]
  return (
    <div>
       {usersData.map((item) => {
                return <Card newUser={item} />
            })}
    </div>
  );
};

export default List;
