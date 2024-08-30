'use client'
import { Fugaz_One } from "next/font/google";
import React, {useState, useEffect} from "react";
import Calendar from "./Calendar";
import { useAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import Loading from "./Loading";
import Login from "./Login";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Dashboard(){
  const {currentUser, userDataObj, setUserDataObj, loading} = useAuth()
}