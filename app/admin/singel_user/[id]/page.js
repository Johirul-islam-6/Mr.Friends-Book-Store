"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingelUsers = () => {
  const { id } = useParams();
  const [singelUser, setSingelUser] = useState();

  useEffect(() => {
    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8080/api/v1/users/${id}`
        );

        setSingelUser(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <>
      <div className="singel-user">{singelUser?.name}</div>
    </>
  );
};

export default SingelUsers;
