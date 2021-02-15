const ShipClassEnum = {
    Fregat : 1,
    Corvet: 2,
    Cruser: 3, // krążownik
    Destroyer: 4, // niszczyciel
    Fighter: 5, // myśliwiec
    Carrier: 6, // lotniskowiec
    Science: 7,
    Colony: 8,
    Check: (value) => {
        const keys = Object.keys(ShipClassEnum);
        let result = false;
        for(let key in keys) {
            if(ShipClassEnum[key] === value) {
                result = true;
            }
        }
        return result;
    }
};
