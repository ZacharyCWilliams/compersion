import React, { useState, useEffect } from 'react'
import styles from "./SidePanel.module.css";
import SidePanelHeader from "./SidePanelHeader/SidePanelHeader";
import SidePanelContent from "./SidePanelContent/SidePanelContent";

const SidePanel = () => {

  const [searchInput, setSearchInput] = useState("")
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])

  const data = [
    { id: "01", img: "https://st4.depositphotos.com/4216129/31103/v/1600/depositphotos_311035032-stock-illustration-friendly-smile-on-the-face.jpg", title: "The richest man in babylon", reward: "$100" },
    { id: "02", img: "https://st4.depositphotos.com/4216129/31103/v/1600/depositphotos_311035032-stock-illustration-friendly-smile-on-the-face.jpg", title: "Why? Why not? Why not you?", reward: "$100" },
    { id: "03", img: "https://st4.depositphotos.com/4216129/31103/v/1600/depositphotos_311035032-stock-illustration-friendly-smile-on-the-face.jpg", title: "Everything has a price", reward: "$100" },
    { id: "04", img: "https://st4.depositphotos.com/4216129/31103/v/1600/depositphotos_311035032-stock-illustration-friendly-smile-on-the-face.jpg", title: "Meaning for you", reward: "$100" },
    { id: "05", img: "https://st4.depositphotos.com/4216129/31103/v/1600/depositphotos_311035032-stock-illustration-friendly-smile-on-the-face.jpg", title: "I want you to feel good about yourself", reward: "$100" },
    { id: "06", img: "https://st4.depositphotos.com/4216129/31103/v/1600/depositphotos_311035032-stock-illustration-friendly-smile-on-the-face.jpg", title: "Build a tomorrow that inspires others", reward: "$100" },
    { id: "07", img: "https://st4.depositphotos.com/4216129/31103/v/1600/depositphotos_311035032-stock-illustration-friendly-smile-on-the-face.jpg", title: "Quiet wins", reward: "$100" },
    { id: "08", img: "https://st4.depositphotos.com/4216129/31103/v/1600/depositphotos_311035032-stock-illustration-friendly-smile-on-the-face.jpg", title: "There isn't anything you can't accomplish", reward: "$100" },
  ]

  //  const filteredResults = () => {
  //   let filteredList = list;
  //   if (searchInput !== "") {
  //     filteredList = filteredList.filter((item) => {
  //       return item.name.toLowerCase().includes(searchInput.toLowerCase());
  //     });
  //   }
  //   setFilteredList(filteredList)
  // };

   useEffect(() => {
    if (data) {
      setList(data)
    }

    // if (searchInput !== "") {
    //   filteredResults()
    // }
  }, []);

  return (
    <>
      <div className={styles.sticky}>
        <SidePanelHeader />
        <input onChange={e => setSearchInput(e.target.value)} className={styles.searchBar} placeholder="Search" type="text"/>
      </div>
      <SidePanelContent data={list} />
    </>
  )
}

export default SidePanel

    {/* <SearchBar /> */}
        {/* <ThreadList /> */}
