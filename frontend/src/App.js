import React, {useState, useEffect} from 'react';
import './App.css';

// importing components
import SectionTable from './components/SectionTable/index.js'

function App() {
  const [result, setResult] = useState(null);

	useEffect(() => {
    window.backend.initStats().then((result) => setResult(result));
		setInterval(() => {
			window.backend.updateCPUStats().then((result) => {
        console.log(result)
        setResult(result)
      });
		}, 1000);
  }, [])
  
  return (
    <div id="app" className="App">
        <h2 className="PrimaryText SysInfo">Operating System: {result !== null ? result.Os : "..."}</h2>
        <h2 className="PrimaryText SysInfo">System Arch: {result !== null ? result.Arch : "..."}</h2>
        <div className="GridContainer">
          <div className="GridItem">
            <SectionTable title="CPU Info" data={{
              "Cores": result !== null ? result.Count : 0,
              "Threads": result !== null ? (result.CPUInfo.length !== 0 ? result.CPUInfo.length : 0) : 0,
              "Usage": result !== null ? result.Usage : 0,
              "Name": result !== null ? (result.CPUInfo.length !== 0 ? result.CPUInfo[0].modelName : "...") : "...",
              }}
            />
          </div>
          <div className="GridItem">
            <SectionTable title="System RAM" data={{
              Total: result !== null ? result.Mem.total : 0,
              Used: result !== null ? result.Mem.used : 0,
              Available: result !== null ? result.Mem.available : 0,
              "Used %": result !== null ? `${Math.round(result.Mem.usedPercent)}%` : "0%"
              }}
            />
          </div>
          <div className="GridItem">
            <SectionTable title="Swap" data={{
              Total: result !== null ?result.Swap.total : 0,
              Used: result !== null ?result.Swap.used : 0,
              Available: result !== null ?result.Swap.free : 0,
              "Used %": result !== null ? `${Math.round(result.Swap.usedPercent)}%` : "0%"
              }}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
