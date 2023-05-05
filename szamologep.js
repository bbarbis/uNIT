class Szamologep{
    //constructor(){}
    szamol(a, b, operator) {
        //mind a kettő jó
        if (typeof a === "undefined" || b == null || operator == null)
            return "Három paraméter szükséges!";
        if (isNaN(a) || isNaN(b))
            return "A paraméterek számok legyenek!";
        if (!(
            isFinite(Number(a)) && 
            isFinite(Number(a)) &&
            isFinite(eval(Number(a) +operator+  Number(b))))
            )
            return "Túlcsordulás!";
        return (eval(Number(a) +operator+  Number(b))).toFixed(10);
      }
}