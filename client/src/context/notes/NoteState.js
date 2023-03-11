import noteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const videoInitial = [];

  const [video, setVideo] = useState(videoInitial);

  const getNotes = async () => {
    const response = await fetch(`${host}/api/video/fetchallvideos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwYzBjY2M4ZWUwYjIzOTA2Nzc3ZDZkIn0sImlhdCI6MTY3ODUxMTMwOH0.uBRL3YjB0rNfK-akQuuubdUH7h_H9zQcd630Jiv3cxk",
      },
    }); 
    const json = await response.json();
    setVideo(json);
  };

  //AddNote
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/video/addvideo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    setVideo(video.concat(json));
  };

  //DeleteNote
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/video/deletevideo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      }
    });
    const json = await response.json();
    console.log(json);
    console.log("Deleting video button" + id);
    const newNotes = video.filter((note) => {
      return note._id !== id;
    });
    setVideo(newNotes);
  };

  //EditNote
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/video/updatevideo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description}),
    });
    const json = await response.json();
    console.log(json);
    let newNote = JSON.parse(JSON.stringify(video));
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        break;
      }
    }
    setVideo(newNote);
  };

  const likeNotes= async(id,like)=>{
    const response = await fetch(`${host}/api/video/updatevideo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
      body: JSON.stringify({ like }),
    });
    const json = await response.json();
    let newNote = JSON.parse(JSON.stringify(video));
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].like = like;
        break;
      }
    }
    setVideo(newNote);
  }

  return (
    <noteContext.Provider
      value={{ video, addNote, deleteNote, editNote, getNotes,likeNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
