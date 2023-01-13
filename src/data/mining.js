const ORE = {
    mineIron: {
		time: 3,
		item: "iron",
		icon: require("@/assets/art/mining/SheetIron.png"),
		xp: 10,
		requiredLevel: 1
	},
	mineCopper: {
		time: 3,
		item: "copper",
		icon: require("@/assets/art/mining/SheetCopper.png"),
		xp: 14,
		requiredLevel: 20
	},
	mineBronze: {
		time: 3,
		item: "bronze",
		icon: require("@/assets/art/mining/SheetBronze.png"),
		xp: 18,
		requiredLevel: 40
	},
	mineCobalt: {
		time: 3,
		item: "cobalt",
		icon: require("@/assets/art/mining/SheetCobalt.png"),
		xp: 22,
		requiredLevel: 60
	},
	mineManganese: {
		time: 3,
		item: "manganese",
		icon: require("@/assets/art/mining/SheetManganese.png"),
		xp: 26,
		requiredLevel: 80
	},
	mineTin: {
		time: 3,
		item: "tin",
		icon: require("@/assets/art/mining/SheetTin.png"),
		xp: 30,
		requiredLevel: 100
	},
	mineSilicate: {
		time: 3,
		item: "silicate",
		icon: require("@/assets/art/mining/SheetSilicate.png"),
		xp: 30,
		requiredLevel: 100
	},
	minesilver: {
		time: 3,
		item: "silver",
		icon: require("@/assets/art/mining/SheetSilver.png"),
		xp: 34,
		requiredLevel: 120
	},
	mineBauxite: {
		time: 3,
		item: "bauxite",
		icon: require("@/assets/art/mining/SheetBauxite.png"),
		xp: 38, 
		requiredLevel: 140
	},
	mineGold: {
		time: 3,
		item: "gold",
		icon: require("@/assets/art/mining/SheetGold.png"),
		xp: 42,
		requiredLevel: 160
	},
	mineDolomite: {
		time: 3,
		item: "dolomite",
		icon: require("@/assets/art/mining/SheetDolomite.png"),
		xp: 46,
		requiredLevel: 180
	},
	mineObsidian: {
		time: 3,
		item: "obsidian",
		icon: require("@/assets/art/mining/SheetObsidian.png"),
		xp: 50,
		requiredLevel: 200
	},
	mineSepiolite: {
		time: 3,
		item: "sepiolite",
		icon: require("@/assets/art/mining/SheetSepiolite.png"),
		xp: 50,
		requiredLevel: 200
	},
}

const ALLOY = {
    alloyaluminite: {
        name: "Aluminite",
		items:
		{
			id: "aluminite",
			count: 2,
		},
		actionName: "MELT",
        icon: require("@/assets/art/mining/Aluminite.png"),
        time: 10,
        xp: 48,
        requiredLevel: 20,
        requiredItems: { copper: 10, iron: 10 }
    },
    alloyebonite: {
        name: "Ebonite",
		items:
		{
			id: "ebonite",
			count: 2,
		},
		actionName: "MELT",
        icon: require("@/assets/art/mining/Ebonite.png"),
        time: 10,
        xp: 84,
        requiredLevel: 40,
        requiredItems: { bronze: 10, copper: 10, iron: 10 }
    },
	alloymagnesite: {
        name: "Magnesite",
		items:
		{
			id: "magnesite",
			count: 2,
		},
		actionName: "MELT",
        icon: require("@/assets/art/mining/Magnesite.png"),
        time: 10,
        xp: 128,
        requiredLevel: 60,
        requiredItems: { bronze: 10, cobalt: 10 , copper: 10, iron: 10}
    },
	alloybakelelite: {
        name: "Bakelelite",
		items:
		{
			id: "bakelelite",
			count: 2,
		},
		actionName: "MELT",
        icon: require("@/assets/art/mining/Bakelelite.png"),
        time: 10,
        xp: 160,
        requiredLevel: 80,
        requiredItems: { bronze: 10, cobalt: 10,copper: 10, manganese: 10 }
    },
	alloykouartz: {
        name: "Kouartz",
		items:
		{
			id: "kouartz",
			count: 2,
		},
		actionName: "MELT",
        icon: require("@/assets/art/mining/Kouartz.png"),
        time: 10,
        xp: 220,
        requiredLevel: 100,
        requiredItems: { bronze: 10, cobalt: 10,silicate: 10, manganese: 10 ,tin: 10 }
    },
	alloykriptonite: {
        name: "Kriptonite",
		items:
		{
			id: "kriptonite",
			count: 2,
		},
		actionName: "MELT",
        icon: require("@/assets/art/mining/Kriptonite.png"),
        time: 10,
        xp: 288,
        requiredLevel: 120,
        requiredItems: { bronze: 10, cobalt: 10,manganese: 10 ,silver: 10,silicate: 10 ,tin: 10}
    },
	alloykobalite: {
        name: "Kobalite",
		items:
		{
			id: "kobalite",
			count: 2,
		},
		actionName: "MELT",
        icon: require("@/assets/art/mining/Kobalite.png"),
        time: 10,
        xp: 328,
        requiredLevel: 140,
        requiredItems: { bauxite: 10, cobalt: 10,manganese: 10 ,silicate: 10,silver: 10 ,tin: 10}
    },
	alloybrassic: {
        name: "Brassic",
		items:
		{
			id: "brassic",
			count: 2,
		},
		actionName: "MELT",
        icon: require("@/assets/art/mining/Brassic.png"),
        time: 10,
        xp: 412,
        requiredLevel: 160,
        requiredItems: { bauxite: 10, cobalt: 10,gold: 10 ,manganese: 10,silicate: 10 ,silver: 10,tin: 10  }
    },
	alloypyrute: {
        name: "Pyrute",
		items:
		{
			id: "pyrute",
			count: 2,
		},
		actionName: "MELT",
        icon: require("@/assets/art/mining/Pyrute.png"),
        time: 10,
        xp: 504,
        requiredLevel: 180,
        requiredItems: { bauxite: 10, cobalt: 10, dolomite: 10, gold: 10 ,manganese: 10,silicate: 10 ,silver: 10,tin: 10 }
    },
	alloyardonite: {
        name: "Ardonite",
		items:
		{
			id: "ardonite",
			count: 2,
		},
		actionName: "MELT",
        icon: require("@/assets/art/mining/Ardonite.png"),
        time: 10,
        xp: 560,
        requiredLevel: 200,
        requiredItems: { bauxite: 10, dolomite: 10, gold: 10 ,manganese: 10,obsidian: 10 ,silicate: 10 ,silver: 10,tin: 10 }
    }
}


Object.values(ORE).forEach(action => action.type = "Ores");
Object.values(ALLOY).forEach(action => action.type = "Alloys");

export const ACTIONS = {
    ...ORE,
    ...ALLOY
}
export const JOB = {
	id: "mining",
	name: "Mining",
	icon: require("@/assets/art/mining/icon.png"),
	color: "#95857a"
}
