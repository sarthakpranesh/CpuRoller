import React, {useState, useEffect} from 'react';
import './App.css';

// importing components
import CircularUsage from './components/CircularUsage/index.js'

import CpuLogo from './logo.png';

const gbFact = 1073741824;

function App() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [coreCount, setCoreCount] = useState(0);

  const FindAndSetCoreCount = (cpu) => {
    let a = [];
    cpu.forEach(c => {
      if (a.includes(c.coreId)) {
        return;
      }
      a.push(c.coreId);
    });
    setCoreCount(a.length);
  }

	useEffect(() => {
    window.backend.initStats().then((result) => {
      setResult(result);
      FindAndSetCoreCount(result.CPUInfo);
      setLoading(false);
    });
		setInterval(() => {
			window.backend.updateCPUStats().then((result) => {
        // console.log(result)
        setResult(result)
      });
    }, 1000);
  }, [])

  if (loading) {
    return (
      <div id="app" className="App">
        <img src={CpuLogo} />
      </div>
    )
  }
  
  return (
    <div id="app" className="App">
        <div className="GridContainer">
          <div className="GridItem">
            <CircularUsage
              percentage={result !== null ? result.Usage : 0}
              title="CPU"
              subContent={`${result !== null ? (result.Usage).toPrecision(2) : 0}%`}
            />
          </div>
          <div className="GridItem">
            <CircularUsage
              percentage={result !== null ? result.Mem.usedPercent : 0}
              title="RAM"
              subContent={`${result !== null ? (result.Mem.used/gbFact).toPrecision(2) : 0}/${result !== null ? (result.Mem.total/gbFact).toPrecision(2) : 0} GB`}
            />
          </div>
          <div className="GridItem">
            <CircularUsage
              percentage={result !== null ? result.Swap.usedPercent : 0}
              title="SWAP"
              subContent={`${result !== null ? (result.Swap.used/gbFact).toPrecision(2) : 0}/${result !== null ? (result.Swap.total/gbFact).toPrecision(2) : 0} GB`}
            />
          </div>
        </div>
        <h5 className="PrimaryText SysInfo">
          <span className="SecondaryText">
            CPU Model:
          </span>
          {result !== null ? 
            ( result.CPUInfo !== null ? 
              result.CPUInfo[0].modelName 
              : "" 
            )
              : ""
          }
        </h5>
        <h5 className="PrimaryText SysInfo">
          <span className="SecondaryText">Total CPUs:</span> {coreCount}
        </h5>
        <h5 className="PrimaryText SysInfo">
          <span className="SecondaryText">Total Threads:</span> {result !== null ? result.CPUInfo.length : 0}
        </h5>
        <h5 className="PrimaryText SysInfo">
          <span className="SecondaryText">Cache Size:</span> {result !== null ? result.CPUInfo[0].cacheSize : 0}
        </h5>
        <h5 className="PrimaryText SysInfo">
          <span className="SecondaryText">Operating System:</span> {result !== null ? result.Os : " "}
        </h5>
        <h5 className="PrimaryText SysInfo">
          <span className="SecondaryText">System Arch:</span> {result !== null ? result.Arch : " "}
        </h5>
    </div>
  );
}

export default App;
