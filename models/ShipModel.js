class ShipModel {
    ID = -1;
    Name = "";
    Power = 0;
    Shield = 0;
    ShipClass = undefined;
    Defence = 0;
    Attack = 0;
    constructor(name, power, shield, defence, attack, shipClass) {
        this.Name = name.toString();
        this.Power = typeof power === "number" ? power : 0;
        this.Shield = typeof shield === "number" ? shield : 0;
        this.Defence = typeof defence === "number" ? defence : 0;
        this.Attack = typeof attack === "number" ? attack : 0;
        this.ShipClass = ShipClassEnum.Check(shipClass) ? shipClass : undefined;
    }
}