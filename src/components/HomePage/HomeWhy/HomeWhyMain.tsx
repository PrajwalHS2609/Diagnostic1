import "./HomeWhy.css";

export default function HomeWhyMain() {
  const data = [
    {
      id: "1",
      img: "https://invivohospitals.com/wp-content/uploads/elementor/thumbs/icon-5-ptl401rsl6a7sqn9oacmpey96moqzlix4d3gqeqhtc.png",
      title: "Expertise and Experience",
    },
    {
      id: "2",
      img: "https://invivohospitals.com/wp-content/uploads/elementor/thumbs/icon-4-ptl3zyya0o6ctwrd4r4qzxnveh2nci7q3z50akuoc0.png",
      title: "Cutting-Edge Technology",
    },
    {
      id: "3",
      img: "https://invivohospitals.com/wp-content/uploads/elementor/thumbs/icon-1-ptl3zrfkhzw2912acnvqfzk6ne3pmxdvexx4gd5tps.png",
      title: "Comprehensive Services  ",
    },
    {
      id: "4",
      img: "https://invivohospitals.com/wp-content/uploads/elementor/thumbs/icon-2-ptl3zu932hzx7uy6w73m5gukfjpta0p2fbvkw71n74.png",
      title: "Patient-Centric Care",
    },
    {
      id: "5",
      img: "https://invivohospitals.com/wp-content/uploads/elementor/thumbs/icon-3-ptl3zw4rg62hv2vgl7wvagdhmbgjpewj3l6juqyuuo.png",
      title: "Commitment to Quality",
    },
    {
      id: "6",
      img: "https://invivohospitals.com/wp-content/uploads/elementor/thumbs/icon-5-ptl401rsl6a7sqn9oacmpey96moqzlix4d3gqeqhtc.png",
      title: "Transparent Processes",
    },
    {
      id: "7",
      img: "https://invivohospitals.com/wp-content/uploads/elementor/thumbs/icon-4-ptl3zyya0o6ctwrd4r4qzxnveh2nci7q3z50akuoc0.png",
      title: "Positive Patient Experience",
    },
    {
      id: "8",
      img: "https://invivohospitals.com/wp-content/uploads/elementor/thumbs/icon-1-ptl3zrfkhzw2912acnvqfzk6ne3pmxdvexx4gd5tps.png",
      title: "Community Trust",
    },
    {
      id: "9",
      img: "https://invivohospitals.com/wp-content/uploads/elementor/thumbs/icon-2-ptl3zu932hzx7uy6w73m5gukfjpta0p2fbvkw71n74.png",
      title: "Continuous Improvement",
    },
    {
      id: "10",
      img: "https://invivohospitals.com/wp-content/uploads/elementor/thumbs/icon-3-ptl3zw4rg62hv2vgl7wvagdhmbgjpewj3l6juqyuuo.png",
      title: "Holistic Health Focus",
    },
  ];
  return (
    <div className="homeWhyMain-container">
      {data.map((x) => (
        <div className="homeWhyMain-card" key={x.id}>
          <img src={x.img} alt={x.title} />
          <h6>{x.title}</h6>
        </div>
      ))}
    </div>
  );
}
