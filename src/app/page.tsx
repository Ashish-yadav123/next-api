"use client";
async function getData() {
  const res = await fetch("http://localhost:3000/api", {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
import ApiApp from "../../component/apiApp";

export default async function Home() {
  const data = await getData();
  console.log(data.data.title, "data");

  return (
    <>
      <ApiApp />
      <div>
        {/* {data.map((obj, i) => (
          <div key={i}>{obj.title}</div>
        ))} */}
      </div>
    </>
  );
}
