export namespace cpu {
	
	export class InfoStat {
	    cpu: number;
	    vendorId: string;
	    family: string;
	    model: string;
	    stepping: number;
	    physicalId: string;
	    coreId: string;
	    cores: number;
	    modelName: string;
	    mhz: number;
	    cacheSize: number;
	    flags: string[];
	    microcode: string;
	
	    static createFrom(source: any = {}) {
	        return new InfoStat(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.cpu = source["cpu"];
	        this.vendorId = source["vendorId"];
	        this.family = source["family"];
	        this.model = source["model"];
	        this.stepping = source["stepping"];
	        this.physicalId = source["physicalId"];
	        this.coreId = source["coreId"];
	        this.cores = source["cores"];
	        this.modelName = source["modelName"];
	        this.mhz = source["mhz"];
	        this.cacheSize = source["cacheSize"];
	        this.flags = source["flags"];
	        this.microcode = source["microcode"];
	    }
	}

}

export namespace mem {
	
	export class SwapMemoryStat {
	    total: number;
	    used: number;
	    free: number;
	    usedPercent: number;
	    sin: number;
	    sout: number;
	    pgin: number;
	    pgout: number;
	    pgfault: number;
	    pgmajfault: number;
	
	    static createFrom(source: any = {}) {
	        return new SwapMemoryStat(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.total = source["total"];
	        this.used = source["used"];
	        this.free = source["free"];
	        this.usedPercent = source["usedPercent"];
	        this.sin = source["sin"];
	        this.sout = source["sout"];
	        this.pgin = source["pgin"];
	        this.pgout = source["pgout"];
	        this.pgfault = source["pgfault"];
	        this.pgmajfault = source["pgmajfault"];
	    }
	}
	export class VirtualMemoryStat {
	    total: number;
	    available: number;
	    used: number;
	    usedPercent: number;
	    free: number;
	    active: number;
	    inactive: number;
	    wired: number;
	    laundry: number;
	    buffers: number;
	    cached: number;
	    writeback: number;
	    dirty: number;
	    writebacktmp: number;
	    shared: number;
	    slab: number;
	    sreclaimable: number;
	    sunreclaim: number;
	    pagetables: number;
	    swapcached: number;
	    commitlimit: number;
	    committedas: number;
	    hightotal: number;
	    highfree: number;
	    lowtotal: number;
	    lowfree: number;
	    swaptotal: number;
	    swapfree: number;
	    mapped: number;
	    vmalloctotal: number;
	    vmallocused: number;
	    vmallocchunk: number;
	    hugepagestotal: number;
	    hugepagesfree: number;
	    hugepagesize: number;
	
	    static createFrom(source: any = {}) {
	        return new VirtualMemoryStat(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.total = source["total"];
	        this.available = source["available"];
	        this.used = source["used"];
	        this.usedPercent = source["usedPercent"];
	        this.free = source["free"];
	        this.active = source["active"];
	        this.inactive = source["inactive"];
	        this.wired = source["wired"];
	        this.laundry = source["laundry"];
	        this.buffers = source["buffers"];
	        this.cached = source["cached"];
	        this.writeback = source["writeback"];
	        this.dirty = source["dirty"];
	        this.writebacktmp = source["writebacktmp"];
	        this.shared = source["shared"];
	        this.slab = source["slab"];
	        this.sreclaimable = source["sreclaimable"];
	        this.sunreclaim = source["sunreclaim"];
	        this.pagetables = source["pagetables"];
	        this.swapcached = source["swapcached"];
	        this.commitlimit = source["commitlimit"];
	        this.committedas = source["committedas"];
	        this.hightotal = source["hightotal"];
	        this.highfree = source["highfree"];
	        this.lowtotal = source["lowtotal"];
	        this.lowfree = source["lowfree"];
	        this.swaptotal = source["swaptotal"];
	        this.swapfree = source["swapfree"];
	        this.mapped = source["mapped"];
	        this.vmalloctotal = source["vmalloctotal"];
	        this.vmallocused = source["vmallocused"];
	        this.vmallocchunk = source["vmallocchunk"];
	        this.hugepagestotal = source["hugepagestotal"];
	        this.hugepagesfree = source["hugepagesfree"];
	        this.hugepagesize = source["hugepagesize"];
	    }
	}

}

