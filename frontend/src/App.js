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
  const [threadCount, setThreadCount] = useState(0);

  const FindAndSetCpuParams = (data) => {
    const cpu = data.CPUInfo;
    const os = data.Os;

    let coreCount = 0;
    let threadCount = 0;

    /* 
      For some reason the library being used gives different results 
      on different platforms such as linux and darwin.
      Hence the following switch case handles that
    */
    switch(os) {
      case "linux":
        // core counts
        let a = [];
        cpu.forEach(c => {
          if (a.includes(c.coreId)) {
            return;
          }
          a.push(c.coreId);
        });
        coreCount = a.length;

        // thread counts
        threadCount = cpu.length;
        break;

      case "darwin":
        // core count
        coreCount = cpu[0].cores;

        // thread count
        threadCount = data.Count;
        break;

      default:
        // core count
        coreCount = cpu[0].cores;

        // thread count
        threadCount = data.Count;
    }
    
    setCoreCount(coreCount);
    setThreadCount(threadCount);
  }

	useEffect(() => {
    window.backend.initStats().then((result) => {
      setResult(result);
      FindAndSetCpuParams(result);
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
          <span className="SecondaryText">Total Threads:</span> {threadCount}
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
