"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const TESTContainer = styled.section`
  background-color: wheat;
  color: black;
  height: 100vh;
`;

const TEST = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/tests');
          const data = response.data;
          setData(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);

    return(
        <TESTContainer>
          Table: TEST
           {data.map((item, idx) => (
            <div key={item.id}>
                <p>Name: {item.name} Email: {item.email} Password: {item.password}</p>
            </div>
            ))}
        </TESTContainer>
    );
}

export default TEST;